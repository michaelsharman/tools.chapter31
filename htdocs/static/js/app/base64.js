var TOOLS = TOOLS || {};

TOOLS.base64 = (function($) {
	'use strict';

	/**
	* Encodes/decodes a string to/from base64
	*/
	function process(content, action, callback) {
		$.ajax({
			url: '/api/base64',
			cache: false,
			type: 'POST',
			data: {content: content, action: action},
			dataType: 'html'
		})
		.done(function(data) {
			callback(data);
		});
	}

	function output(content) {
		$('code.text-processed').html(content);
		$('div.results').show();
	}

	$(function() {

		$('#frmBase64').on('submit', function(ev) {
			ev.preventDefault();
			var content = $('#base64-content').val(),
				action = ($('#op-action-encode').prop('checked'))?$('#op-action-encode').val():$('#op-action-decode').val();
			process(content, action, output);
		});

	});

	return {
		output: output,
		process: process
	};

}(jQuery));
