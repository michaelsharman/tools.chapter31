
module('Percent module');

test('calculate1()', function() {
	equal(TOOLS.percent.calculate1(10,100), 10, '10% of 100 === 10');
	equal(TOOLS.percent.calculate1(11,95), 10.45, '11% of 95 === 10.45');
	notEqual(TOOLS.percent.calculate1(15,95), 14.30, '15% of 95 !== 14.30');
});

test('calculate2()', function() {
	equal(TOOLS.percent.calculate2(10,100), 10, '10 is what % of 100 === 10');
});

test('calculate3()', function() {
	equal(TOOLS.percent.calculate3(10,10), 100, '10 is 10% of === 100');
});
