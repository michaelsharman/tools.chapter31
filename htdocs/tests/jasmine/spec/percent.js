// suite
describe('Percent specs', function() {

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
