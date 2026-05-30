export const Items: import('../../../sim/dex-items').ModdedItemDataTable = {
	focusband: {
		shortDesc: "15% chanch to survive KO hit.",
		inherit: true,
		onDamage(damage, target, source, effect) {
			if (this.randomChance(15, 100) && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add("-activate", target, "item: Focus Band");
				return target.hp - 1;
			};
		},
	},
	lightball: {
		inherit: true,
		itemUser: ["Pikachu", "Pikachu-Cosplay", "Pikachu-Rock-Star", "Pikachu-Belle", "Pikachu-Pop-Star", "Pikachu-PhD", "Pikachu-Libre", "Pikachu-Original", "Pikachu-Hoenn", "Pikachu-Sinnoh", "Pikachu-Unova", "Pikachu-Kalos", "Pikachu-Alola", "Pikachu-Partner", /* "Pikachu-Starter", */ "Pikachu-World"],
	},
	shellbell: {
		shortDesc: "Heal 1/6th damage dealt.",
		inherit: true,
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (move.totalDamage && !pokemon.forceSwitchFlag) {
				this.heal(move.totalDamage / 6, pokemon);
			};
		},
	},
	lifeorb: {
		name: "Life Orb",
		spritenum: 249,
		fling: {
			basePower: 30,
		},
		onModifyDamage(damage, source, target, move) {
			return this.chainModify([5324, 4096]);
		},
		onAfterMove(source, target, move) {
			if (source && source !== target && move && move.category !== 'Status' && !source.forceSwitchFlag) {
				this.damage(source.baseMaxhp / 10, source, source, this.dex.items.get('lifeorb'));
			}
		},
		onAfterMoveSecondarySelf(source, target, move) {
			null;
		},
		num: 270,
		gen: 4,
	},
};