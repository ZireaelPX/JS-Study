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