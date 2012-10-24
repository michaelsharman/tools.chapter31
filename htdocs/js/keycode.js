var TOOLS = TOOLS || {};

TOOLS.stopwatch = (function(document,$,TOOLS) {
	'use strict';

	// http://unixpapa.com/js/key.html

	var $key = $('#key'),
		$resultKey = $('#resultKey'),
		$resultKeyCode = $('#resultKeyCode'),
		$resultKeyCodeTranslate = $('#resultKeyCodeTranslate'),
		controlKeyCodeMap = {
			8: 'Backspace',
			9: 'Tab',
			13: 'Enter',
			16: 'Shift',
			17: 'Ctrl',
			18: 'Alt/Option',
			27: 'Escape',
			32: 'Space',
			33: 'Page Up',
			34: 'Page Down',
			35: 'End',
			36: 'Home',
			37: 'Left Arrow',
			38: 'Top Arrow',
			39: 'Right Arrow',
			40: 'Bottom Arrow',
			45: 'Insert',
			46: 'Delete',
			91: 'Command/Apple/Windows Left',
			93: 'Command/Apple/Windows Right',
			124: 'Print Screen',
			// Overwrite some crazy stuff
			186: 'Semi-Colon',
			187: 'Equals',
			188: 'Comma',
			189: 'Hyphen',
			190: 'Period',
			191: 'Forward Slash',
			192: 'Backtick',
			219: 'Bracket Left',
			221: 'Bracket Right',
			220: 'Backslash',
			222: 'Apostrophe'
		},
		keyCodeMap = $.extend({
			48: '0',
			49: '1',
			50: '2',
			51: '3',
			52: '4',
			53: '5',
			54: '6',
			55: '7',
			56: '8',
			57: '9',
			65: 'a',
			66: 'b',
			67: 'c',
			68: 'd',
			69: 'e',
			70: 'f',
			71: 'g',
			72: 'h',
			73: 'i',
			74: 'j',
			75: 'k',
			76: 'l',
			77: 'm',
			78: 'n',
			79: 'o',
			80: 'p',
			81: 'q',
			82: 'r',
			83: 's',
			84: 't',
			85: 'u',
			86: 'v',
			87: 'w',
			88: 'x',
			89: 'y',
			90: 'z'
		}, controlKeyCodeMap);

	$(function() {

		$(document).keyup(function(evt) {
			var kc = evt.which || evt.keyCode,
				// Look in the map first as it has conrol characters etc
				key = controlKeyCodeMap[kc] || String.fromCharCode(kc),
				counter = 0;
			$resultKey.html(key);
			$resultKeyCode.html(kc);
			if (counter === 0) {
				$('div.results').show();
				counter++;
			}
		});

		$key.keyup(function() {
			$resultKeyCodeTranslate.html(keyCodeMap[$key.val()]);
		});

	});

}(document,jQuery,TOOLS));