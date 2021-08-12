window.addEventListener("DOMContentLoaded", () => {
	const tabheaderItems = document.querySelector('.tabheader__items');
	const tabheaderItem = document.querySelectorAll('.tabheader__item');
	const tabcontent = document.querySelectorAll('.tabcontent');

	function hide() {
		tabcontent.forEach((item) => {
			item.classList.add('hide');
		});
		tabheaderItem.forEach((item) => {
			item.classList.remove('tabheader__item_active');
		});
	}
	function show(i = 0) {
		tabcontent[i].classList.add('show');
		tabcontent[i].classList.remove('hide');
		tabheaderItem[i].classList.add('tabheader__item_active');
	}
	hide();
	show();

	tabheaderItems.addEventListener('click', (e) => {
		const target = e.target;

		if (target && target.classList.contains('tabheader__item')) {
			tabheaderItem.forEach((item, i) => {
				if (target == item) {
					hide();
					show(i);
				}
			});
		}
	});
});