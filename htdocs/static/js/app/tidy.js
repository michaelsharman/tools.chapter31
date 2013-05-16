var TOOLS = TOOLS || {};

TOOLS.tidy = (function($) {
	'use strict';

	function tidy(content, callback) {
		$.ajax({
			url: '/api/tidy',
			cache: false,
			type: 'POST',
			data: content,
			dataType: 'html'
		})
		.done(function(data) {
			callback(data);
		});
	}

	function output(content) {
		var $textProcessed = $('code.text-processed');
		$textProcessed.html(content);
		$textProcessed.find('table').addClass('table').addClass('table-bordered');
		$('div.results').show();
		if ($('#page-options').is(':visible')) {
			// scroll to .results if the help section is open
			$('html,body').animate({scrollTop: $results.offset().top});
		}
	}

	$(function() {

		$('#frmTidy').on('submit', function(ev) {
			ev.preventDefault();
			$('code.text-processed').html('');
			tidy($('#frmTidy').serialize(), output);
		});

	});

	return {
		output: output,
		tidy: tidy
	};

}(jQuery));
