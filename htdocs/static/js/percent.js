var TOOLS = TOOLS || {};

TOOLS.percent = (function($) {
	'use strict';

	function calculate1(n1, n2) {
		if (validate(n1, n2)) {
			return format((n1 / 100) * n2);
		}
		return 0;
	}

	function calculate2(n1, n2) {
		if (validate(n1, n2)) {
			return format((n1 / n2) * 100);
		}
		return 0;
	}

	function calculate3(n1, n2) {
		if (validate(n1, n2)) {
			return format((n1 / (n2 / 100)));
		}
		return 0;
	}

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

	/**
	* Validates that there are 2 arguments, both numeric and > 0
	*/
	function validate(n1, n2) {
		if ((!isNaN(n1) && n1 > 0) && (!isNaN(n2) && n2 > 0)) {
			return true;
		}
		return false;
	}


	$(function() {

		$('#num1,#num2').on('change', function() {
			$('#result1').html(
				calculate1($('#num1').val(), $('#num2').val())
			);
		});

		$('#num3,#num4').on('change', function() {
			$('#result2').html(
				calculate2($('#num3').val(), $('#num4').val()) + '%'
			);
		});

		$('#num5,#num6').on('change', function() {
			$('#result3').html(
				calculate3($('#num5').val(), $('#num6').val())
			);
		});

	});

	return {
		calculate1: calculate1,
		calculate2: calculate2,
		calculate3: calculate3
	};

}(jQuery));
