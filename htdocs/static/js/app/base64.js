var TOOLS = TOOLS || {};

TOOLS.base64 = (function($) {
	'use strict';

	function process() {
		var content = $('#base64-content').val(),
			action = ($('#op-action-encode').attr('checked'))?$('#op-action-encode').val():$('#op-action-decode').val(),
			$textProcessed = $('code.text-processed'),
			$results = $('div.results');

		$.ajax({
			url: '/api/base64',
			cache: false,
			type: 'POST',
			data: {content: content, action: action},
			dataType: 'html'
		})
		.done(function(data) {
			$textProcessed.html(data);
			$results.show();
		});
	}

	$(function() {

		$('#frmBase64').on('submit', function(ev) {
			ev.preventDefault();
			process();
		});

	});

	return {
		process: process
	};

}(jQuery));
