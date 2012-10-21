var TOOLS = TOOLS || {};

TOOLS.percent = (function($) {
	'use string';

	function calculate1() {
		var num1 = $('#num1').val(),
			num2 = $('#num2').val(),
			result = '';
		if (num1 > 0 && num2 > 0) {
			result = Math.ceil((num1 / 100) * num2);
			$('#result1').html(result);
		}
	}

	function calculate2() {
		var num3 = $('#num3').val(),
			num4 = $('#num4').val(),
			result = '';
		if (num3 > 0 && num4 > 0) {
			result = Math.ceil((num3 / num4) * 100);
			$('#result2').html(result + '%');
		}
	}

	function calculate3() {
		var num5 = $('#num5').val(),
			num6 = $('#num6').val(),
			result = '';
		if (num5 > 0 && num6 > 0) {
			result = Math.ceil((num5 / (num6 / 100)));
			$('#result3').html(result);
		}
	}

	$(function() {

		$('#num1,#num2').on('change', function(evt) {
			calculate1();
		});

		$('#num3,#num4').on('change', function(evt) {
			calculate2();
		});

		$('#num5,#num6').on('change', function(evt) {
			calculate3();
		});

	});

}(jQuery));