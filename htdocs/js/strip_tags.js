var TOOLS = TOOLS || {};

TOOLS.entitize = (function($) {
	'use strict';

	$(function() {

		$('#frmStripTags').on('submit', function(ev) {
			ev.preventDefault();
			var content = $('#content').val();
			$.ajax({
				url: '/api/striptags',
				cache: false,
				global: false,
				type: 'POST',
				data: {content: content},
				dataType: 'html',
				ajaxSend: $('#frmStripTags').append('<img src="/img/ajax-loader.gif" alt="loading..." class="loader" />')
			})
			.done(function(data) {
				$('#content').val(data);
				$('#frmStripTags > .loader').hide();
			})
			.fail(function(jqXHR, textStatus, errorThrown) {
				// TODO: Implement decent error handling
			});
		});

	});

}(jQuery));