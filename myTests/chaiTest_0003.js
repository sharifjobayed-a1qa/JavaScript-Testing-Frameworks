

import { assert, expect } from 'chai';

before(() => {
  console.log('Test suite started.');
});

	describe('Test suite 1', () => {
		beforeEach(() => {
			console.log('Test case started.');
		});

			it('Test case 1', () => {
				expect(2 + 8).to.equal(10, 'The math is not correct.');
			});

			it('Test case 2', () => {
				let num1 = 11;
				assert.strictEqual(num1, 10, 'The value is not as expected.');
			});

		afterEach(() => {
			console.log('Test case ended.');
		});
	});

	describe('Test suite 2', () => {});

after(() => {
  console.log('Test suite ended.');
});
