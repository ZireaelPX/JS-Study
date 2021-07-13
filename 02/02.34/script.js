// touchstart
// touchmove
// touchend
// touchenter
// touchcancel

window.addEventListener("DOMContentLoaded", () => {
	const box = document.querySelector('.box');

	box.addEventListener('touchstart', (e) => {
		e.preventDefault();

		console.log('Start');
		// console.log(e.touches);
		console.log(e.targetTouches[0].pageX);
		// pageX - получает коордианты по оси X
	});

	// box.addEventListener('touchmove', (e) => {
	// 	e.preventDefault();

	// 	console.log('Move');
	// });

	// box.addEventListener('touchend', (e) => {
	// 	e.preventDefault();

	// 	console.log('End');
	// });
});

// touches - список всех пальцев, которые взаимодействуют со страницей
// targetTouches
// changedTouches - список пальцев участвубщих в текущей позиии