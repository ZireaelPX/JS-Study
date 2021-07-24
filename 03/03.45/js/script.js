'use strict';

function User(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.helllo = function () {
		console.log(`Hello, ${this.name}`);
	};
}

User.prototype.exit = function (name) {
	console.log(`Пользователь ${this.name} ушёл`);
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.helllo();
alex.helllo();

ivan.exit();

console.log(ivan);
console.log(alex);