var TOOLS = TOOLS || {};

TOOLS.tidy = (function($) {
	'use strict';

	function process() {
		var $textProcessed = $('code.text-processed'),
			$results = $('div.results');
		$textProcessed.html('');
		$.ajax({
			url: '/api/tidy',
			cache: false,
			type: 'POST',
			data: $('#frmTidy').serialize(),
			dataType: 'html'
		})
		.done(function(data) {
			$textProcessed.html(data);
			$textProcessed.find('table').addClass('table').addClass('table-bordered');
			$results.show();
			if ($('#page-options').is(':visible')) {
				// scroll to .results if the help section is open
				$('html,body').animate({scrollTop: $results.offset().top});
			}
		});
	}

	$(function() {

		$('#frmTidy').on('submit', function(ev) {
			ev.preventDefault();
			process();
		});

	});

	return {
		process: process
	};

}(jQuery));
