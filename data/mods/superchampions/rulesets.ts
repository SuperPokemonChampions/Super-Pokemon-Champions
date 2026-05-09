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
	}
};