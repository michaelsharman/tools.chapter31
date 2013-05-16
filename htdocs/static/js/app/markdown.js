var TOOLS = TOOLS || {};

TOOLS.markdown = (function($) {
	'use strict';

	function process() {
		var content = $('#md-content').val(),
			$textProcessed = $('div.text-processed'),
			$results = $('div.results'),
			isChecked = ($('#md-extra').prop('checked')) ? 1 : 0;
		$textProcessed.html('');
		$.ajax({
			url: '/api/markdown',
			cache: false,
			type: 'POST',
			data: {content: content, extra: isChecked},
			dataType: 'html'
		})
		.done(function(data) {
			$textProcessed.html(data);
			$textProcessed.find('table').addClass('table').addClass('table-bordered');
			$results.show();
			if ($('#md-cheatsheet').is(':visible')) {
				// scroll to .results if the help section is open
				$('html,body').animate({scrollTop: $results.offset().top});
			}
		});
	}

	$(function() {

		$('#frmMarkdown').on('submit', function(ev) {
			ev.preventDefault();
			process();
		});

	});

	return {
		process: process
	};

}(jQuery));
