'use strict';

// class Rectangle {
// 	constructor(height, width) {
// 		this.height = height;
// 		this.width = width;
// 	}
// 	calcArea() {
// 		return this.height * this.width;
// 	}
// }
// const square = new Rectangle(10, 10);
// const long = new Rectangle(100, 5);
// console.log(square.calcArea());
// console.log(long.calcArea());
// class ColoredRectangleWithText extends Rectangle {
// 	constructor(height, width, text, color) {
// 		super(height, width); // вызывает свойства, как у родителя (всегда должна стоять на 1 месте в конструктуре)
// 		this.text = text;
// 		this.color = color;
// 	}
// 	showMyProps() {
// 		console.log(`Текст: ${this.text}, цвет: ${this.color}`);
// 	}
// }
// const div = new ColoredRectangleWithText(25, 20, 'hello', 'green')

// div.showMyProps();
// console.log(div.calcArea());
//и
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
class ColoredRectangleWithText extends Rectangle {
	constructor(height, width, text, color) {
		super(height, width); // вызывает свойства, как у родителя (всегда должна стоять на 1 месте в конструктуре)
		this.text = text;
		this.color = color;
	}
	showMyProps() {
		console.log(`Текст: ${this.text}, цвет: ${this.color}`);
	}
}

