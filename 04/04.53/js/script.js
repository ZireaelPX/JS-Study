window.addEventListener("DOMContentLoaded", () => {
	'use strict';
	// tabs
	const tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');

	const hideTabContent = () => {
		tabsContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});
		tabs.forEach((item) => {
			item.classList.remove('tabheader__item_active');
		});
	};

	const showTabContent = (i = 0) => {
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add('tabheader__item_active')
	};
	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (e) => {
		const target = e.target;

		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});
	// timer
	const deadline = '2021-08-21';

	function getTimeRemaining(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date()),
			days = Math.floor((t / (1000 * 60 * 60 * 24))),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor((t / (1000 * 60 * 60) % 24));

		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function getZero(num) {
		if (num >= 0 && num < 10) {
			return '0' + num;
		} else {
			return num;
		}
	}

	function setClock(selector, endtime) {

		const timer = document.querySelector(selector),
			days = timer.querySelector("#days"),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const t = getTimeRemaining(endtime);

			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours);
			minutes.innerHTML = getZero(t.minutes);
			seconds.innerHTML = getZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}

	setClock('.timer', deadline);

	//modal

	const btnModalShow = document.querySelectorAll('[data-modal=""]');
	const btnModalClose = document.querySelector('[data-close=""]');
	const modal = document.querySelector('.modal');

	btnModalShow.forEach((item) => {
		item.addEventListener('click', openModal);
	});

	btnModalClose.addEventListener('click', closeModal);

	modal.addEventListener('click', (e) => {
		const target = e.target;
		if (target === modal) {
			closeModal();
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.code === "Escape" && modal.classList.contains('show')) {
			closeModal();
		}
	});

	// const modalTimerID = setTimeout(openModal, 5000);
	console.log(document.documentElement.scrollHeight);
	console.log(document.documentElement.clientHeight);
	console.log(window.pageYOffset);
	window.addEventListener('scroll', showModalByScroll);
	function openModal() {
		modal.classList.add('show');
		document.body.style.overflow = 'hidden';
		// clearInterval(modalTimerID);
	}

	function closeModal() {
		modal.classList.remove('show');
		document.body.style.overflow = '';
	}

	function showModalByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			openModal();
			window.removeEventListener('scroll', showModalByScroll);
		}
		console.log(123);
	}

	//cards
	//Мой способ

	// const menuBlock = document.querySelector('.menu__block');
	// menuBlock.innerHTML = '';
	// class Cards {
	// 	constructor(name, price, description, img) {
	// 		this.name = name;
	// 		this.price = price;
	// 		this.description = description;
	// 		this.img = img;
	// 	}
	// 	createCards(block) {
	// 		block.innerHTML += `
	// 		<div class="menu__item">
	// 			<img src="${this.img}" alt="vegy">
	// 			<h3 class="menu__item-subtitle">${this.name}</h3>
	// 			<div class="menu__item-descr">${this.description}</div>
	// 			<div class="menu__item-divider"></div>
	// 			<div class="menu__item-price">
	// 				<div class="menu__item-cost">Цена:</div>
	// 				<div class="menu__item-total"><span>${this.price}</span> руб/день</div>
	// 			</div>
	// 		</div>
	// 		`;
	// 	}
	// }

	// const cardsFitnes = new Cards('Меню "Фитнес"', 229, 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 'img/tabs/vegy.jpg');
	// const cardsPremium = new Cards('Меню “Премиум”', 550, 'В меню “Премиум” мы используем не только красивый дизайн упаковки, нои качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без походав ресторан!', 'img/tabs/elite.jpg');
	// const cardsPostnoe = new Cards('Меню "Постное"', 430, 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 'img/tabs/post.jpg');
	// cardsFitnes.createCards(menuBlock);
	// cardsPremium.createCards(menuBlock);
	// cardsPostnoe.createCards(menuBlock);

	// Способ из видео

	class MenuCard {
		constructor(src, alt, title, descr, price, parentSelector) {
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.price = price;
			this.parentSelector = document.querySelector(parentSelector);
			this.transfer = 74;
			this.changeToRUB();
		}

		changeToRUB() {
			this.price = +this.price * this.transfer;
		}

		render() {
			const element = document.createElement('div');
			element.innerHTML = `
					<div class="menu__item">
						<img src="${this.src}" alt="${this.alt}">
						<h3 class="menu__item-subtitle">${this.title}</h3>
						<div class="menu__item-descr">${this.descr}</div>
						<div class="menu__item-divider"></div>
						<div class="menu__item-price">
							<div class="menu__item-cost">Цена:</div>
							<div class="menu__item-total"><span>${this.price}</span> руб/день</div>
						</div>
					</div>
					`;
			this.parentSelector.append(element);
		}
	}

	new MenuCard(
		'img/tabs/vegy.jpg',
		'vegy',
		'Меню "Фитнес"',
		'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
		13,
		'.menu .container'
	).render();

	new MenuCard(
		'img/tabs/elite.jpg',
		'vegy',
		'Меню “Премиум”',
		'Меню “Премиум” - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
		132,
		'.menu .container'
	).render();


	new MenuCard(
		'img/tabs/post.jpg',
		'vegy',
		'Меню Постное',
		'Меню Постное - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
		2,
		'.menu .container'
	).render();

	// отправка данных на сервер

	const forms = document.querySelectorAll('form');

	const message = {
		loading: 'Загрузка',
		success: 'Спасибо!',
		failure: 'Ошибка',
	};


	// XMLHttpRequest - formData
	// function postData(form) {
	// 	form.addEventListener('submit', (e) => {
	// 		e.preventDefault();

	// 		const statusMessage = document.createElement('div');
	// 		statusMessage.classList.add('status');
	// 		statusMessage.textContent = message.loading;
	// 		form.append(statusMessage);

	// 		const request = new XMLHttpRequest();
	// 		request.open("POST", "server.php");

	// 		request.setRequestHeader('Content-type', 'multipart/form-data');

	// 		const formData = new FormData(form);
	// 		request.send(formData);
	// 		console.log(request.status);
	// 		// console.log(request.statusText);
	// 		// console.log(request.response);
	// 		console.log(request.readyState);
	// 		request.addEventListener('load', () => {
	// 			if (request.status === 200) {
	// 				console.log(request.readyState);

	// 				console.log(request.status);
	// 				console.log(request.statusText);
	// 				console.log(request.response);
	// 				statusMessage.textContent = message.success;
	// 				form.reset();
	// 				setTimeout(() => {
	// 					statusMessage.remove();
	// 				}, 2000);
	// 			} else {
	// 				statusMessage.textContent = message.failure;

	// 			}
	// 		});
	// 	});
	// }
	function postData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			const statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			statusMessage.textContent = message.loading;
			form.append(statusMessage);

			const request = new XMLHttpRequest();
			request.open("POST", "server.php");

			request.setRequestHeader('Content-type', 'application/json');

			const formData = new FormData(form);

			const obj = {};

			formData.forEach((value, ic) => {
				obj[ic] = value;
			});

			const json = JSON.stringify(obj);

			request.send(json);
			console.log(request.status);
			// console.log(request.statusText);
			// console.log(request.response);
			console.log(request.readyState);
			request.addEventListener('load', () => {
				if (request.status === 200) {
					console.log(request.readyState);

					console.log(request.status);
					console.log(request.statusText);
					console.log(request.response);
					statusMessage.textContent = message.success;
					form.reset();
					setTimeout(() => {
						statusMessage.remove();
					}, 2000);
				} else {
					statusMessage.textContent = message.failure;

				}
			});
		});
	}
	forms.forEach(item => {
		postData(item);
	});
});