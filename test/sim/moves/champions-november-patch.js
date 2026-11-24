'use strict';
describe('Champions November patch', () => {
    const assert = require('assert').strict;
    const common = require('../../common');
    const { Dex, TeamValidator } = require('../../../dist/sim');
    const dex = Dex.mod('champions');
    function check(name, fn) { it(name, fn); }
    function make(a = {}, b = {}) { const battle = common.mod('champions').createBattle({ formatid: 'superchampionssingles6v6' }, [[{ species: 'Mew', ability: 'Synchronize', moves: ['splash'], ...a }, { species: 'Chansey', ability: 'Natural Cure', moves: ['splash'] }], [{ species: 'Mew', ability: 'Synchronize', moves: ['splash'], ...b }, { species: 'Chansey', ability: 'Natural Cure', moves: ['splash'] }]]); battle.makeChoices('team 12', 'team 12'); return battle; }
    check('requested power, accuracy and exact PP', () => { for (const [id, bp, acc, pp] of [['airslash', 90, 90, 12], ['bind', 35, 100, 8], ['bloodmoon', 120, 100], ['boomburst', 120, 100], ['dragonrage', 0, 95, 8], ['lastresort', 120, 90, 5], ['metalclaw', 90, 95, 16], ['overheat', 110, 90], ['return', 92, 100, 8], ['seismictoss', 0, 60, 8], ['steelwing', 70, 95]]) {
        const m = dex.moves.get(id);
        assert.equal(m.basePower, bp, id);
        assert.equal(m.accuracy, acc, id);
        if (pp) {
            const b = make({ moves: [id] });
            assert.equal(b.p1.active[0].moveSlots[0].maxpp, pp, id);
            b.destroy();
        }
    } });
    for (const id of ['earthquake', 'bulldoze', 'magnitude', 'surf', 'sparklingaria', 'discharge', 'paraboliccharge', 'lavaplume', 'searingshot', 'mindblown', 'boomburst', 'explosion', 'selfdestruct', 'sludgewave', 'brutalswing', 'petalblizzard'])
        check('clears hazards against Protect: ' + id, () => { const b = make({ moves: [id] }, { moves: ['protect'] }); for (const side of b.sides)
            side.addSideCondition('spikes', b.p1.active[0]); b.makeChoices('move 1', 'move 1'); for (const side of b.sides)
            assert(!side.sideConditions.spikes, b.log.join('\n')); b.destroy(); });
    for (const id of ['bloodmoon', 'boomburst', 'dragonrage'])
        check('HP penalty on no damage: ' + id, () => { const b = make({ moves: [id] }, { moves: ['protect'] }); const p = b.p1.active[0], hp = p.hp; b.makeChoices('move 1', 'move 1'); assert(p.hp < hp, b.log.join('\n')); b.destroy(); });
    check('all boosts reach +12 and -12', () => { const b = make(), p = b.p1.active[0]; for (const stat of ['atk', 'def', 'spa', 'spd', 'spe', 'accuracy', 'evasion']) {
        b.boost({ [stat]: 20 }, p);
        assert.equal(p.boosts[stat], 12, stat);
        b.boost({ [stat]: -30 }, p);
        assert.equal(p.boosts[stat], -12, stat);
    } b.destroy(); });
    check('voluntary switch keeps at most +2, loses one stage', () => { const b = make(), p = b.p1.active[0]; b.boost({ atk: 6, spa: 2 }, p); b.makeChoices('switch 2', 'move 1'); assert.equal(p.boosts.atk, 2); assert.equal(p.boosts.spa, 1); b.makeChoices('switch 2', 'move 1'); assert.equal(b.p1.active[0], p); assert.equal(p.boosts.atk, 2); b.destroy(); });
    check('forced switch clears offensive stages', () => { const b = make({}, { moves: ['roar'] }), p = b.p1.active[0]; b.boost({ atk: 6, spa: 2 }, p); b.makeChoices('move 1', 'move 1'); assert.equal(p.boosts.atk, 0); assert.equal(p.boosts.spa, 0); b.destroy(); });
    check('Drought expires after 5 turns', () => { const b = make({ species: 'Torkoal', ability: 'Drought' }); assert.equal(b.field.weatherState.duration, 5); for (let i = 0; i < 5; i++)
        b.makeChoices('move 1', 'move 1'); assert.notEqual(b.field.weather, 'sunnyday'); b.destroy(); });
    check('Power Construct heals and transforms', () => { const b = make({ species: 'Zygarde', ability: 'Power Construct' }), p = b.p1.active[0]; p.hp = Math.floor(p.maxhp / 3); b.makeChoices('move 1', 'move 1'); assert.equal(p.species.id, 'zygardecomplete'); assert(p.hp > p.maxhp / 3); b.destroy(); });
    check('universal learnsets and conditional grants', () => { for (const id of ['charizard', 'pikachu', 'unown', 'ditto'])
        for (const move of ['hiddenpower', 'quickattack', 'refresh', 'return', 'toxic'])
            assert(dex.species.getLearnsetData(id).learnset[move], id + move); assert(dex.species.getLearnsetData('charizard').learnset.dragonrage); assert(dex.species.getLearnsetData('charizard').learnset.seismictoss); assert(dex.species.getLearnsetData('ursalunabloodmoon').learnset.bloodmoon); });
    check('Hidden Power Fairy validates independently of IVs', () => { const team = [{ species: 'Pikachu', ability: 'Static', level: 50, moves: ['hiddenpower'], hpType: 'Fairy', ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 } }]; const problems = new TeamValidator('superchampionssingles6v6').validateTeam(team); assert(!problems, JSON.stringify(problems)); });
    check('Mega optional Levitate follows base ability', () => { for (const [species, ability, item] of [['Charizard', 'Solar Power', 'Charizardite X'], ['Beedrill', 'Sniper', 'Beedrillite']]) {
        const b = make({ species, ability, item });
        b.makeChoices('move 1 mega', 'move 1');
        assert.equal(b.p1.active[0].ability, 'levitate', b.log.join('\n'));
        b.destroy();
    } });
    check('Mega first ability remains the normal Mega ability', () => { const b = make({ species: 'Charizard', ability: 'Blaze', item: 'Charizardite X' }); b.makeChoices('move 1 mega', 'move 1'); assert.equal(b.p1.active[0].ability, 'toughclaws'); b.destroy(); });
    check('Minimize gives four stages and cannot stack', () => { const b = make({ moves: ['minimize'] }); b.makeChoices('move 1', 'move 1'); assert.equal(b.p1.active[0].boosts.evasion, 4); b.makeChoices('move 1', 'move 1'); assert.equal(b.p1.active[0].boosts.evasion, 4); b.destroy(); });
    check('Unown Hidden Power is typeless, STAB and super effective', () => { const b = make({ species: 'Unown', moves: ['hiddenpower'], hpType: 'Fairy' }, { species: 'Blissey' }); b.makeChoices('move 1', 'move 1'); assert(b.log.some(x => x.includes('|-supereffective|')), b.log.join('\n')); assert(b.p2.active[0].hp < b.p2.active[0].maxhp); b.destroy(); });
    check('Physical Hidden Power chosen by offense and IV-independent type', () => { const b = make({ species: 'Machamp', moves: ['hiddenpower'], hpType: 'Fairy' }), p = b.p1.active[0]; const m = dex.getActiveMove('hiddenpower'); m.onModifyType.call(b, m, p); m.onModifyMove.call(b, m, p); assert.equal(m.type, 'Fairy'); assert.equal(m.category, 'Physical'); b.destroy(); });
    check('all OHKO moves use the 51% boundary', () => { const b = make(), p = b.p2.active[0]; for (const id of ['fissure', 'guillotine', 'horndrill']) {
        const m = dex.moves.get(id);
        p.hp = p.maxhp;
        assert.equal(m.onTryHit.call(b, p), false, id);
        p.hp = Math.floor(p.maxhp / 2);
        assert.notEqual(m.onTryHit.call(b, p), false, id);
    } const m = dex.getActiveMove('sheercold'); p.hp = p.maxhp; m.onModifyMove.call(b, m, b.p1.active[0], p); assert.equal(m.status, 'frz'); assert(!m.ohko); b.destroy(); });
    check('Standardite BST thresholds and Supreme Overlord multipliers', () => { const context = { chainModify: n => n }; const fn = dex.items.get('standardite').onSourceModifyDamage; assert.equal(fn.call(context, 100, { species: { bst: 560 } }, { species: { bst: 558 } }), 0.5); assert.equal(fn.call(context, 100, { species: { bst: 560 } }, { species: { bst: 559 } }), undefined); for (let n = 1; n <= 5; n++)
        assert.equal(dex.abilities.get('supremeoverlord').onBasePower.call({ ...context, effectState: { fallen: n } }), 1 + 0.05 * n); });
    check('Serene Grace adds 10 points and caps at 100', () => { const move = { secondaries: [{ chance: 20 }, { chance: 95 }] }; dex.abilities.get('serenegrace').onModifyMove.call({}, move); assert.equal(move.secondaries[0].chance, 30); assert.equal(move.secondaries[1].chance, 100); });
    check('Drought keeps counting while suppressed by Air Lock', () => { const b = make({ species: 'Torkoal', ability: 'Drought' }, { species: 'Rayquaza', ability: 'Air Lock' }); for (let i = 0; i < 5; i++)
        b.makeChoices('move 1', 'move 1'); assert.notEqual(b.field.weather, 'sunnyday'); b.destroy(); });
    check('Power Construct counts the complete form for team BST', () => { const validator = new TeamValidator('superchampionssingles6v6'); const team = [{ species: 'Zygarde', ability: 'Power Construct', moves: ['tackle'], level: 50 }, ...Array.from({ length: 5 }, () => ({ species: 'Mew', ability: 'Synchronize', moves: ['tackle'], level: 50 }))]; const problems = validator.validateTeam(team); assert(problems.some(x => x.includes('3708')), JSON.stringify(problems)); });

    check('Body Slam weight thresholds control power and paralysis', () => {
        const move = dex.moves.get('bodyslam');
        for (const [ratio, power] of [[1, 40], [2, 60], [3, 80], [4, 100], [5, 120]]) {
            const source = {getWeight: () => ratio * 100};
            const target = {getWeight: () => 100};
            assert.equal(move.basePowerCallback(source, target), power);
            const activeMove = {};
            move.onModifyMove(activeMove, source, target);
            assert.equal(!!activeMove.secondaries, power >= 80);
        }
    });
    check('Stealth Rock applies the five requested percentages', () => {
        const move = dex.moves.get('stealthrock');
        for (const [mod, damage] of [[-2, 50], [-1, 70], [0, 100], [1, 120], [2, 150]]) {
            let dealt;
            move.condition.onSwitchIn.call({clampIntRange: n => n, dex, damage: n => {dealt = n;}}, {
                maxhp: 1000, hasItem: () => false, runEffectiveness: () => mod,
            });
            assert.equal(dealt, damage);
        }
    });
    check('Life Orb uses a 20% boost and 10% recoil', () => {
        const item = dex.items.get('lifeorb');
        assert.equal(item.onModifyDamage.call({chainModify: n => n}), 1.2);
        let recoil;
        const source = {baseMaxhp: 1000};
        item.onAfterMove.call({damage: n => {recoil = n;}, dex}, source, {}, {category: 'Physical'});
        assert.equal(recoil, 100);
    });
});
