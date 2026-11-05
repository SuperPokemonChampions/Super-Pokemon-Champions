// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

// @ts-expect-error
export const Formats: FormatList = [
	{
		section: "Super Pokémon Champions",
		column: 1,
	},
	/* {
		name: "[Super Champions] Random Battle",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		mod: 'champions',
		team: 'random',
		bestOfDefault: true,
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod', 'Super Champions'],
	}, */
	{
		name: "[Super Champions] Singles 6v6",
		mod: 'champions',
		bestOfDefault: true,
		ruleset: [
			'Team Preview', 'Default Level = 50', 'Min Team Size = 1', 'Max Team Size = 6',
			'Timer Starting = 300', 'Timer Grace = 90', 'Timer Add Per Turn = 20', 'Timer Max Per Turn = 240',
			'Timer Max First Turn = 90', 'Timeout Auto Choose', 'DC Timer Bank', 'Open Team Sheets',
			'Super Champions', 'Champions Singles 6v6 Rules', 'Cancel Mod',
		],
	},
	{
		name: "[Super Champions] Singles 3v3",
		mod: 'champions',
		bestOfDefault: true,
		ruleset: ['Flat Rules', 'VGC Timer', 'Open Team Sheets', 'Super Champions', '!Item Clause'],
	},
	{
		name: "[Super Champions] Singles 4v4",
		mod: 'champions',
		bestOfDefault: true,
		ruleset: ['Flat Rules', 'VGC Timer', '!!Picked Team Size = 4', 'Open Team Sheets', 'Super Champions', '!Item Clause'],
	},
	{
		name: "[Super Champions] VGC 6v6",
		mod: 'superchampions',
		gameType: 'doubles',
		ruleset: ['Flat Rules', 'VGC Timer', 'Force Open Team Sheets', '!!Picked Team Size = 6', 'Super Champions'],
	},
	{
		name: "[Super Champions] Custom Game",
		mod: 'champions',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 50', 'Open Team Sheets', 'Super Champions'],
	},
	{
		name: "[Super Champions] Doubles Custom Game",
		mod: 'champions',
		gameType: 'doubles',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 50', 'Open Team Sheets', 'Super Champions'],
	},
];
