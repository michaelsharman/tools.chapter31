var TOOLS = TOOLS || {};

TOOLS.uuid = (function($) {
	'use strict';

	function process() {
		var version = $('#frmUUID').find('input[name=version]:checked').val(),
			textUpper = ($('#textUpper').is(':checked')) ? 1 : 0,
			format = ($('#format').attr('checked') === undefined) ? '' : $('#format').val(),
			$textProcessed = $('div.text-processed');

		// Clear previous generated values
		$textProcessed.empty();

		$.ajax({
			url: '/api/uuid',
			cache: false,
			type: 'GET',
			data: {version: version, textUpper: textUpper, format: format},
			dataType: 'html'
		})
		.done(function(data) {
			$textProcessed.html(data);
		});

		$('div.results').show();
	}

	$(function() {

		$('#frmUUID').on('submit', function(ev) {
			ev.preventDefault();
		});

	});

	return {
		process: process
	};

}(jQuery));
