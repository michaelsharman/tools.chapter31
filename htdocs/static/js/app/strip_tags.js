var TOOLS = TOOLS || {};

TOOLS.entitize = (function($) {
	'use strict';

	function stripTags(content) {
		var output = 'd';
		$.ajax({
			url: '/api/striptags',
			cache: false,
			type: 'POST',
			data: {content: content},
			dataType: 'html'
		})
		.done(function(data) {
			output = data;
		});
		return output;
	}

	$(function() {

		$('#frmStripTags').on('submit', function(ev) {
			ev.preventDefault();
			var content = stripTags($('#content').val());
			$('#content').val(content);
		});

	});

	return {
		stripTags: stripTags
	};

}(jQuery));
