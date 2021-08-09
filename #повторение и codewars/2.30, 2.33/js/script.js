/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)+

2) Изменить жанр фильма, поменять "комедия" на "драма"+

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS+

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов 
*/

/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.+
 
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки+
 
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
 
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
 
    5) Фильмы должны быть отсортированы по алфавиту */
'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const promoAVD = document.querySelectorAll('.promo__adv img'),
        promoGenre = document.querySelector('.promo__genre'),
        promoBG = document.querySelector('.promo__bg'),
        promoInteractiveList = document.querySelector('.promo__interactive-list'),
        formAdd = document.querySelector('form.add'),
        addingInput = formAdd.querySelector('.adding__input'),
        formCheckbox = formAdd.querySelector('[type="checkbox');
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
        ]
    };


    formAdd.addEventListener('submit', (e) => {
        e.preventDefault();
        let value = addingInput.value;
        if (value) {
            if (value.length > 21) {
                value = value.substring(0, 21) + "...";
                console.log(value);
            }
            if (formCheckbox) {
                console.log('Любимый фильм');
            }
            movieDB.movies.push(value);
            movieDB.movies.sort();
            createFilms(movieDB.movies, promoInteractiveList);
            formAdd.reset();
        }
    });


    promoAVD.forEach((item) => {
        item.remove();
    });

    promoGenre.textContent = "Драма";
    promoBG.style.backgroundImage = 'url("img/bg.jpg")';
    movieDB.movies.sort();

    // deleteFilms.forEach((item, i) => {
    //     item.addEventListener('click', () => {
    //         console.log(item.parentElement);
    //     });
    // }); - не получится из-за, того что элементы созданы динамически

    function createFilms(arr, addList) {
        addList.innerHTML = '';
        arr.forEach((item, i) => {
            item.toString().toUpperCase();
            addList.innerHTML += `                       
                <li class="promo__interactive-item">${i + 1}. ${item}
                    <div class="delete"></div>
                </li>
            `;
        });
        document.querySelectorAll('.delete').forEach((item, i) => {
            item.addEventListener('click', (e) => {
                const target = e.target;
                console.log(target.parentElement);
                target.parentElement.remove();
                arr.splice(i, 1);
                console.log(arr);
                createFilms(movieDB.movies, promoInteractiveList);
            });
        });
    }

    createFilms(movieDB.movies, promoInteractiveList);

});
