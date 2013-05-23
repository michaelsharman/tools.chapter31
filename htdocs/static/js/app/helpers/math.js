var HELPERS = HELPERS || {};

HELPERS.math = (function() {
	'use strict';

	/**
	* Formats a value that should be an integer or float
	*/
	function format(val) {
		if (isFloat(val) && numDecimalPlaces(val) > 1) {
			// Double check that the first 2 decimal places aren't '00'. If they are, just round()
			if  (val.toString().split('.')[1].substr(0, 2) !== '00') {
				return parseFloat(val.toFixed(2));
			}
			return Math.round(val);
		}
		return val;
	}

	function isFloat(val) {
		return val % 1 !== 0;
	}

	function numDecimalPlaces(val) {
		return val.toString().split('.')[1].length;
	}

	return {
		format: format,
		isFloat: isFloat,
		numDecimalPlaces: numDecimalPlaces
	};

}());
