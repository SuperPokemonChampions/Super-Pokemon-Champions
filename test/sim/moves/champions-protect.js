'use strict';

const assert = require('../../assert');
const common = require('../../common');

let battle;

describe('Champions Protect regression', () => {
	afterEach(() => battle?.destroy());

	it('should block Flamethrower after the protected Pokemon used Shadow Sneak', () => {
		battle = common.mod('champions').createBattle({ formatid: 'superchampionssingles6v6' }, [[
			{ species: 'Zoroark', ability: 'Illusion', moves: ['nastyplot', 'flamethrower'] },
		], [
			{ species: 'Shedinja', ability: 'Wonder Guard', moves: ['shadowsneak', 'protect'] },
		]]);
		battle.makeChoices('team 1', 'team 1');

		battle.makeChoices('move nastyplot', 'move shadowsneak');
		battle.makeChoices('move flamethrower', 'move protect');

		assert.equal(battle.p2.active[0].hp, 1, battle.log.join('\n'));
		assert(battle.log.some(line => line.includes('|-activate|') && line.includes('move: Protect')));
	});

	it('should preserve Protect against Fire Spin', () => {
		battle = common.mod('champions').createBattle({ formatid: 'superchampionssingles6v6' }, [[
			{ species: 'Zoroark', ability: 'Illusion', moves: ['nastyplot', 'firespin'] },
		], [
			{ species: 'Shedinja', ability: 'Wonder Guard', moves: ['shadowsneak', 'protect'] },
		]]);
		battle.makeChoices('team 1', 'team 1');

		battle.makeChoices('move nastyplot', 'move shadowsneak');
		battle.makeChoices('move firespin', 'move protect');

		assert.equal(battle.p2.active[0].hp, 1);
		assert(battle.log.some(line => line.includes('|-activate|') && line.includes('move: Protect')));
	});

	it('should calculate integer max PP for the Champions overrides', () => {
		battle = common.mod('champions').createBattle({ formatid: 'superchampionssingles6v6' }, [[
			{ species: 'Charizard', ability: 'Blaze', moves: ['airslash', 'nightdaze'] },
		], [
			{ species: 'Charizard', ability: 'Blaze', moves: ['tackle'] },
		]]);
		battle.makeChoices('team 1', 'team 1');

		const moveSlots = battle.p1.active[0].moveSlots;
		assert.equal(moveSlots.find(move => move.id === 'airslash').maxpp, 19);
		assert.equal(moveSlots.find(move => move.id === 'nightdaze').maxpp, 12);
	});
});
