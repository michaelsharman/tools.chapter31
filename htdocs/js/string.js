var TOOLS = TOOLS || {};

TOOLS.string = (function($) {
	'use strict';

	function getNumCharacters(str, ignorehtml) {
		var s = (ignorehtml)?removeHTML(str):str;
		return (s.length);
	}

	function getNumWords(str, ignorehtml) {
		var s = (ignorehtml)?removeHTML(str):str,
			count = 0,
			res = [
				s.match(/\r\n\r\n/g),
				s.match(/\r\n/g),
				s.match(/\n/g)
			];
		// Look for line breaks, they'll generally mean a word but spaces won't pick it up
		for (var i = 0; i <= res.length; i++) {
			if (res[i] !== undefined && res[i] !== null) {
				count += res[i].length;
			}
		}
		return s.split(' ').length + count;
	}

	/**
	 * @hint Replaces \n and \r\n with <br> and <p>
	 */
	function paragraphFormat(str) {
		var result = '<p>' + str + '</p>';
		result.replace(/\r\n\r\n/g, "</p><p>").replace(/\n\n/g, "</p><p>");
		result = result.replace(/\r\n/g, "<br>").replace(/\n/g, "<br>");
		return result;
	}

	/**
	 * @hint Removes any HTML markup from a given string
	 */
	function removeHTML(str) {
		return str.replace(/<(?:.|\n)*?>/gm, '');
	}

	/**
	 * @hint Divides a string in two (at the index `i`)
	 */
	function substr(str, i, ignorehtml) {
		var ret = [];
		var s = (ignorehtml)?removeHTML(str):str;
		ret.push(s.substring(0, i), s.substring(i, s.length));
		return ret;
	}

	return {
		getNumCharacters: getNumCharacters,
		getNumWords: getNumWords,
		paragraphFormat: paragraphFormat,
		substr: substr
	};

}(jQuery));