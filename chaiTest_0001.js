

const assert=require(`chai`).assert;
const expect=require(`chai`);


describe(`Array`,function(){

	describe(`#indexOf()`,function(){

		const arr1=[6,3,8];

		it(`should return -1 when the value is not present`,function(){
			const result=arr1.indexOf(10);
			assert.equal(result,-1,"Expected value is not present");
		});


		it(`should return 1 when the value is present`,function(){
			const result=arr1.indexOf(8);
			assert.equal(result,-1,"Expected value is present");
		});

	});

});