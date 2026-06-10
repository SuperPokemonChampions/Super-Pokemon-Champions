var trappedTurns = 0;
export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	adaptability: {
		inherit: true,
		shortDesc: "STAB is 1.75x.",
		onModifySTAB(stab, source, target, move) {
			if (move.forceSTAB || source.hasType(move.type)) {
				if (stab === 2) {
					return 2.25;
				}
				return 1.75;
			}
		},
	},
	guts: {
		inherit: true,
		shortDesc: "Atk is 1.25x if non-volatile status.",
		onModifyAtk(atk, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.25);
			}
		},
	},
	hugepower: {
		inherit: true,
		shortDesc: "Atk doubled, disable if last move was Physical.",
		onModifyAtk(atk, pokemon, move) {
			let willBoost = 0;
			if (pokemon.lastMoveUsed?.category === 'Physical' && willBoost === 1) {
				willBoost =0;
			} else {
				willBoost === 1;
				return this.chainModify(2);
			};
		},
	},
	purepower: {
		inherit: true,
		shortDesc: "Atk doubled, disable if last move was Physical.",
		onModifyAtk(atk, pokemon, move) {
			let willBoost = 0;
			if (pokemon.lastMoveUsed?.category === 'Physical' && willBoost === 1) {
				willBoost =0;
			} else {
				willBoost === 1;
				return this.chainModify(2);
			};
		},
	},
	regenerator: {
		inherit: true,
		shortDesc: "Heal 1/6 max HP on switch.",
		onSwitchOut(pokemon) {
			pokemon.heal(pokemon.baseMaxhp / 6);
		},
	},
	multiscale: {
		inherit: true,
		onSourceModifyDamage(damage, source, target, move) {
			if (target.hp >= target.maxhp && target.runEffectiveness(move) <= 1) {
				this.debug('Multiscale weaken');
				return this.chainModify(0.5);
			}
		},
	},
	shadowtag: {
		inherit: true,
		onSwitchIn() { trappedTurns = 0 },
		onResidual(pokemon) {
			if (!pokemon.newlySwitched) {
				trappedTurns++;
			};
			if (trappedTurns > 2) {
				pokemon.addVolatile('gastroacid');
				this.add('-message', `${pokemon}'s shadow can't keep up!`);
			};
		},
		onFoeTrapPokemon(pokemon) {
			if (!pokemon.hasAbility('shadowtag') && pokemon.isAdjacent(this.effectState.target) && trappedTurns <= 2) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon(pokemon, source) {
			if (!source) source = this.effectState.target;
			if (!source || !pokemon.isAdjacent(source)) return;
			if (!pokemon.hasAbility('shadowtag')) {
				pokemon.maybeTrapped = true;
			}
		},
	},
	sheerforce: {
		inherit: true,
		// Life Orb modified in items.ts
	}
};
