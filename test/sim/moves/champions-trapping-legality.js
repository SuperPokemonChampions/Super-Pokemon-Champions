'use strict';

const assert = require('assert').strict;
const common = require('../../common');
const {Dex, TeamValidator, Teams} = require('../../../dist/sim');

describe('Champions trapping and legality regressions', () => {
	let battle;
	afterEach(() => {
		battle?.destroy();
		battle = null;
	});
	function make(a = {}, b = {}) {
		battle = common.mod('champions').createBattle({formatid: 'superchampionssingles6v6'}, [[
			{species: 'Wobbuffet', ability: 'Shadow Tag', moves: ['splash'], ...a},
			{species: 'Chansey', ability: 'Natural Cure', moves: ['splash']},
		], [
			{species: 'Mew', ability: 'Synchronize', moves: ['splash'], ...b},
			{species: 'Charizard', ability: 'Blaze', moves: ['splash']},
			{species: 'Chansey', ability: 'Natural Cure', moves: ['splash']},
		]]);
		battle.makeChoices('team 12', 'team 123');
		return battle;
	}
	function validate(species, moves, extra = {}) {
		const dex = Dex.mod('champions');
		return new TeamValidator('superchampionssingles6v6').validateTeam([{
			species, ability: dex.species.get(species).abilities[0], moves, level: 50, ...extra,
		}]);
	}
	it('releases Shadow Tag after two turns and does not reapply on later turns', () => {
		make();
		for (let turn = 1; turn <= 4; turn++) {
			assert.equal(battle.turn, turn);
			assert.equal(!!battle.p2.active[0].trapped, turn <= 2);
			const request = battle.p2.activeRequest.active[0];
			assert.equal(!!(request.trapped || request.maybeTrapped), turn <= 2);
			battle.makeChoices('move 1', 'move 1');
		}
		battle.makeChoices('move 1', 'switch 2');
		assert.equal(battle.p2.active[0].species.id, 'charizard');
		assert(battle.p2.active[0].trapped, 'a new foe receives its own two-turn timer');
	});
	it('restarts Shadow Tag when the holder leaves and returns', () => {
		make();
		battle.makeChoices('move 1', 'move 1');
		battle.makeChoices('move 1', 'move 1');
		assert(!battle.p2.active[0].trapped);
		battle.makeChoices('switch 2', 'move 1');
		assert(!battle.p2.active[0].trapped);
		battle.makeChoices('switch 2', 'move 1');
		assert(battle.p2.active[0].trapped);
		battle.makeChoices('move 1', 'move 1');
		assert(battle.p2.active[0].trapped);
		battle.makeChoices('move 1', 'move 1');
		assert(!battle.p2.active[0].trapped);
	});
	for (const opponent of [{species: 'Gengar', ability: 'Levitate'}, {ability: 'Shadow Tag'}, {item: 'Shed Shell'}]) {
		it('preserves Shadow Tag escape rules: ' + JSON.stringify(opponent), () => {
			make({}, opponent);
			battle.makeChoices('move 1', 'switch 2');
			assert.equal(battle.p2.active[0].species.id, 'charizard');
		});
	}
	it('Parting Shot lowers both offenses two stages, switches, and spends one of eight PP', () => {
		make({species: 'Zoroark', ability: 'Illusion', moves: ['partingshot']});
		const user = battle.p1.active[0];
		battle.makeChoices('move 1', 'move 1');
		assert.equal(battle.p2.active[0].boosts.atk, -2);
		assert.equal(battle.p2.active[0].boosts.spa, -2);
		assert.equal(user.moveSlots[0].maxpp, 8);
		assert.equal(user.moveSlots[0].pp, 7);
		battle.makeChoices('switch 2', '');
		assert.notEqual(battle.p1.active[0], user);
	});
	it('Parting Shot still respects Protect and Soundproof', () => {
		for (const foe of [{moves: ['protect']}, {species: 'Electrode', ability: 'Soundproof'}]) {
			make({species: 'Zoroark', ability: 'Illusion', moves: ['partingshot']}, foe);
			battle.makeChoices('move 1', 'move 1');
			assert.equal(battle.p2.active[0].boosts.atk, 0);
			assert.equal(battle.p2.active[0].boosts.spa, 0);
			assert.equal(battle.p1.active[0].species.id, 'zoroark');
			battle.destroy();
			battle = null;
		}
	});
	it('Clodsire Taunt is in learnset data and validates', () => {
		assert(Dex.mod('champions').species.getLearnsetData('clodsire').learnset.taunt);
		assert.equal(validate('Clodsire', ['taunt']), null);
	});
	it('uses 12.5 percentage points per stage for all five battle stats', () => {
		make({species: 'Mew', ability: 'Synchronize'});
		const pokemon = battle.p1.active[0];
		for (const stat of ['atk', 'def', 'spa', 'spd', 'spe']) {
			const base = pokemon.getStat(stat);
			for (let stage = -12; stage <= 12; stage++) {
				pokemon.boosts[stat] = stage;
				const factor = stage < 0 ? 1 / (1 + Math.abs(stage) / 8) : 1 + stage / 8;
				assert.equal(pokemon.getStat(stat), Math.floor(base * factor), stat + ': ' + stage);
			}
			pokemon.boosts[stat] = 0;
		}
	});
	it('learning levels never restrict Champions moves, including Make It Rain', () => {
		for (const [species, move] of [['Gholdengo', 'makeitrain'], ['Volcarona', 'fierydance'], ['Dragonite', 'outrage']]) {
			assert.equal(validate(species, [move], {level: 45}), null, species);
		}
		for (const [id, data] of Object.entries(Dex.mod('champions').data.Learnsets)) {
			for (const [move, sources] of Object.entries(data.learnset || {})) {
				assert(!sources.some(source => /^\d+L\d+$/.test(source) && Number(source.slice(source.indexOf('L') + 1)) > 1), id + ': ' + move);
			}
		}
		assert(validate('Gholdengo', ['spore']), 'unlearnable moves must still fail');
		assert(Dex.data.Learnsets.gholdengo.learnset.makeitrain.includes('9L56'), 'base learning levels remain unchanged');
	});
	it('rejects imported Gliscor stat points over the per-stat or total limits', () => {
		for (const points of ['33 HP', '32 HP / 32 Atk / 3 Spe', '-1 HP', '252 HP / 252 Atk / 4 Spe']) {
			const team = Teams.import('Gliscor\nAbility: Poison Heal\nLevel: 50\nEVs: ' + points + '\n- Taunt');
			const problems = new TeamValidator('superchampionssingles6v6').validateTeam(team);
			assert(problems?.some(p => /Stat Points/.test(p)), points + ': ' + JSON.stringify(problems));
		}
		assert.equal(validate('Gliscor', ['taunt'], {evs: {hp: 32, atk: 32, spe: 2}}), null);
	});
	it('rejects malformed stats and fractional levels while allowing a valid export round trip', () => {
		for (const extra of [{evs: {atk: 1.5}}, {evs: {atk: Infinity}}, {ivs: {def: 32}}, {ivs: {spe: -1}}, {level: 50.5}]) {
			assert(validate('Gliscor', ['taunt'], extra), JSON.stringify(extra));
		}
		const team = Teams.import('Gliscor\nAbility: Poison Heal\nLevel: 50\nEVs: 32 HP / 32 Atk / 2 Spe\nJolly Nature\n- Taunt');
		assert.equal(new TeamValidator('superchampionssingles6v6').validateTeam(Teams.unpack(Teams.pack(team))), null);
	});
	it('Stealth Rock KOs a low-HP Charizard and damages the next replacement', () => {
		make({species: 'Mew', ability: 'Synchronize', moves: ['stealthrock', 'splash']});
		battle.makeChoices('move 1', 'move 1');
		const charizard = battle.p2.pokemon[1];
		charizard.hp = Math.floor(charizard.maxhp * 0.15);
		battle.makeChoices('move 2', 'switch 2');
		assert(charizard.fainted);
		assert(battle.p2.sideConditions.stealthrock);
		const chansey = battle.p2.pokemon[2];
		battle.makeChoices('', 'switch 3');
		assert.equal(chansey.hp, chansey.maxhp - Math.floor(chansey.maxhp * 0.1));
		assert(battle.p2.sideConditions.stealthrock);
	});
	it('Stealth Rock continues after its setter faints', () => {
		make({species: 'Mew', ability: 'Synchronize', moves: ['stealthrock', 'memento']});
		battle.makeChoices('move 1', 'move 1');
		battle.makeChoices('move 2', 'move 1');
		assert(battle.p1.active[0].fainted);
		battle.makeChoices('switch 2', '');
		const target = battle.p2.pokemon[1];
		battle.makeChoices('move 1', 'switch 2');
		assert.equal(target.hp, target.maxhp - Math.floor(target.maxhp * 0.15));
	});
	it('Stealth Rock still respects Heavy-Duty Boots', () => {
		make({species: 'Mew', ability: 'Synchronize', moves: ['stealthrock', 'splash']}, {item: 'Heavy-Duty Boots'});
		battle.makeChoices('move 1', 'switch 2');
		battle.makeChoices('move 2', 'switch 2');
		assert.equal(battle.p2.active[0].hp, battle.p2.active[0].maxhp);
	});
});
