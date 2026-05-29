export const Rulesets: import('../../../sim/dex-formats').ModdedFormatDataTable = {
	standardag: {
		inherit: true,
		ruleset: [
			'Obtainable', 'Team Preview', 'Cancel Mod', 'Endless Battle Clause',
			'Adjust Level = 50', 'Species Clause', 'Min Team Size = 6',
		],
	},
	openitemsheets: {
		effectType: 'Rule',
		name: 'Open Item Sheets',
		desc: "Allows players to optionally display held items.",
		// finish this later ig
	},
	superchampionsmod: {
		effectType: 'Rule',
		name: 'Super Champions Mod',
		desc: "Applies various modifications for Super Champions formats.",
		// Heal on switch
		onSwitchOut(pokemon) {
			if (!pokemon.hasAbility('Regenerator')) {
				this.heal(pokemon.maxhp / 12);
			};
		},
		// Remove crits if +0 ratio
		onAnyCriticalHit(pokemon, source, move) {
			// @ts-expect-error
			if (source.critRatio < 1) {
				return false;
			}
		},
		// No effects should affect OHKO moves
		onAccuracy(accuracy, target, source, move) {
			if (move.ohko) {
				return move.accuracy;
			};
		},
		// Ignore accuracy check if targeting an ally
		onAnyAccuracy(accuracy, target, source, move) {
			if (source.isAlly(target)) {
				move.ignoreAccuracy = true;
			};
		},
		onBattleStart() {
			var trappedTurns = 0;
		},
	},
};