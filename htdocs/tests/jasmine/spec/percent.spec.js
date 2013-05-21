// suite
describe('Percent method specs', function() {
	'use strict';

	var obj;

	beforeEach(function() {
		obj = TOOLS.percent;
	});

	afterEach(function() {
		obj = null;
	});

	// specs for calculate1()
	it('calculates 10% of 100', function() {
		// expectation
		expect(obj.calculate1(10,100)).toEqual(10);
	});

	it('tries to calculate a non-numeric % of 100', function() {
		expect(obj.calculate1('a', 100)).toEqual(0);
	});

	it('calculates a % to return 2 decimal places', function() {
		expect(obj.calculate1(11, 95)).toEqual(10.45);
	});

	it('calculates a float % to return 2 decimal places', function() {
		expect(obj.calculate1(140.5, 122)).toEqual(171.41);
	});

	it('calculates a float % to return 0 (Math.round)', function() {
		expect(obj.calculate1(0.01, 2)).toEqual(0);
	});

	it('calculates what a % should not equal', function() {
		expect(obj.calculate1(15, 95)).not.toEqual(16.349999999999998);
	});

	// specs for calculate2()
	it('n1 is what % of n2', function() {
		expect(obj.calculate2(10, 100)).toEqual(10);
	});

	it('tries to calculate a non-numeric %', function() {
		expect(obj.calculate2('a', 100)).toEqual(0);
	});

	// specs for calculate3()
	it('n1 is x% of n2', function() {
		expect(obj.calculate3(10, 10)).toEqual(100);
	});

});
/*
// suite for DOM events
describe('Percent DOM/Event specs', function() {
	'use strict';

	var obj;

	beforeEach(function() {
		if (typeof window.__karma__ !== 'undefined') {
			jasmine.getFixtures().fixturesPath = 'base/tests/jasmine/spec/javascripts/fixtures';
		}
		jasmine.getFixtures().load('percent.html');
		obj = TOOLS.percent;
	});

	afterEach(function() {
		obj = null;
	});

	it('checks that fixture(s) have loaded', function() {
		expect($('#num1')).toExist();
		expect($('#num2')).toExist();
		expect($('#result1')).toExist();
		var fixture = readFixtures('percent.html');
		expect(fixture).toContain('output');
	});

	it('checks change event for num1 and num2', function() {
		var spyNum1 = spyOnEvent('#num1', 'change'),
			spyNum2 = spyOnEvent('#num2', 'change'),
			num1 = 5,
			num2 = 100,
			result = '5',
			output = obj.calculate1(num1, num2);

		$('#num1').val(num1).trigger('change');
		$('#num2').val(num2).trigger('change');
		expect(spyNum1).toHaveBeenTriggered();
		expect(spyNum2).toHaveBeenTriggered();
		obj.setResult('result1', num1, num2);
		expect($('#result1').html()).toEqual(result);
	});

});
*/
