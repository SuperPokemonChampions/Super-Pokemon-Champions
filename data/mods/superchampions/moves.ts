export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
	hail: {
		inherit: true,
		// shortDesc: "",
		isNonstandard: null,
	},
	acidarmor: {
		inherit: true,
		shortDesc: "User: +2 Def, +1 Evasion if no evasion boosts.",
		priority: 0.5,
		boosts: {
			def: 2,
		},
		onAfterMoveSecondarySelf(source, target, move) {
			if (source.boosts.evasion < 1)
				this.boost({ evasion: 1 }, source, source);
		},
	},
	aerialace: {
		inherit: true,
		basePower: 80,
		pp: 10,
	},
	aircutter: {
		inherit: true,
		basePower: 65,
		accuracy: 100,
	},
	airslash: {
		inherit: true,
		accuracy: 90,
	},
	alluringvoice: {
		inherit: true,
		shortDesc: "Confuses the target if it has stat boosts.",
		basePower: 60,
		pp: 10,
		secondary: {
			chance: 100,
			onHit(target, source, move) {
				if (target.positiveBoosts() > 0) {
					target.addVolatile('confusion', source, move);
				}
			},
		},
	},
	amnesia: {
		inherit: true,
		shortDesc: "Boosts SpD by 3.",
		boosts: {
			spd: 3,
		},
	},
	ancientpower: {
		inherit: true,
		shortDesc: "10% chance to omniboost by 2 (excluding acc/eva).",
		secondary: {
			chance: 10,
			self: {
				boosts: {
					atk: 2,
					def: 2,
					spa: 2,
					spd: 2,
					spe: 2,
				},
			},
		},
	},
	armorcannon: {
		inherit: true,
		shortDesc: "User: -1 Def/SpD",
		self: {
			boosts: {
				def: -2,
				spd: -2,
			},
		},
	},
	aromaticmist: {
		inherit: true,
		boosts: {
			spd: 2,
		},
		priority: 0.1,
	},
	auroraveil: {
		inherit: true,
		priority: 0.1,
	},
	aquatail: {
		inherit: true,
		basePower: 95,
		accuracy: 95,
	},
	babydolleyes: {
		inherit: true,
		boosts: {
			atk: -2,
		},
	},
	baddybad: {
		inherit: true,
		isNonstandard: null,
		pp: 10,
	},
	batonpass: {
		inherit: true,
		priority: -1,
	},
	bind: {
		inherit: true,
		basePower: 25,
	},
	blastburn: {
		inherit: true,
		accuracy: 100,
	},
	boomburst: {
		inherit: true,
		shortDesc: "Hits adjacent Pokemon. Clears hazards + trapping.",
		onAfterHit(target, pokemon, move) {
			if (!move.hasSheerForce) {
				if (pokemon.removeVolatile('leechseed')) {
					this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', `[of] ${pokemon}`);
				}
				const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge'];
				for (const condition of sideConditions) {
					if (pokemon.side.removeSideCondition(condition)) {
						this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', `[of] ${pokemon}`);
					}
				}
				if (pokemon.volatiles['partiallytrapped']) {
					pokemon.removeVolatile('partiallytrapped');
				}
			}
		},
		onAfterSubDamage(damage, target, pokemon, move) {
			if (!move.hasSheerForce) {
				if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
					this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', `[of] ${pokemon}`);
				}
				const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge'];
				for (const condition of sideConditions) {
					if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
						this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', `[of] ${pokemon}`);
					}
				}
				if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
					pokemon.removeVolatile('partiallytrapped');
				}
			}
		},
		onHit(target) {
			if (target.status === 'slp') target.cureStatus();
		},
	},
	bounce: {
		inherit: true,
		priority: 0.1,
	},
	bouncybubble: {
		inherit: true,
		isNonstandard: null,
		pp: 20,
	},
	brutalswing: {
		inherit: true,
		shortDesc: "Hits adjacent Pokemon. Clears hazards + trapping.",
		onAfterHit(target, pokemon, move) {
			if (!move.hasSheerForce) {
				if (pokemon.removeVolatile('leechseed')) {
					this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', `[of] ${pokemon}`);
				}
				const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge'];
				for (const condition of sideConditions) {
					if (pokemon.side.removeSideCondition(condition)) {
						this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', `[of] ${pokemon}`);
					}
				}
				if (pokemon.volatiles['partiallytrapped']) {
					pokemon.removeVolatile('partiallytrapped');
				}
			}
		},
		onAfterSubDamage(damage, target, pokemon, move) {
			if (!move.hasSheerForce) {
				if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
					this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', `[of] ${pokemon}`);
				}
				const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge'];
				for (const condition of sideConditions) {
					if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
						this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', `[of] ${pokemon}`);
					}
				}
				if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
					pokemon.removeVolatile('partiallytrapped');
				}
			}
		},
	},
	bugbuzz: {
		inherit: true,
		shortDesc: "10% to lower SpD by 1. Wakes all active Pkmn.",
		onTryHit(target) {
			const activeTeam = target.side.activeTeam();
			const foeActiveTeam = target.side.foe.activeTeam();
			for (const [i, allyActive] of activeTeam.entries()) {
				if (allyActive && allyActive.status === 'slp') allyActive.cureStatus();
				const foeActive = foeActiveTeam[i];
				if (foeActive && foeActive.status === 'slp') foeActive.cureStatus();
			}
		},
	},
	bulldoze: {
		inherit: true,
		shortDesc: "100% chance lower adjacent Pkmn Speed by 1. Clears hazards + trapping.",
		onAfterHit(target, pokemon, move) {
			if (!move.hasSheerForce) {
				if (pokemon.removeVolatile('leechseed')) {
					this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', `[of] ${pokemon}`);
				}
				const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge'];
				for (const condition of sideConditions) {
					if (pokemon.side.removeSideCondition(condition)) {
						this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', `[of] ${pokemon}`);
					}
				}
				if (pokemon.volatiles['partiallytrapped']) {
					pokemon.removeVolatile('partiallytrapped');
				}
			}
		},
		onAfterSubDamage(damage, target, pokemon, move) {
			if (!move.hasSheerForce) {
				if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
					this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', `[of] ${pokemon}`);
				}
				const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge'];
				for (const condition of sideConditions) {
					if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
						this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', `[of] ${pokemon}`);
					}
				}
				if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
					pokemon.removeVolatile('partiallytrapped');
				}
			}
		},
	},
	burningjealousy: {
		inherit: true,
		shortDesc: "Burns the target.",
		secondary: {
			chance: 100,
			onHit(target, source, move) {
				if (target.positiveBoosts() > 0) {
					target.trySetStatus('brn', source, move);
				}
			},
		},
	},
	buzzybuzz: {
		inherit: true,
		isNonstandard: null,
		pp: 20,
	},
	charm: {
		inherit: true,
		shortDesc: "Lowers the target's Attack by 3.",
		boosts: {
			atk: -3,
		},
	},
	circlethrow: {
		inherit: true,
		basePower: 80,
	},
	closecombat: {
		inherit: true,
		shortDesc: "Lowers the user's Defense and Sp. Def by 2.",
		self: {
			boosts: {
				def: -2,
				spd: -2,
			},
		},
	},
	cosmicpower: {
		inherit: true,
		shortDesc: "Raises the user's Defense and Sp. Def by 2.",
		boosts: {
			def: 2,
			spd: 2,
		},
	}
};