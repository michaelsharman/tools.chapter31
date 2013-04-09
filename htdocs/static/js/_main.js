var TOOLS = TOOLS || {};

TOOLS.main = (function($) {
	'use strict';

	function ajaxDone() {
		$('img.loader').hide();
	}

	$(function() {

		$('#btn-options').on('click', function(ev) {
			ev.preventDefault();
			$('#page-options').toggle();
			$('#chev').toggleClass('icon-chevron-down').toggleClass('icon-chevron-up');
		});

	});

	return {
		ajaxDone: ajaxDone
	};

}(jQuery));
