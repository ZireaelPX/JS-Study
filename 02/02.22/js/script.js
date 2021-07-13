"use strict";

// let a = 5,
// 	b = a;

// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
// 	a: 5,
// 	b: 1,
// };

// const copy = obj;

// copy.a = 10;
// console.log(copy);
// console.log(obj);


// function copy(mainObj) {
// 	let objCopy = {};

// 	let key;
// 	for (key in mainObj) {
// 		objCopy[key] = mainObj[key];
// 	}

// 	return objCopy;
// }

// const numbers = {
// 	a: 2,
// 	b: 5,
// 	c: {
// 		x: 7,
// 		y: 4,
// 	}
// };


// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// console.log(newNumbers);
// console.log(numbers);

const add = {
	d: 17,
	e: 20,
	c: {
		b: 20,
		f: 30,
	}
};


const arr = Object.assign({}, add);
arr.d = 20;
arr.c.b = 50;
console.log(arr);
console.log(add);


const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();


console.log(oldArray);
console.log(newArray);


const video = ['youtube', 'vimeo', 'rutube'],
	blogs = ['wordpress', ' livejournal', 'blogger'],
	internet = [...video, ...blogs, 'vk'];
console.log(video);
console.log(internet);


function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b", "c"];

const newArraay = [...array]
console.log(newArraay);

const q = {
	one: 1,
	two: 2,
	three: {
		b: 2,
		c: 2,
	}
}

const newQ = { ...q };
newQ.three.b = 50;
console.log(newQ);
console.log(q);