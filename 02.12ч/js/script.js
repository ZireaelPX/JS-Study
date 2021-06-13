'use strict';
// let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", '');
// console.log(numberOfFilms);



const personalMovieDB = {
	// count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

const a = prompt("Просмотренный фильм", '');
const b = +prompt("На сколько оцениваете фильм", '');
const c = prompt("Просмотренный фильм", '');
const d = +prompt("На сколько оцениваете фильм", '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
console.log(personalMovieDB.movies[a]);
console.log(personalMovieDB.movies);
console.log(1);
