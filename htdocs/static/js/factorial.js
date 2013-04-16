var TOOLS = TOOLS || {};

TOOLS.factorial = (function($,TOOLS) {
	'use strict';

	var f = [];

	/**
	* Calculates the factorial of a whole positive integer
	* param {Integer} n Whole number to calculate factorial
	*/
	function factorial(n) {
		if (n === 0 || n === 1) {
			return 1;
		}
		if (f[n] > 0) {
			return f[n];
		}
		else {
			f[n] = n * factorial(n-1);
			return f[n];
		}
	}

	/**
	* Formats an integer with spaces every 3 character blocks (starting a 1000)
	* param {Integer} n Number to format
	*/
	function formatNum(n) {
		var value, count, len, temp;
		if (isNaN(n)) {
			return n; // wtf?
		} else {
			value = n.toString();
			len = value.length;
			if (len < 4) {
				return n; // Don't worry about values < 1000
			} else {
				count = 0;
				temp = value;
				for (var i = len; i >= 0; i--) {
					if (count === 3) {
						temp = temp.substr(0, i) + ' ' + temp.substr(i, temp.length);
						count = 0;
					}
					count++;
				}
				return $.trim(temp);
			}
		}
	}

	$(function() {

		$('#number').on('keyup', function(ev) {
			ev.preventDefault();
			var num = $('#number').val(),
				$el = $('div.results div'),
				MAX = 20;
			if (!isNaN(num) && num > 0) {
				// Check for floats
				if (num.indexOf('.')) {
					num = Math.ceil(num);
					$('#number').val(num);
				}
				// Check for values that are too big
				if (num > MAX) {
					num = MAX;
					$('#number').val(MAX);
				}
				$el.html(formatNum(factorial(num)));
			} else {
				$el.html('0');
			}
			$('div.results').show();
		});

		$('#number').trigger('keyup');

	});

}(jQuery,TOOLS));
