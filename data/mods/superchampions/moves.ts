export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
	hail: {
		inherit: true,
		isNonstandard: null,
	},
	acidarmor: {
		inherit: true,
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
		basePower: 60,
		pp: 10,
		secondary: {
			chance: 100,
			onHit(target, source, move) {
				if (target?.boosts) {
					target.addVolatile('confusion', source, move);
				}
			},
		},
	},
	amnesia: {
		inherit: true,
		boosts: {
			spd: 3,
		},
	},
	ancientpower: {
		inherit: true,
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
};