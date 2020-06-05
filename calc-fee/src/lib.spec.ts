import { calc_fee } from '../pkg/calc_fee.js'


describe("calc-fee", (): void => {
	it("calc-fee", (): void => {
		expect(calc_fee(
			0,
			BigInt(0),
			BigInt(0),
			'',
			'',
			0,
			)).toBe('');
	});

});
