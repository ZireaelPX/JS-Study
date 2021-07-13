'use strict';



const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели", '');
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели", '');
		}
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			const a = prompt("Просмотренный фильм", '');
			const b = +prompt("На сколько оцениваете фильм", '');

			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log('done');
			} else {
				console.log('none');
				i--;
			}
		}
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			alert('Просмотрено довольно мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			alert("Вы классический зритель");
		} else if (personalMovieDB.count > 30) {
			alert("Вы киноман");
		} else {
			alert('Произошла обибка');
		}
	},
	showMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}

	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	writeYourGenres: function () {
		for (let i = 1; i < 2; i++) {
			// let genre = prompt(`Ваш любимый жанр по порядку ${i}`, '');
			let genres = prompt(`Введите ваши любимые жанры через запятую`, '').toLowerCase();

			if (genres === '' || genres == null) {
				console.log("Введены некоректные данные или не ввели их вовсу");
				i--;
			} else {
				personalMovieDB.genres = genres.split(', ');
				// split разбивает строки на отдельные элементы массива
				personalMovieDB.genres.sort();
			}
		}

		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр ${i + 1} - это ${item}`);
		});
	},
};



