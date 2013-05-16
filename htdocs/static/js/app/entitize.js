var TOOLS = TOOLS || {};

TOOLS.entitize = (function($) {
	'use strict';

	function entitize() {
		var content = $('#entitize-content').val(),
			quotestyle = $('#op-quotestyle').val(),
			replacetype = ($('#op-replacetype-all').prop('checked'))?$('#op-replacetype-all').val():$('#op-replacetype-special').val();
		$.ajax({
			url: '/api/entitize',
			cache: false,
			type: 'POST',
			data: {content: content, quotestyle: quotestyle, replacetype: replacetype},
			dataType: 'html'
		})
		.done(function(data) {
			$('#entitize-content').val(data);
		});
	}

	$(function() {

		$('#frmEntitize').on('submit', function(ev) {
			ev.preventDefault();
			entitize();
		});

	});

	return {
		entitize: entitize
	};

}(jQuery));
