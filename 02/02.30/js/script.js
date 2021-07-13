/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoADV = document.querySelectorAll('.promo__adv img'),
    promoBg = document.querySelector('.promo__bg'),
    promoGenre = promoBg.querySelector('.promo__genre'),
    promoInteractiveLIst = document.querySelector('.promo__interactive-list');

console.log(promoBg);

promoADV.forEach(item => {
    item.remove();
})
promoGenre.textContent = "Драма";
promoBg.style.background = 'url(img/bg.jpg)  no-repeat';
// promoBg.style.cssText = 'background: url(../img/bg.jpg) center center/cover no-repeat';
promoInteractiveLIst.innerHTML = '';
// promoInteractiveLIst.forEach(item => {
//     item.innerHTML = "";
// })
// вместо forEach можно взять 1 элемент и добавить innerHTML(.querySelector), а не все элементы на страницу(querySelectorAll)
// Из-за  querySelectorAll для promoInteractiveLIst не будет работать вывод на строке 51-53

// promoInteractiveLIst.innerHTML = '';
movieDB.movies.sort();

movieDB.movies.forEach((film, index) => {
    promoInteractiveLIst.innerHTML += `
        <li class="promo__interactive-item">${index + 1}. ${film}<div class="delete"></div></li>
    `;
});