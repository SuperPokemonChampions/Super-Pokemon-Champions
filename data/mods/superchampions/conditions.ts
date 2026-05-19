export const Conditions: import('../../../sim/dex-conditions').ModdedConditionDataTable = {
	brn: {
		inherit: true,
	},
	sunnyday: {
		inherit: true,
		onWeatherModifyDamage(damage, attacker, defender, move) {
			if (move.id === 'hydrosteam' && attacker.effectiveWeather() === 'sunnyday') {
				this.debug('Sunny Day Hydro Steam boost');
				return this.chainModify(1.5);
			}
			if (defender.effectiveWeather() !== 'sunnyday') return;
			if (move.type === 'Fire') {
				this.debug('Sunny Day fire boost');
				return this.chainModify(1.25);
			}
			if (move.type === 'Water') {
				this.debug('Sunny Day water suppress');
				return this.chainModify(0.5);
			}
		},
	},
	raindance: {
		inherit: true,
		onWeatherModifyDamage(damage, attacker, defender, move) {
			if (defender.effectiveWeather() !== 'sunnyday') return;
			if (move.type === 'Fire') {
				this.debug('Rain Dance fire suppress');
				return this.chainModify(0.5);
			}
			if (move.type === 'Water') {
				this.debug('Rain Dance water boost');
				return this.chainModify(1.25);
			}
		},
	},
};