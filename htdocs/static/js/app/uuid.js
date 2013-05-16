var TOOLS = TOOLS || {};

TOOLS.uuid = (function($) {
	'use strict';

	function createUUID(callback) {
		var version = $('#frmUUID').find('input[name=version]:checked').val(),
			textUpper = ($('#textUpper').is(':checked')) ? 1 : 0,
			format = ($('#format').prop('checked')) ? $('#format').val() : '';

		// Clear previous generated values
		$('div.text-processed').empty();

		$.ajax({
			url: '/api/uuid',
			cache: false,
			type: 'GET',
			data: {version: version, textUpper: textUpper, format: format},
			dataType: 'html'
		})
		.done(function(data) {
			callback(data);
		});
	}

	function output(content) {
		$('div.text-processed').html(content);
		$('div.results').show();
	}

	$(function() {

		$('#frmUUID').on('submit', function(ev) {
			ev.preventDefault();
			createUUID(output);
		});

	});

	return {
		createUUID: createUUID,
		output: output
	};

}(jQuery));
