'use strict';

//Rest оператор и параметры по умолчанию - ТРИ ТОЧКИ(...)

const log = function (a, b, ...rest) {
	console.log(a, b, rest);
}
log('basic', 'rest', 'operator', 'usage');
