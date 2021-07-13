"use strict";

const arr = [1, 2, 3, 6, 8];

const arr2 = [2, 12, 24, 45, 1];
arr2.sort(compareNum);
console.log(arr2);

function compareNum(a, b) {
	return a - b;
}

// arr[99] = 2;
// console.log(arr.length);
// console.log(arr);
// arr.pop();
// arr.pop();
// arr.push(20);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// for (let key of arr) {
// 	console.log(key);
// }





// arr.forEach(function (i, b, c) {
// 	// console.log(i);
// 	// console.log(b);
// 	// console.log(c);
// 	console.log(`${i}: ${b} внутри массива ${c}`);
// });

const str = prompt("", "");

const products = str.split(", ");
products.sort();
console.log(products.join('; '));
console.log(typeof (products[2]));

