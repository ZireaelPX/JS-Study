'use strict';

// function showThis() {
// 	console.log(this);
// }

// showThis();

// 1)this = window, если есть use strict = underfind


// function showThis1(a, b) {
// 	// console.log(this);
// 	function sum() {
// 		// console.log(this);
// 		return a + b;
// 	}
// 	console.log(sum());
// }

// showThis1(4, 5);


// const obj = {
// 	a: 20,
// 	b: 15,
// 	sum: function () {
// 		function shout() {
// 			console.log(this);
// 		}
// 		shout();
// 	}
// };
// obj.sum();

// 2)Контекст(this) у методов объекта - сам объект

// function User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// 	this.helllo = function () {
// 		console.log(`Hello, ${this.name}`);
// 	};
// }

// let ivan = new User('Ivan', 28);

// 3)this в конструкторах и классах - это новый экземпляр

// function sayName(surname) {
// 	console.log(this.name + surname);
// 	console.log(this);
// }

// const Userr = {
// 	name: 'John',
// };

// sayName.call(Userr, 'SSSSSSS');
// sayName.apply(Userr, ['SSSSSS']);

// function count(num) {
// 	return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(233));

// 4) Ручаня привязка this: call, apply, bind

// const btn = document.querySelector('button');
// btn.addEventListener('click', function () {
// 	this.style.backgroundColor = 'green';
// });

// const obj = {
// 	num: 5,
// 	sayNum: function () {
// 		const say = () => {
// 			console.log(this.num);
// 		};
// 		say();
// 	}
// };

// obj.sayNum();

// const double = a => a * 2;
// console.log(double(4));

const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
	const target = e.target;
	target.style.backgroundColor = 'green';
});

