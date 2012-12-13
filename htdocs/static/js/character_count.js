var TOOLS = TOOLS || {};

TOOLS.charcount = (function($,TOOLS) {
	'use strict';

	$(function() {

		$('#frmLetterCount').on('submit', function(ev) {
			ev.preventDefault();
			var S = TOOLS.string,
				content = $('#content').val(),
				ignorehtml = $('#ignorehtml').attr('checked') === 'checked',
				lenLC = S.getNumCharacters(content, ignorehtml),
				lenWC = S.getNumWords(content, ignorehtml),
				processed,
				count = $('#count').val(),
				$textProcessed = $('div.text-processed'),
				$pre;

			// Letter count
			$('#lenLC').html(lenLC + ' characters');

			// Word count
			$('#lenWC').html(lenWC + ' word');
			if (lenWC !== 1) {
				$('#lenWC').append('s');
			}

			// Clear previous calculations
			$textProcessed.empty();

			$('div.results').show();

			// If there is a valid count, split the string and add a span for text highlight
			if (parseInt(count, 10) > 0) {
				$textProcessed.html('<pre></pre>');
				$pre = $textProcessed.find('pre');
				processed = S.substr(content, count, ignorehtml);
				if (ignorehtml) {
					$pre.html('<samp class="highlight">' + processed[0] + '</samp>' + processed[1]);
				} else {
					$pre.html($('<samp class="highlight"></samp>').text(processed[0]));
					$pre.append($('<span>').text(processed[1]));
				}
				$textProcessed.show();
			}
		});

	});

}(jQuery,TOOLS));