'use strict';

const box = document.getElementById('box'),
	btn = document.getElementsByTagName('button'),
	circles = document.getElementsByClassName('circle'),
	hearts = document.querySelectorAll('.heart'),
	oneHeart = document.querySelector('.heart'),
	wrapper = document.querySelector('.wrapper');


box.style.backgroundColor = 'black';
box.style.width = '500px';

box.style.cssText = 'width: 1000px; background-color: skyblue;';

// for (let i = 0; i < hearts.length; i++) {
// 	hearts[i].style.backgroundColor = 'green';
// }

hearts.forEach((item, i) => {
	item.style.backgroundColor = 'skyblue';
});

const div = document.createElement('div');

const text = document.createTextNode('Privet');

div.classList.add('black');

wrapper.append(div); //Вставляется в конец родителя
// wrapper.appendChild(div);

// wrapper.prepend(div); // вставляется в начало родиетля

// hearts[0].before(div); //вставляется перед элементом
// hearts[0].after(div); //вставляется после элемента
// wrapper.insertBefore(div, hearts[1]); // вставляет элемент перед элементом с заданным индексом

// circles[0].remove(); //удаление элемента со страницы
// wrapper.removeChild(hearts[1]); // удаляет заданный элемент

// hearts[0].replaceWith(circles[0]); // заменяет один элемент на другой
// wrapper.replaceChild(circles[1], hearts[1]); // заменяет один элемент на другой

div.innerHTML = "<h1>Hello</h1>"; //вставляет HTMl код

div.insertAdjacentHTML('beforeend', '<h2>1</h2>');
// beforebegin - вставляет HTMl код перед элементом
// afterbegin - вставляет HTMl код на первую позициб в элементе
// beforeend - вставляет HTMl код на последнюю позициб в элементе
// afterend - вставляет HTMl код после элемента







// div.textContent = "Hello"; //вставляет текст
