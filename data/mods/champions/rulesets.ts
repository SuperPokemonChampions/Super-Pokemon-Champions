export const Rulesets: import('../../../sim/dex-formats').ModdedFormatDataTable = {
	standardag: {
		inherit: true,
		ruleset: [
			'Obtainable', 'Team Preview', 'Cancel Mod', 'Endless Battle Clause',
			'Adjust Level = 50', 'Species Clause', 'Min Team Size = 6',
		],
	},
	standard: {
		inherit: true,
		ruleset: [
			'Standard AG',
			'Sleep Moves Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Clause',
		],
	},
	standarddraft: {
		inherit: true,
		ruleset: [
			'Standard AG',
			'Nickname Clause', 'Sleep Clause Mod', 'OHKO Clause', 'Evasion Clause',
		],
		onBegin() {
			this.reportPercentages = true;
		},
		// timer: {starting: 60 * 60, grace: 0, addPerTurn: 10, maxPerTurn: 100, timeoutAutoChoose: true},
	},
	flatrules: {
		inherit: true,
		desc: "The in-game Flat Rules: Adjust Level 50, Species Clause, Item Clause = 1, -Mythical, -Restricted Legendary, Bring 6 Pick 3-6 depending on game type.",
		ruleset: ['Obtainable', 'Team Preview', 'Species Clause', 'Nickname Clause', 'Item Clause = 1', 'Adjust Level = 50', 'Picked Team Size = Auto', 'Min Team Size = 6', 'Cancel Mod'],
		banlist: ['Mythical', 'Restricted Legendary'],
	},
	teampreview: {
		inherit: true,
		onTeamPreview() {
			this.add('clearpoke');
			for (const pokemon of this.getAllPokemon()) {
				const details = pokemon.details.replace(/(Xerneas|Zacian|Zamazenta)(-[a-zA-Z?-]+)?/g, '$1-*');
				this.add('poke', pokemon.side.id, details, '');
			}
			if (this.ruleTable.has(`teratypepreview`)) {
				for (const side of this.sides) {
					let buf = ``;
					for (const pokemon of side.pokemon) {
						buf += buf ? ` / ` : `raw|${side.name}'s Tera Types:<br />`;
						buf += `<psicon pokemon="${pokemon.species.id}" /><psicon type="${pokemon.teraType}" />`;
					}
					this.add(`${buf}`);
				}
			}
			this.makeRequest('teampreview');
		},
	},
	openitemsheets: {
		effectType: 'Rule',
		name: 'Open Item Sheets',
		desc: "Allows players to optionally display held items.",
		// finish this later ig
	},
	superchampions: {
		effectType: 'Rule',
		name: 'Super Champions',
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
	},
};
