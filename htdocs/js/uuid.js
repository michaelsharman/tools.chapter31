var TOOLS = TOOLS || {};

TOOLS.uuid = (function($,TOOLS) {
	'use strict';

	$(function() {

		$('#frmUUID').on('submit', function(ev) {
			ev.preventDefault();
			var version = $('#frmUUID').find('input[name=version]:checked').val(),
				textUpper = ($('#textUpper').attr('checked') === undefined) ? 0 : 1,
				format = ($('#format').attr('checked') === undefined) ? '' : $('#format').val(),
				$textProcessed = $('div.text-processed');

			// Clear previous generated values
			$textProcessed.empty();

			$.ajax({
				url: '/api/uuid',
				cache: false,
				global: false,
				type: 'GET',
				data: {version: version, textUpper: textUpper, format: format},
				dataType: 'html',
				ajaxSend: $('#frmUUID').append('<img src="/img/ajax-loader.gif" alt="loading..." class="loader" />')
			})
			.done(function(data) {
				$textProcessed.html(data);
				$('#frmUUID > .loader').hide();
			})
			.fail(function(jqXHR, textStatus, errorThrown) {
				// TODO: Implement decent error handling
			});

			$('div.results').show();
		});

	});

}(jQuery,TOOLS));