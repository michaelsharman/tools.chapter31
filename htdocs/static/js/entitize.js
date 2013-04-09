var TOOLS = TOOLS || {};

TOOLS.entitize = (function($) {
	'use strict';

	$(function() {

		$('#frmEntitize').on('submit', function(ev) {
			ev.preventDefault();
			var content = $('#entitize-content').val(),
				quotestyle = $('#op-quotestyle').val(),
				replacetype = ($('#op-replacetype-all').attr('checked'))?$('#op-replacetype-all').val():$('#op-replacetype-special').val();
			$.ajax({
				url: '/api/entitize',
				cache: false,
				global: false,
				type: 'POST',
				data: {content: content, quotestyle: quotestyle, replacetype: replacetype},
				dataType: 'html',
				ajaxSend: $('#frmEntitize').append('<img src="/static/img/ajax-loader.gif" alt="loading..." class="loader" />')
			})
			.done(function(data) {
				$('#entitize-content').val(data);
				TOOLS.main.ajaxDone();
			})
			.fail(function(jqXHR, textStatus, errorThrown) {
				// TODO: Implement decent error handling
			});
		});

	});

}(jQuery));
