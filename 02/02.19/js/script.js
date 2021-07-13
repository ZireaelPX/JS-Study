"use strict";


function first() {
	setTimeout(function () {
		console.log(1);
	}, 500);
}


function secons() {
	console.log(2);
}
first();
secons();

function learn(lang, callback) {
	console.log(`Я учу: ${lang}`);
	callback();
}

function data() {
	console.log('Callback');
}
console.log("HELLO");

learn('JS', data);
