'use strict';

// const now = new Date(2021, 7, 19, 21);

const now = new Date();



// console.log(now.getFullYear());
// console.log(now.getDay()); // получает день недели
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getUTCHours());
// console.log(now.getHours());
// console.log(now.getTimezoneOffset());
// console.log(now.getTime());


console.log(now.setHours(18));
console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
	let some = i ** 3;
}

let end = new Date();

console.log(`Цикл отработал за ${end - start}`); // в консоли появится время работы цикла