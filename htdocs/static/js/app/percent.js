var TOOLS = TOOLS || {};

TOOLS.percent = (function($, mathHelper) {
	'use strict';

	function calculate1(n1, n2) {
		if (validate(n1, n2)) {
			return mathHelper.format((n1 / 100) * n2);
		}
		return 0;
	}

	function calculate2(n1, n2) {
		if (validate(n1, n2)) {
			return mathHelper.format((n1 / n2) * 100);
		}
		return 0;
	}

	function calculate3(n1, n2) {
		if (validate(n1, n2)) {
			return mathHelper.format((n1 / (n2 / 100)));
		}
		return 0;
	}

	function setResult(type, val1, val2) {
		var output,
			num1 = val1,
			num2 = val2;
		switch (type) {
			case 'result1':
				output = calculate1(num1, num2);
				break;
			case 'result2':
				output = calculate2(num1, num2);
				break;
			case 'result3':
				output = calculate3(num1, num2);
				break;
			default:
				throw('Invalid calculation type passed');
		}
		$('#'+type).html(output);
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

		/*$('#num1,#num2').on('change', function() {
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
		});*/

		$('#num1,#num2').on('change', function() {
			setResult('result1', $('#num1').val(), $('#num2').val());
		});

		$('#num3,#num4').on('change', function() {
			setResult('result2', $('#num3').val(), $('#num4').val());
		});

		$('#num5,#num6').on('change', function() {
			setResult('result3', $('#num5').val(), $('#num6').val());
		});

	});

	return {
		calculate1: calculate1,
		calculate2: calculate2,
		calculate3: calculate3,
		setResult: setResult
	};

}(jQuery, HELPERS.math));
