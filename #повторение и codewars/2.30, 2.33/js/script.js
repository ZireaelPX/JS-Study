/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)+

2) Изменить жанр фильма, поменять "комедия" на "драма"+

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS+

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту +

5) Добавить нумерацию выведенных фильмов +
*/

/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;+
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
 
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки+
 
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
 
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"+
 
    5) Фильмы должны быть отсортированы по алфавиту */
'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const promoAdv = document.querySelectorAll('.promo__adv img'),
        promoGenre = document.querySelector('.promo__genre'),
        promoBG = document.querySelector('.promo__bg'),
        parentList = document.querySelector('.promo__interactive-list'),
        formAddFilms = document.querySelector('form.add'),
        formAddInput = formAddFilms.querySelector('.adding__input'),
        formCheckbox = formAddFilms.querySelector('[type="checkbox"]');




    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
        ]
    };

    promoAdv.forEach((item) => {
        item.remove();
    });

    promoGenre.textContent = 'драма';
    promoBG.style.backgroundImage = 'url("img/bg.jpg")';

    // movieDB.movies.sort();



    formAddFilms.addEventListener('submit', (e) => {
        e.preventDefault();
        // let value = formAddInput.value.toUpperCase();
        let value = formAddInput.value;
        if (value.length > 21) {
            value = value.substring(0, 21) + '...';
            console.log(value);
        }
        if (formCheckbox.checked) {
            console.log('Любимый фильм');
        }
        movieDB.movies.push(value);
        sortArr(movieDB.movies);
        console.log(movieDB.movies);
        formAddFilms.reset();
        createListFilms();
    });
    function sortArr(arr) {
        arr.sort();
    }
    function createListFilms() {
        parentList.textContent = '';
        movieDB.movies.forEach((item, i) => {
            parentList.innerHTML +=
                `<li class="promo__interactive-item">${i + 1}. ${item}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((item, i) => {
            item.addEventListener('click', () => {
                movieDB.movies.splice(i, 1);
                console.log(movieDB.movies);
                createListFilms();
            });
        });

        sortArr(movieDB.movies);
    }
    sortArr(movieDB.movies);
    createListFilms();

});
