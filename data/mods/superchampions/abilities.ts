var trappedTurns = 0;
export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
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
};
