'use strict';

class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
	calcArea() {
		return this.height * this.width;
	}
}


const square = new Rectangle(10, 10);
const long = new Rectangle(100, 5);
console.log(square.calcArea());
console.log(long.calcArea());

