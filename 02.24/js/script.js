'use strict';
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", '');



const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};


let i = 0;
do {
	const a = prompt("Просмотренный фильм", '');
	const b = +prompt("На сколько оцениваете фильм", '');



	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('done');
	} else {
		console.log('none');
		i--;
	}
	i++;
}
while (i < 2);

if (personalMovieDB.count < 10) {
	alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
	alert("Вы киноман");
} else {
	alert('Произошла обибка')
}
console.log(personalMovieDB);
