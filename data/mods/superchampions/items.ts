export const Items: import('../../../sim/dex-items').ModdedItemDataTable = {
	focusband: {
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
		inherit: true,
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (move.totalDamage && !pokemon.forceSwitchFlag) {
				this.heal(move.totalDamage / 6, pokemon);
			};
		},
	},
};