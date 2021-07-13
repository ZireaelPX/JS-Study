'use strict';

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// btn.onclick = () => {
// 	alert(234);
// };

// btn.addEventListener('click', () => {
// 	alert(234);
// });

// btn.addEventListener('click', () => {
// 	alert('lol');
// });

// можно навесить на один элемент 2 обработчика события


// btn.addEventListener('mouseenter', (event) => {
// 	console.log(event.target);
// 	event.target.remove();// удаляет элемент со страницы
// });



// let i = 0;
// const deleteElem = (e) => {
// 	console.log(e.target);
// i++;
// if (i == 1) {
// 	btn.removeEventListener('click', deleteElem);
// }
// };
// btn.addEventListener('click', deleteElem);








const deleteeElem = (e) => {
	console.log(e.currentTarget);
	console.log(e.type);
};
// btn.addEventListener('click', deleteeElem);
// overlay.addEventListener('click', deleteeElem);

// const link = document.querySelector('a');

// link.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	console.log(e.target);
// });


const btnAll = document.querySelectorAll("button");
btnAll.forEach((btn) => {
	btn.addEventListener("click", deleteeElem, { once: true });
});
