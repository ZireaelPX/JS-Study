'use strict';

let num = 20;
function showMessage(text) {
	console.log(text);
	num = 10;
}
showMessage("123");
console.log(num);

function calc(a, b) {
	return (a + b);
}

console.log(calc(5, 5));

function ret() {
	let num = 50;
	return num;
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function () {
	console.log("Hello");
};
logger();

const calcul = (a, b) => {
	return a + b;
};