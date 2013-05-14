var TOOLS = TOOLS || {};

TOOLS.base64 = (function($) {
	'use strict';

	$(function() {

		$('#frmBase64').on('submit', function(ev) {
			ev.preventDefault();
			var content = $('#base64-content').val(),
				action = ($('#op-action-encode').attr('checked'))?$('#op-action-encode').val():$('#op-action-decode').val(),
				$textProcessed = $('code.text-processed'),
				$results = $('div.results');

			$.ajax({
				url: '/api/base64',
				cache: false,
				global: false,
				type: 'POST',
				data: {content: content, action: action},
				dataType: 'html',
				ajaxSend: $('#frmBase64').append('<img src="/static/img/ajax-loader.gif" alt="loading..." class="loader" />')
			})
			.done(function(data) {
				$textProcessed.html(data);
				$results.show();
				$('#frmBase64 > .loader').hide();
			})
			.fail(function() {
				// TODO: Implement decent error handling
			});
		});

	});

}(jQuery));
