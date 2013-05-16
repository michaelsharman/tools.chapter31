describe('String util specs', function() {
	'use strict';

	var obj;

	beforeEach(function() {
		obj = TOOLS.string;
	});

	afterEach(function() {
		obj = null;
	});

	it('tests TOOLS object or {}', function() {
		//expect(TOOLS).to
	});

	it('calculates number of characters', function() {
		var strPlain = 'the cat sat on the mat',
			strHTML = '<p>the cat sat on the mat</p>';
		expect(obj.getNumCharacters(strPlain, false)).toEqual(22);
		expect(obj.getNumCharacters(strPlain, true)).toEqual(22);
		expect(obj.getNumCharacters(strHTML, false)).toEqual(29);
		expect(obj.getNumCharacters(strHTML, true)).toEqual(22);
	});

	it('calculates number of words', function() {
		var strPlain = 'the cat sat on the mat',
			strHTML = '<p class="blah">the cat <span>sat</span> on the \r\nmat</p>';
		expect(obj.getNumWords(strPlain, false)).toEqual(6);
		expect(obj.getNumWords(strPlain, true)).toEqual(6);
		expect(obj.getNumWords(strHTML, false)).toEqual(9);
		expect(obj.getNumWords(strHTML, true)).toEqual(8);
	});

	it('transfers to paragraph format', function() {
		var strPlain = 'the cat sat on the mat',
			strPlainResult = '<p>' + strPlain + '</p>',
			strHTML = '<p class="blah">the cat <span>sat</span> on the \r\nmat</p>',
			strHTMLResult = '<p><p class="blah">the cat <span>sat</span> on the <br>mat</p></p>';
		expect(obj.paragraphFormat(strPlain)).toEqual(strPlainResult);
		expect(obj.paragraphFormat(strHTML)).toEqual(strHTMLResult);
	});

	it('tests dividing a string in 2', function() {
		var strPlain = '<p>the cat sat on the mat</p>';
		expect(obj.substr(strPlain, 5, true)).toEqual(["the c", "at sat on the mat"]);
		expect(obj.substr(strPlain, 5, false)).toEqual(["<p>th", "e cat sat on the mat</p>"]);
	});

});
