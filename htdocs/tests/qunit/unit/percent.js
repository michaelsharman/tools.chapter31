
module('Percent module', {
	setup: function() {

	},
	teardown: function() {

	}
});

test('calculate1()', function() {
	strictEqual(TOOLS.percent.calculate1(10,100), 10, '10% of 100 === 10');
	strictEqual(TOOLS.percent.calculate1('a',100), 0, 'Failed validation');
	strictEqual(TOOLS.percent.calculate1(11,95), 10.45, '11% of 95 === 10.45');
	strictEqual(TOOLS.percent.calculate1(140.5,122), 171.41, 'Check for 2 decimal places');
	strictEqual(TOOLS.percent.calculate1(0.01,2), 0, 'Check that first 2 decimal places === 00');
	notEqual(TOOLS.percent.calculate1(15,95), 14.30, '15% of 109 !== 16.349999999999998');
});

test('calculate2()', function() {
	strictEqual(TOOLS.percent.calculate2(10,100), 10, '10 is what % of 100 === 10');
	strictEqual(TOOLS.percent.calculate2('a',100), 0, 'Failed validation');
});

test('calculate3()', function() {
	strictEqual(TOOLS.percent.calculate3(10,10), 100, '10 is 10% of === 100');
	strictEqual(TOOLS.percent.calculate3('a',10), 0, 'Failed validation');
});
