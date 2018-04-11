'use strict';

exports.BattleAbilities = {
"fluid": {
		shortDesc: "This Pokemon's Normal-type moves become Water type and Water-type moves cannot miss and ignore all protection",
		onModifyMovePriority: -1,
		onModifyMove: function (move, pokemon) {
			if (move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Water';
				move.refrigerateBoosted = true;
			}
			if (move.type === 'Water') {
				move.breaksProtect = true;
			}
		},
    onAnyAccuracy: function (accuracy, target, source, move) {
			if (move.type === 'Water' && (source === this.effectData.target || target === this.effectData.target)) {
				return true;
			}
			return accuracy;
		},
		id: "fluid",
		name: "Fluid",
	},
};
