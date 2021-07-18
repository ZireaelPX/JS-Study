const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.add('red'));
// console.log(btns[0].classList.item(0)); // получает 1 класс элемента
// console.log(btns[0].classList.add('red', 'he', 'sdf'));
// console.log(btns[0].classList.remove('blue'));


// console.log(btns[1].classList.contains('red'));

// btns[0].addEventListener('click', () => {
// 	// if (!btns[1].classList.contains('red')) {
// 	// 	console.log('red');
// 	// } else {
// 	// 	console.log('yellow');
// 	// }
// 	btns[1].classList.toggle('red');
// });

wrapper.addEventListener('click', (e) => {
	const target = e.target;
	// console.log(target);
	// if (e.target && e.target.tagName == "BUTTON") {
	// 	console.log('EEEE');
	// }
	// if (e.target && e.target.classList.contains('blue' ,'some')) {
	// 	console.log('EEEE');
	// }
	if (e.target && e.target.matches("button.blue")) {
		console.log('EEEE');
	}
});