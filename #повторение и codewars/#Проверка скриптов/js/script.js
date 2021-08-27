console.log(null + true);
console.log(null + false);
console.log(false - null);
console.log(true - null);
console.log(1 && '');
console.log(typeof (1 && ''));
console.log(1 && 0);
console.log(1 && null);
console.log(1 || null);

if (1 && true && 0) {
	console.log(1);
} else {
	console.log(2);
}

console.log(3 && 2);


const sadBTN = document.querySelector('button');

sadBTN.addEventListener('click', (e) => {
	e.target.remove();
});
console.log('a' * 'b');


let a = 5;
console.log('Я' > 'А');

console.log(undefined === 0);
console.log(5 > 4);//true
console.log("ананас" > "яблоко");//false
console.log("2" > "12");//true
console.log("846" > "524");//true
console.log(undefined == null);//true
console.log(undefined === null);//false
console.log(null == "\n0\n");//false
console.log(null === +"\n0\n");//false


let firstName = null;
let lastName = null;
let nickName = "Суперкодер";


// alert(firstName || lastName || nickName || "Аноним");

console.log(1 && 2);
// console.log(alert(1) || 2 || alert(3));
console.log(alert(1));



function age(age) {
	if (age >= 14 && age <= 90) {
		console.log('Находится в заданном диапозоне');
	} else {
		console.log('Ошибка');
	}
}
age(1);

function age(age) {
	if (!(age >= 14 && age <= 90)) {
		console.log('Не находится в данном диапозоне');
	} else {
		console.log('Находится в заданном диапозоне');
	}
}
age(15);


function age(age) {
	if (age <= 14 || age >= 90) {
		console.log('Verno, ' + age + 'не находится в диапозоне от 14 до 90');
	} else {
		console.log('Neverno, ' + age + ' находится в диапозоне от 14 до 90');
	}
}
age(15);

console.log(1 && null);
console.log(1 && 2 || null);

console.log(null || 0);

if (-1 || 0) {
	console.log('sad');
}
if (-1 && 0) {
	console.log('sad');
} else {
	console.log('nosad');
}
if (null || -1 && 1) {
	console.log('sad');
} else {
	console.log('nosad');
}

console.log(1 && null && NaN);
console.log(1 || 2);
console.log(null || undefined);
console.log(null || 2 && 3 || 2 && null);
//                     3	       null


const arrr = [1, 2, 3, 1000];
console.log(Math.max(...arrr));
let sum = 0;
for (let index = 0; index < arrr.length; index++) {
	sum += arrr[index];
	return sum;
}
console.log(sum);

// function sum(arr) {
// 	return arr.reduce(function(total, value) {
// 	    return total + value;
// 	}, 0);
//  }); - перебор массива для нахождения суммы массива
// subArr.reduce((a,b)=>a+b,0) - перебор массива для нахождения суммы массива


//	найти максимальную сумму непрервыного подмассива из списка целых чисел
//	найти среди всех возможных вариантов подмассивов максимальную сумму
//	перебрать все варианты начала подмассива, и для каждого из вариантов перебрать все вомзожные окончания, и найти сумму, и выбрать максимальную сумму. Запонмить сумму. ПОСЛЕ: найти максимальный
//	
//
//
//

const sumArr = (subArr) => {
	//   let sum = 0;
	//   for (let index = 0; index < subArr.length; index++) {
	// 	  sum += arrr[index];
	// 	  return sum;
	//   }
	return subArr.reduce((a, b) => a + b, 0);
};


var maxSequence = function (wholeArr) {
	const allSum = [];
	for (let start = 0; start < wholeArr.length; start++) {
		for (let finish = start; finish < wholeArr.length; finish++) {
			const subArray = wholeArr.slice(start, finish);
			const sum = sumArr(subArray);
			allSum.push(sum);
		}
	}

};

maxSequence([1, 2, 3]);


