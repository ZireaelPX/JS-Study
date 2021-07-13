'use strict';
// console.log(document.documentElement); // выводит в консоль всю вёсртку
// console.log(document.body.childNodes); // в псевдомассиве появляются все элементы внутри body
// console.log(document.body.firstChild); // получает первый дочерний элемент
// console.log(document.body.firstElementChild); // получает первый дочерний элемент
// console.log(document.body.lastChild); // получает последний дочерний элемент


// console.log(document.querySelector("#current").parentNode.parentNode);// parentNode получается родителя элемента(можно дублировать и получить родителя родителя)
// console.log(document.querySelector("#current").parentElement.parentElement);// parentElement получается родителя элемента(можно дублировать и получить родителя родителя)

// console.log(document.querySelector('[data-current="3"]').nextSibling); // nextSibling - получает следующего соседа, previousSibling - получает предыдущего соседа
// console.log(document.querySelector('[data-current="3"]').previousElementSibling); // nextElementSibling - получает следующий элемент, previousElementSibling  - получает предыдущий элемент


// for (let node of document.body.childNodes) {
// 	if (node.nodeName == '#text') {
// 		continue;
// 	}
// 	console.log(node);
// }
// получает все элементы внтри body без text