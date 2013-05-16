var TOOLS = TOOLS || {};

TOOLS.main = (function($) {
	'use strict';

	function toggleOptions() {
		$('#page-options').toggle();
		$('#chev').toggleClass('icon-chevron-down').toggleClass('icon-chevron-up');
	}

	$(function() {

		$('#btn-options').on('click', function(ev) {
			ev.preventDefault();
			toggleOptions();
		});

	});

	// Global ajax settings, needs to sit off $(document)
	$(document).ajaxStart(function() {
		$('form').append('<img src="/static/img/ajax-loader.gif" alt="loading..." class="loader" />');
	});

	$(document).ajaxComplete(function() {
		$('img.loader').hide();
	});

}(jQuery));
