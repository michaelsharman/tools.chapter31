var TOOLS = TOOLS || {};

TOOLS.striptags = (function($) {
	'use strict';

	function stripTags(content, callback) {
		$.ajax({
			url: '/api/striptags',
			cache: false,
			type: 'POST',
			data: {content: content},
			dataType: 'html'
		})
		.done(function(data) {
			callback(data);
		});
	}

	function output(content) {
		$('#content').val(content);
	}

	$(function() {

		$('#frmStripTags').on('submit', function(ev) {
			ev.preventDefault();
			stripTags($('#content').val(), output);
		});

	});

	return {
		output: output,
		stripTags: stripTags
	};

}(jQuery));
