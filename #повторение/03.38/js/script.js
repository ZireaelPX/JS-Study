window.addEventListener("DOMContentLoaded", () => {
	const tabheaderItems = document.querySelector('.tabheader__items');
	const tabheaderItem = document.querySelectorAll('.tabheader__item');
	const tabcontent = document.querySelectorAll('.tabcontent');


	const hideTabs = () => {
		tabcontent.forEach((item) => {
			item.style.display = "none";
		});
		tabheaderItem.forEach((item) => {
			item.classList.remove('tabheader__item_active');
		});
	};
	const showTabs = (i = 0) => {
		tabcontent[i].style.display = "block";
		tabheaderItem[i].classList.add('tabheader__item_active');
	};
	hideTabs();
	showTabs();
	tabheaderItems.addEventListener('click', (e) => {
		const target = e.target;
		if (target && target.classList.contains('tabheader__item')) {
			tabheaderItem.forEach((item, i) => {
				if (target == item) {
					hideTabs();
					showTabs(i);
				}
			});
		}
	});
});