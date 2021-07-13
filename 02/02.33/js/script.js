'use strict';

document.addEventListener("DOMContentLoaded", () => {
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
        promoInteractiveLIst = document.querySelector('.promo__interactive-list'),
        add = document.querySelector('form.add'),
        addInput = add.querySelector('.adding__input'),
        addCheckbox = add.querySelector('[type="checkbox"]');
    // console.log(promoBg);

    add.addEventListener('submit', (e) => {
        e.preventDefault();
        let addInputValue = addInput.value.toUpperCase();
        const addCheckboxValue = addCheckbox.checked;

        if (addInputValue) {

            if (addInputValue.length > 21) {
                addInputValue = `${addInputValue.substring(0, 22)}...`;
            }
            if (addCheckboxValue) {
                console.log("ВАШ ЛЮБИМЫЙ ФИЛЬМ");
            }
            movieDB.movies.push(addInputValue);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, promoInteractiveLIst);
        }


        e.target.reset();
    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = (arr) => {
        promoGenre.textContent = "Драма";
        promoBg.style.background = 'url(img/bg.jpg)  no-repeat';
    };
    const sortArr = (arr) => {
        arr.sort();
    };
    movieDB.movies.sort();
    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);
        films.forEach((film, index) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${index + 1}. ${film}<div class="delete"></div></li>
            `;
        });
        console.log(movieDB);
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', (e) => {
                console.log(e.target);
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });
        });
    }
    deleteAdv(promoADV);
    makeChanges();
    createMovieList(movieDB.movies, promoInteractiveLIst);
});