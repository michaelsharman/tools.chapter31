var TOOLS = TOOLS || {};

TOOLS.percent = (function($) {
	'use string';

	var percent = {

		calculate1: function(n1, n2) {
			if (this.validate(n1, n2)) {
				return this.format((n1 / 100) * n2);
			}
			return 0;
		},

		calculate2: function(n1, n2) {
			if (this.validate(n1, n2)) {
				return this.format((n1 / n2) * 100);
			}
			return 0;
		},

		calculate3: function(n1, n2) {
			if (this.validate(n1, n2)) {
				return this.format((n1 / (n2 / 100)));
			}
			return 0;
		},

		/**
		* Formats a value that should be an integer or float
		*/
		format: function(val) {
			if (this.isFloat(val)) {
				if (this.numDecimalPlaces(val) > 1) {
					// Double check that the first 2 decimal places aren't '00'. If they are, just round()
					if  (val.toString().split('.')[1].substr(0, 2) !== '00') {
						return val.toFixed(2);
					}
					return Math.round(val);
				}
			}
			return val;
		},

		isFloat: function(val) {
			return val % 1 !== 0;
		},

		numDecimalPlaces: function(val) {
			return val.toString().split('.')[1].length;
		},

		/**
		* Validates that there are 2 arguments, both numeric and > 0
		*/
		validate: function(n1, n2) {
			try {
				if ((!isNaN(n1) && n1 > 0) && (!isNaN(n2) && n2 > 0)) {
					return true;
				}
				return false;
			} catch (e) {
				return false;
			}
		}

	};

	$(function() {

		$('#num1,#num2').on('change', function(evt) {
			$('#result1').html(
				percent.calculate1($('#num1').val(), $('#num2').val())
			);
		});

		$('#num3,#num4').on('change', function(evt) {
			$('#result2').html(
				percent.calculate2($('#num3').val(), $('#num4').val()) + '%'
			);
		});

		$('#num5,#num6').on('change', function(evt) {
			$('#result3').html(
				percent.calculate3($('#num5').val(), $('#num6').val())
			);
		});

	});

	return percent;

}(jQuery));
