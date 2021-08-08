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

