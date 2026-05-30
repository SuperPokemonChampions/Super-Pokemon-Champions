export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	inherit: 'champions',
	actions: {
		canTerastallize(pokemon) {
			return null;
		},
	},
	init() {
		// Alakazam
		this.modData("Learnsets", "alakazam").learnset.teleport = ["9L1"];
		// Charizard
		this.modData("Learnsets", "charizard").learnset.seismictoss = ["9L1"];
		// Beedrill
		this.modData("Learnsets", "beedrill").learnset.fly = ["9L1"];
		// Kangaskhan
		this.modData("Learnsets", "kangaskhan").learnset.dizzypunch = ["9L1"];
		// Victreebel
		this.modData("Learnsets", "victreebel").learnset.leaftornado = ["9L1"];
		// Gliscor
		this.modData("Learnsets", "gliscor").learnset.guillotine = ["9L1"];
		// Lopunny
		this.modData("Learnsets", "lopunny").learnset.dizzypunch = ["9L1"];
		// Serperior
		this.modData("Learnsets", "serperior").learnset.leaftornado = ["9L1"];
		this.modData("Learnsets", "serperior").learnset.aquatail = ["9L1"];
	}
};