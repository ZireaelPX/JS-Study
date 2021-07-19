const btn = document.querySelector('.btn');

let timerID;
let i = 0;




// function logger() {
// 	if (i === 3) {
// 		clearInterval(timerID);
// 	}
// 	console.log('text');
// 	i++;
// }

// let id = setTimeout(function hello() {
// 	console.log('Hello');
// 	id = setTimeout(hello, 500);
// }, 500);

function animation() {
	const elem = document.querySelector('.box');
	let pos = 0;

	const id = setInterval(frame, 10);

	function frame() {
		if (pos == 300) {
			clearInterval(id);
		} else {
			pos++;
			elem.style.top = pos + "px";
			elem.style.left = pos + "px";
		}
	}
}
btn.addEventListener('click', animation);