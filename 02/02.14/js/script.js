'use strict';


let num = 50;

// while (num <= 55) {
// 	console.log(num);
// 	num++;
// }


// do {
// 	console.log(num);
// 	num++;
// }
// while (num < 55);


for (let i = 0; i < 8; i++) {
	if (i === 4) {
		// break;
		continue;
	}
	console.log(i);
}


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