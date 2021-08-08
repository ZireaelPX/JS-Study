/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)+

2) Изменить жанр фильма, поменять "комедия" на "драма"+

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS+

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту +

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
    const promoAdvImgs = document.querySelectorAll('.promo__adv img');
    const promoGenre = document.querySelector('.promo__genre');
    const promoBg = document.querySelector('.promo__bg');
    const promoInteractiveList = document.querySelector('.promo__interactive-list');
    const addForm = document.querySelector('.add');
    const addInput = document.querySelector('.adding__input');
    const addCheckbox = document.querySelector('[type="checkbox"]');
    const deleteFilms = document.querySelectorAll('.delete');

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let addValueInput = addInput.value.toUpperCase();
        const checboxBoolen = addCheckbox.checked;
        if (addValueInput) {
            if (addValueInput.length > 21) {
                addValueInput = `${addValueInput.substring(0, 22)}...`;
            }
            if (checboxBoolen) {
                console.log("Ваш любимый фильм");
            }
            movieDB.movies.push(addValueInput);
            console.log(movieDB.movies);
            newFilms(movieDB.movies, promoInteractiveList);
        }

    });
    const deleteADV = (AdvImg) => {
        AdvImg.forEach((adv) => {
            adv.remove();
        });
    };

    const somethingDo = () => {
        promoGenre.textContent = "Драма";
        promoBg.style.backgroundImage = "url('img/bg.jpg')";
    };

    const sortFilms = (arr) => {
        arr.sort();
    };

    const newFilms = (films, parent) => {
        parent.innerHTML = "";

        sortFilms(films);
        films.forEach((item, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${item}
                    <div class="delete"></div>
                </li>
            `;
        });
        // document.querySelectorAll('.delete').forEach((btn, i) => {
        //     btn.addEventListener("click", (e) => {
        //         console.log(e.target);
        //     });
        // });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener("click", (e) => {
                const target = e.target;
                console.log(target);
                console.log(target.parentElement);
                target.parentElement.remove();
                films.splice(i, 1);
                console.log(films);
                newFilms(movieDB.movies, promoInteractiveList);
            });
        });

    };
    deleteADV(promoAdvImgs);
    newFilms(movieDB.movies, promoInteractiveList);
});
