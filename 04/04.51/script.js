'use strict';

const persone = {
	name: 'Alex',
	tel: '+744324',
	info: {
		town: 'dsf',
		city: 'dsf123',
	}
};


// console.log(JSON.parse(persone));

const copy = JSON.parse(JSON.stringify(persone));
copy.info.town = 'SAA';
console.log(copy);
console.log(persone);