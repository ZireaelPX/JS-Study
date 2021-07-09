"use strict";


// console.dir([1, 2, 3]);

const sold = {
	productsID: 400,
	price: 1000,
	sayHello: function () {
		console.log('Hello');
	}
};

const jonh = Object.create(sold);



// clava.__proto__ = sold;

// Object.setPrototypeOf(clava, sold);

jonh.sayHello();

