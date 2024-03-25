

const assert=require(`chai`).assert;
const expect=require(`chai`);
// const{assert,expect}=require(`chai`);


describe(`Array`,function(){

	describe(`#indexOf()`,function(){

		it(`should return -1 when the value is not present`,function(){
			const arr1=[6,3,8];
			const result=arr1.indexOf(10);
			assert.equal(result,-1,"Expected value is not present");
		});


		it(`should return 1 when the value is present`,function(){
			const arr1=[6,3,8];
			const result=arr1.indexOf(8);
			expect(result).to.equal(1,`Expected index to be 1`);
		});

	});

});