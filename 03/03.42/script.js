'use strict';

const box = document.querySelector('.box');

const btn = document.querySelector('button');

const width = box.clientWidth;
const height = box.clientHeight;

const width2 = box.offsetWidth;
const height2 = box.offsetHeight;

const width3 = box.scrollWidth;
const height3 = box.scrollHeight;

// console.log(width);
// console.log(height);

// console.log(width2, height2);
console.log(width3);
console.log(height3);

btn.addEventListener('click', () => {
	// box.style.height = box.scrollHeight + 'px';
	console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);
console.log(style.display);

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.scrollTop);