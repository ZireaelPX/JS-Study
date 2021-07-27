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