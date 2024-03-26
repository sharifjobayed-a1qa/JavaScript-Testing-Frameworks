

import {assert,expect} from 'chai';


describe(`Math`,function(){

	this.retries(3);

	it(`should return the correct sum`,function(){
		expect(5+3).to.equal(8,`The calculation is not correct.`)
	});

	it(`should check if a value is within a range`,function(){
		expect(5).to.within(2,6,`The number is not correct`);
	});

	it(`should check if an array includes a specific value`,function(){
		let arr1=[324,455,36,465,6546];
		expect(arr1).to.include(455,`The number is not found in the array.`)
	});

	it(`should check if an object has a specific property`,function(){
		let obj1={brand:`Honda`,model:`CBR1000RR`}
		expect(obj1).to.have.property('model',`Property not found in the object.`);
	});

});