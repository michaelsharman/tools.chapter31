var TOOLS = TOOLS || {};

TOOLS.tidy = (function($) {
	'use strict';

	$(function() {

		$('#frmTidy').on('submit', function(ev) {
			ev.preventDefault();
			var content = $('#tidy-content').val(),
				$textProcessed = $('code.text-processed'),
				$results = $('div.results');
			$textProcessed.html('');
			$.ajax({
				url: '/api/tidy',
				cache: false,
				global: false,
				type: 'POST',
				data: $('#frmTidy').serialize(),
				dataType: 'html',
				ajaxSend: $('#frmTidy').append('<img src="/static/img/ajax-loader.gif" alt="loading..." class="loader" />')
			})
			.done(function(data) {
				$textProcessed.html(data);
				$textProcessed.find('table').addClass('table').addClass('table-bordered');
				$results.show();
				$('#frmTidy > .loader').hide();
				if ($('#tidy-options').is(':visible')) {
					// scroll to .results if the help section is open
					$('html,body').animate({scrollTop: $results.offset().top});
				}
			})
			.fail(function(jqXHR, textStatus, errorThrown) {
				// TODO: Implement decent error handling
			});
		});

		$('#btn-options').on('click', function(ev) {
			ev.preventDefault();
			$('#tidy-options').toggle();
			$('#chev').toggleClass('icon-chevron-down').toggleClass('icon-chevron-up');
		});

	});

}(jQuery));