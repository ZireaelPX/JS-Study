'use strict';

// STRING
console.log(typeof (String(null)));
console.log(typeof (String(4)));




const num = 5;

console.log("yandex.com" + num);

const fontSize = 26 + 'px';



//NUBMER

console.log(typeof (Number('4')));

console.log(typeof (+"5"));

console.log(typeof (parseInt("15px", 10)));

// BOOLEAN

let switcher = null;

if (switcher) {
	console.log("WW");
}

switcher = 1;

if (switcher) {
	console.log("WW");
}

console.log(typeof (Boolean('4')));

console.log(!!"234");

// let x = 5;

console.log([] + false - null + true);
// console.log(typeof ([]));

let y = 1;

let x = y = 2;
console.log(x);

console.log([] + 1 + 2);
console.log(typeof ([] + 1 + 2));

console.log("12"[1]);

console.log(12 && 3);

console.log(null || 2 && 4 || 3);

let a = [1, 2];
let b = [1, 2];
console.log(a == b);