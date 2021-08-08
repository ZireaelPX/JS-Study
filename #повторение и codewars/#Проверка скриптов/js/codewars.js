// Задачи на codewars
let arr = [1, 2, 1113];
console.log(arr[arr.length - 1]);


//Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, 
//if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".

//Моё решение программы
function trueOrFalse(val) {
	if (!val) {
		return 'false';
	} else {
		return 'true';
	}
}
//  решение из kata
function trueOrFalse(val) {
	return Boolean(val).toString();
}




// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of 
// customers to buy hotdogs, different numbers have different prices (refer to the following table), 
// return a number that the customer need to pay how much money.

// +---------------+-------------+
// |  numbers n    | price(cents)|
// +---------------+-------------+
// |n<5            |    100      |
// +---------------+-------------+
// |n>=5 and n<10  |     95      |
// +---------------+-------------+
// |n>=10          |     90      |
// +---------------+-------------+


//Моё решение
function saleHotdogs(n) {
	return n < 5 ? 100 * n : n >= 5 && n < 10 ? 95 * n : 90 * n;
}
// решение с codewars
function saleHotdogs(n) {
	return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
}



// Complete function howManydays, function accept 1 parameters:month, means the month of year, different month has different 
// days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).

// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28      |  (Do not consider the leap year)
// +---------------+-------------+

//Моё решение
// Все месяцы написал и поставил через case - ОЧЕНЬ ПЛОХОЕ РЕШЕНИЕ
// решение с codewars
function howManydays(month) {
	switch (month) {
		case 2: return 28;
		case 4:
		case 6:
		case 9:
		case 11: return 30;
	}
	return 31;
}
// решение с codewars
function howManydays(month) {
	switch (month) {
		case 2: return 28;
		case 4: case 6: case 9: case 11: return 30;
		default: return 31;
	}
}

//Задача
// Coding in function padIt, function accept 2 parameters:

// str, it's a string representing the string to pad, we need pad some "*" at leftside or rightside of str
// n, it's a number, how many times to pad the string.
// Behaviour
// You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating
//  on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

// Finally, return the padded string.
//Моё решение

function padIt(str, n) {
	//coding here
	let i = 1;
	while (i <= n) {
		if (i % 2 == 1) {
			str = '*' + str;
		} else {
			str = str + '*';
		}
		console.log(str);
		i++;
	}

	return str;

}

padIt('wtf', 10);

// Решение с codewars
function padIt(str, n) {
	while (n > 0) {
		if (n % 2 === 0) {
			str = str + "*";
		} else {
			str = "*" + str;
		}
		n--;
		console.log(str);

	}


	return str;
}

// function sumA() {
// 	for (var sum = 0, num = 1; num <= 100; num++) {
// 		sum += num;
// 		console.log(sum);
// 	}
// 	return sum;
// }
// sumA();


function pickIt(arr) {
	var odd = [], even = [];
	//coding here
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			even.push(arr[i]);
		} else {
			odd.push(arr[i]);
		}
	}
	console.log('Нечётный', odd);
	console.log('Чётный', even);
	return [odd, even];
}
pickIt([10, 20, 30]);

//пример 
function findFirstOddNumber(arr) {
	var result;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 1) {
			result = arr[i];
			break;
		}
	}
	console.log(result);
	return result;
}

findFirstOddNumber([2, 3, 4, 5, 6, 7, 8, 9]);

// Coding in function ```grabDoll```. function accept 1 parameter:```dolls```. it's a string array, a list of some dolls.
// You need traverse ```dolls``` by using ```for``` loop. If element is  "Hello Kitty" or "Barbie doll", 
// you should push it to a ```bag```(bag is an array, I've defined in the function); if it's other strings, we should use ```continue``` skip it. 
// When the ```bag``` has three element, ```bag``` is full. You should use ```break``` jump out the loop; 
// If ```bag``` is not full, you should traverse ```dolls``` until the last element. 
// Return the ```bag``` after for loop finished.
// You should use ```for```, ```break``` and ```continue``` in your code. otherwise, your solution may not pass this kata.

// Моё решение
function grabDoll(dolls) {
	let bag = [];
	//coding here
	for (let i = 0; i <= dolls.length; i++) {
		if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
			bag.push(dolls[i]);
			if (bag.length === 3) {
				break;
			}
		}
		else {
			continue;
		}
	}
	console.log(bag);
	return bag;
}
grabDoll(["Mickey Mouse", "Barbie doll", "Hello Kitty", "Hello Kitty", "Hello Kitty", "Snow white"]);
// codewars
//1
function grabDoll(dolls) {
	var bag = [];
	for (d in dolls) {
		if (dolls[d] == "Hello Kitty" || dolls[d] == "Barbie doll") bag.push(dolls[d]);
		if (bag.length < 3) continue;
		break;
	}
	return bag;
}
//2
grabDoll = dolls =>                         // reduce instead for(...) break continue
	dolls.filter(i => i == 'Hello Kitty' || i == 'Barbie doll').slice(0, 3);


//FOR IN FOR OF

function showObjectKeys(obj) {
	for (var key in obj) {
		console.log(key);
	}
}
function showObjectValues(obj) {
	for (var key in obj) {
		console.log(obj[key]);
	}
}
var ob = { item1: "This", item2: "is", item3: "an", item4: "example" };
// showObjectKeys(ob);
showObjectValues(ob);


function showObjectKeys(obj) {
	for (var key in obj) {
		console.log(key);
	}
}
function showObjectValues(obj) {
	for (var key in obj) {
		console.log(obj[key]);
	}
}
var arrr = ["one", "two", "three"];
console.log("keys of arr:");
showObjectKeys(arrr);
console.log("values of arr:");
showObjectValues(arrr);

let wqe = ["one", "two", "three"]
for (var value of wqe) {
	console.log(value);
}
//FOR IN FOR OF

// Task
// Coding in function giveMeFive, function accept 1 parameter: obj, it's an object.
// You need to the traverse the obj, if the length of the object key equals to 5,
// 	then push the key value to the array(you need to define the array by yourself,
// 		this time I won't help you). Additionally push the value to the array as well, 
// 	if the length of the value is equal to 5.
// Return the five after works finished.
// You should use for..in in your code, otherwise, your solution may not pass this kata.

// Моё решение
function giveMeFive(obj) {
	//coding here
	let words = [];

	for (let key in obj) {
		if (key.length === 5 && obj[key].length === 5) {
			words.push(key);
			words.push(obj[key]);
		} else if (obj[key].length === 5) {
			words.push(obj[key]);
		} else if (key.length === 5) {
			words.push(key);
		}
	}
	return words;
}

giveMeFive({ Pears: "than", apple: "sweet" });



// Моё решение 2 - с помощью ответов в KATA
function giveMeFive(obj) {
	//coding here
	let words = [];

	for (let key in obj) {
		if (key.length === 5) {
			words.push(key);
		}
		if (obj[key].length === 5) {
			words.push(obj[key]);
		}
	}
	console.log(words);
	return words;
}

giveMeFive({ Pears: "than", apple: "sweet" });

// Решение с codewars
function giveMeFive(obj) {
	let words = [];
	for (var key in obj) {
		if (key.length == 5) {
			words.push(key);
		}
		if (obj[key].length == 5) {
			words.push(obj[key]);
		}
	}
	return words;
}

giveMeFive({ Pears: "than", apple: "sweet" });

// console.log(key);//Our is 
// console.log(obj[key]);//earth a world
