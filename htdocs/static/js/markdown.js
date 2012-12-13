var TOOLS = TOOLS || {};

TOOLS.markdown = (function($) {
	'use strict';

	$(function() {

		$('#frmMarkdown').on('submit', function(ev) {
			ev.preventDefault();
			var content = $('#md-content').val(),
				$textProcessed = $('div.text-processed'),
				$results = $('div.results'),
				isChecked = ($('#md-extra').attr('checked') === 'checked') ? 1 : 0;
			$textProcessed.html('');
			$.ajax({
				url: '/api/markdown',
				cache: false,
				global: false,
				type: 'POST',
				data: {content: content, extra: isChecked},
				dataType: 'html',
				ajaxSend: $results.append('<img src="/static/img/ajax-loader.gif" alt="loading..." class="loader" />'),
				ajaxComplete: $results.find('img.loader').hide()
			})
			.done(function(data) {
				$textProcessed.html(data);
				$textProcessed.find('table').addClass('table').addClass('table-bordered');
				$results.show();
				if ($('#md-cheatsheet').is(':visible')) {
					// scroll to .results if the help section is open
					$('html,body').animate({scrollTop: $results.offset().top});
				}
			})
			.fail(function(jqXHR, textStatus, errorThrown) {
				// TODO: Implement decent error handling
			});
		});

		$('#btn-cheatsheet').on('click', function(ev) {
			ev.preventDefault();
			$('#md-cheatsheet').toggle();
			$('#chev').toggleClass('icon-chevron-down').toggleClass('icon-chevron-up');
		});

	});

}(jQuery));