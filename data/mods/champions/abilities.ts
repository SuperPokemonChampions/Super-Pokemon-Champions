export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	drought: {
		inherit: true,
		onStart(source) {
			if (source.species.id === 'groudon' && source.item === 'redorb') return;
			if (this.field.setWeather('sunnyday', source, this.effect)) this.field.weatherState.duration = source.hasItem('heatrock') ? 8 : 5;
		},
		desc: 'Summons sun for 5 turns, or 8 with Heat Rock.', shortDesc: 'Sun for 5 turns (8 with Heat Rock).',
	},
	powerconstruct: {
		inherit: true,
		onResidual(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Zygarde' || pokemon.transformed || !pokemon.hp) return;
			if (pokemon.species.id === 'zygardecomplete' || pokemon.hp > pokemon.maxhp / 2) return;
			this.add('-activate', pokemon, 'ability: Power Construct');
			pokemon.formeChange('Zygarde-Complete', this.effect, true);
			pokemon.formeRegression = true;
			this.heal(pokemon.maxhp * 0.18, pokemon, pokemon, this.effect);
		},
		desc: 'Below half HP, becomes Zygarde-Complete and heals 18% max HP. Counts Complete BST for team limits.',
		shortDesc: 'Transforms below half HP and heals 18% max HP.',
	},
	serenegrace: {
		inherit: true,
		onModifyMove(move) {
			for (const secondary of move.secondaries || []) if (secondary.chance) secondary.chance = Math.min(100, secondary.chance + 10);
			if (move.self?.chance) move.self.chance = Math.min(100, move.self.chance + 10);
		},
		desc: 'Adds 10 percentage points to secondary effect chances.', shortDesc: 'Adds 10% to secondary effect chances.',
	},
	supremeoverlord: {
		inherit: true,
		onBasePower() { return this.chainModify(1 + 0.05 * (this.effectState.fallen || 0)); },
		desc: 'Attacks gain 5% power per fainted teammate, up to 25%.', shortDesc: '5% power per fainted ally; maximum 25%.',
	},
	zerotohero: {
		inherit: true,
		onSwitchIn(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Palafin') return;
			if (!pokemon.heroMessageDisplayed && pokemon.species.forme === 'Hero') {
				this.add('-activate', pokemon, 'ability: Zero to Hero');
				const healed = pokemon.heal(pokemon.maxhp);
				if (healed) this.add('-heal', pokemon, pokemon.getHealth, '[from] ability: Zero to Hero');
				pokemon.heroMessageDisplayed = true;
			}
		},
	},
	sheerforce: {
		inherit: true,
		desc: "Removes move secondary effects to increase power, but does not prevent Life Orb recoil or Shell Bell recovery.",
		shortDesc: "Boosts moves with secondary effects; Life Orb recoil and Shell Bell recovery still apply.",
	},
	sharpness: {
		inherit: true,
		isNonstandard: null,
		desc: "Increases the power of slicing moves by 25%.",
		shortDesc: "Increases slicing move power by 25%.",
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['slicing']) return this.chainModify(1.25);
		},
	},
	angershell: {
		inherit: true,
		onDamage(damage, target, source, effect) {
			this.effectState.checkedAngerShell = !(effect.effectType === "Move" && !effect.multihit);
		},
	},
	berserk: {
		inherit: true,
		onDamage(damage, target, source, effect) {
			this.effectState.checkedBerserk = !(effect.effectType === "Move" && !effect.multihit);
		},
	},
	disguise: {
		inherit: true,
		onEffectiveness(typeMod, target, type, move) {
			if (!target || move.category === 'Status') return;

			if (move.hit === 1) delete this.effectState.neutral;
			if (this.effectState.neutral) return 0;

			if (!['mimikyu', 'mimikyutotem'].includes(target.species.id)) {
				return;
			}

			const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
			if (hitSub) return;

			if (!target.runImmunity(move)) return;
			this.effectState.neutral = true;
			return 0;
		},
	},
	dragonize: {
		inherit: true,
		isNonstandard: null,
	},
	healer: {
		inherit: true,
		onResidual(pokemon) {
			for (const allyActive of pokemon.adjacentAllies()) {
				if (allyActive.status && this.randomChance(1, 2)) {
					this.add('-activate', pokemon, 'ability: Healer');
					allyActive.cureStatus();
				}
			}
		},
	},
	megasol: {
		inherit: true,
		isNonstandard: null,
	},
	hadronengine: {
		inherit: true,
		desc: 'When this Pokémon enters battle, Electric Terrain begins for 2 turns, or 5 turns with Terrain Extender. While Electric Terrain is active, this Pokémon\'s Special Attack is multiplied by 1.15.',
		shortDesc: 'Sets Electric Terrain for 2 turns (5 with Terrain Extender); boosts Sp. Atk by 15% in Electric Terrain.',
		onStart(pokemon) {
			if (!this.field.setTerrain('electricterrain', pokemon, this.effect) && this.field.isTerrain('electricterrain')) {
				this.add('-activate', pokemon, 'ability: Hadron Engine');
			}
			if (this.field.isTerrain('electricterrain')) this.field.terrainState.duration = pokemon.hasItem('terrainextender') ? 5 : 2;
		},
		onModifySpAPriority: 5,
		onModifySpA(spa, pokemon) {
			if (this.field.isTerrain('electricterrain')) return this.chainModify(1.15);
		},
	},
	orichalcumpulse: {
		inherit: true,
		desc: 'When this Pokémon enters battle, the sunlight turns harsh for 2 turns, or 5 turns with Heat Rock. While the sun is active, this Pokémon\'s Attack is multiplied by 1.15.',
		shortDesc: 'Sets sun for 2 turns (5 with Heat Rock); boosts Attack by 15% in sun.',
		onStart(pokemon) {
			if (this.field.setWeather('sunnyday', pokemon, this.effect)) this.add('-activate', pokemon, 'Orichalcum Pulse', '[source]');
			else if (this.field.isWeather('sunnyday')) this.add('-activate', pokemon, 'ability: Orichalcum Pulse');
			if (this.field.isWeather('sunnyday')) this.field.weatherState.duration = pokemon.hasItem('heatrock') ? 5 : 2;
		},
		onModifyAtkPriority: 5,
		onModifyAtk(atk, pokemon) {
			if (this.field.isWeather(['sunnyday', 'desolateland'])) return this.chainModify(1.15);
		},
	},
	naturalcure: {
		inherit: true,
		onCheckShow: undefined, // no inherit
		onSwitchOut(pokemon) {
			if (!pokemon.status || pokemon.status === 'fnt') return;

			this.add('-curestatus', pokemon, pokemon.status, '[from] ability: Natural Cure', '[silent]');
			pokemon.clearStatus();
		},
	},
	piercingdrill: {
		inherit: true,
		isNonstandard: null,
	},
	regenerator: {
		inherit: true,
		onSwitchOut(pokemon) {
			if (pokemon.heal(pokemon.baseMaxhp / 6)) {
				this.add('-heal', pokemon, pokemon.getHealth, '[from] ability: Regenerator', '[silent]');
			}
		},
	},
	spicyspray: {
		inherit: true,
		isNonstandard: null,
	},
	unseenfist: {
		onModifyMove: undefined, // no inherit
		onHitProtect(source, target, move) {
			if (move.flags['contact'] && !target.volatiles['detect']) {
				target.getMoveHitData(move).bypassProtect = this.effect;
				return false;
			}
		},
		inherit: true,
		shortDesc: "This Pokemon's contact moves ignore a target's protection and deal 1/4 the usual damage.",
	},
};
