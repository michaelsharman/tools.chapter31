var TOOLS = TOOLS || {};

TOOLS.factorial = (function($,TOOLS) {
	'use strict';

	var f = [];

	/**
	* Calculates the powerset (set of subsets)
	* param {Array} set 1d array of values
	*/
	function powerset(set) {
		var ps = [[]];
		for (var i=0; i < set.length; i++) {
			for (var j = 0, len = ps.length; j < len; j++) {
				ps.push(ps[j].concat(set[i]));
			}
		}
		return ps;
	}

	$(function() {

		$('#frmPowerset').on('submit', function(ev) {
			ev.preventDefault();
			var data = $('#set').val(),
				options = {
					format: $('input[name="op-format"]:checked').val(),					// [list|JSON]
					newLineAfter: ($('#op-new-line-after').attr('checked')) ? true : false,	// [true|false]
					encloseBy: $('input[name="op-enclosed"]:checked').val(),			// [braces|brackets|quotes|nothing]
					trim: ($('#op-trim').attr('checked')) ? true : false						// [true|false]
				},
				result,
				separator,
				set,
				temp,
				encloseStart,
				encloseEnd;
			// Convert to an array, which is what powerset() expects
			if (typeof data === 'string') {
				set = data.split(',');
			}
			if (options.trim) {
				$(set).each(function(index, el) {
					set[index] = $.trim(el);
				});
			}
			result = powerset(set);
			// Format the result
			if (options.format === 'JSON') {
				result = JSON.stringify(result);
			} else {
				// Set newline or comma delimited sets
				separator = (options.newLineAfter) ? '<br>' : ',';
				// Format output with the user option
				switch (options.encloseBy) {
					case "braces":
						encloseStart = "{";
						encloseEnd = "}";
						break;
					case "brackets":
						encloseStart = "[";
						encloseEnd = "]";
						break;
					case "quotes":
						encloseStart = '"';
						encloseEnd = '"';
						break;
					case "none":
						encloseStart = "";
						encloseEnd = "";
						break;
					default:
						encloseStart = "";
						encloseEnd = "";
				}
				temp = [];
				$.each(result, function(index, el) {
					temp.push(encloseStart+el+encloseEnd);
				});
				result = temp.join(separator);
			}
			$('#text-processed').html(result);
			$('div.results').show();
		});

		// List and JSON options are mutually exclusive so disable opposite options
		$('input[name="op-format"]').on('change', function(ev) {
			var hide = $(this).val() === 'JSON';
			$('div.format-list').find('input').each(function() {
				if ($(this).attr('name') !== 'op-format') {
					$(this).attr('disabled', hide);
				}
			});
		});
	});

}(jQuery,TOOLS));
