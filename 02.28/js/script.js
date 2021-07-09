'use strict';

const box = document.getElementById('box');
console.log(box);

const btn = document.getElementsByTagName('button');
console.log(btn[1]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');
console.log(hearts);

hearts.forEach((item, i, w) => {
	console.log(item);
	console.log(i);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);