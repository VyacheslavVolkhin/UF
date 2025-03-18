document.addEventListener("DOMContentLoaded", function() {



	//slider 01
	let slider01 = document.getElementById('slider01');
	let input0101 = document.getElementById('input0101');
	let input0102 = document.getElementById('input0102');
	let inputs01 = [input0101, input0102];
	if (slider01) {
		noUiSlider.create(slider01, {
			start: [50, 12344],
			connect: true,
			step: 1,
			range: {
				'min': 0,
				'max': 20000
			}
		});
		slider01.noUiSlider.on('update', function (values, handle) {
			inputs01[handle].value = values[handle];
		});
	}
	//slider 02
	let slider02 = document.getElementById('slider02');
	let input0201 = document.getElementById('input0201');
	let input0202 = document.getElementById('input0202');
	let inputs02 = [input0201, input0202];
	if (slider02) {
		noUiSlider.create(slider02, {
			start: [50, 12344],
			connect: true,
			step: 1,
			range: {
				'min': 0,
				'max': 20000
			}
		});
		slider02.noUiSlider.on('update', function (values, handle) {
			inputs02[handle].value = values[handle];
		});
	}
	//slider 03
	let slider03 = document.getElementById('slider03');
	let input0301 = document.getElementById('input0301');
	let input0302 = document.getElementById('input0302');
	let inputs03 = [input0301, input0302];
	if (slider02) {
		noUiSlider.create(slider03, {
			start: [50, 12344],
			connect: true,
			step: 1,
			range: {
				'min': 0,
				'max': 20000
			}
		});
		slider03.noUiSlider.on('update', function (values, handle) {
			inputs03[handle].value = values[handle];
		});
	}
	//slider 04
	let slider04 = document.getElementById('slider04');
	let input0401 = document.getElementById('input0401');
	let input0402 = document.getElementById('input0402');
	let inputs04 = [input0401, input0402];
	if (slider04) {
		noUiSlider.create(slider04, {
			start: [50, 12344],
			connect: true,
			step: 1,
			range: {
				'min': 0,
				'max': 20000
			}
		});
		slider04.noUiSlider.on('update', function (values, handle) {
			inputs04[handle].value = values[handle];
		});
	}
	
	
	
	//fancybox
	Fancybox.bind("[data-fancybox]", {
		//settings
	});


	//btn tgl and add
	let tglButtons = document.querySelectorAll('.js-btn-tgl')
	let addButtons = document.querySelectorAll('.js-btn-add')
	for (i = 0;i < tglButtons.length;i++) {
		tglButtons[i].addEventListener('click', function(e) {
			this.classList.contains('active') ? this.classList.remove('active') : this.classList.add('active')
			e.preventDefault()
			return false
		})
	}
	for (i = 0;i < addButtons.length;i++) {
		addButtons[i].addEventListener('click', function(e) {
			if (!this.classList.contains('active')) {
				this.classList.add('active');
				e.preventDefault()
				return false
			}
		})
	}
	let buttonsTglOne = document.querySelectorAll('.js-btn-tgl-one');
	buttonsTglOne.forEach(function(button) {
		button.addEventListener('click', function(e) {
			e.preventDefault();
			let row = this.closest('.row');
			row.querySelectorAll('.js-btn-tgl-one').forEach(function(btn) {
				btn.classList.remove('active');
			});
			row.querySelectorAll('.js-btn-tgl-one').forEach(function(btn) {
				btn.classList.remove('active');
			});
			this.classList.add('active');
			return false;
		});
	});


	//js popup wrap
	const togglePopupButtons = document.querySelectorAll('.js-btn-popup-toggle')
	const closePopupButtons = document.querySelectorAll('.js-btn-popup-close')
	const popupElements = document.querySelectorAll('.js-popup-wrap')
	const wrapWidth = document.querySelector('.wrap').offsetWidth
	const bodyElem = document.querySelector('body')
	function popupElementsClear() {
		document.body.classList.remove('menu-show')
		document.body.classList.remove('filter-show')
		document.body.classList.remove('search-show')
		popupElements.forEach(element => element.classList.remove('popup-right'))
	}
	function popupElementsClose() {
		togglePopupButtons.forEach(element => {
			if (!element.closest('.no-close')) {
				element.classList.remove('active')
			}
		})
	}
	function popupElementsContentPositionClass() {
		popupElements.forEach(element => {
			let pLeft = element.offsetLeft
			let pWidth = element.querySelector('.js-popup-block').offsetWidth
			let pMax = pLeft + pWidth;
			if (pMax > wrapWidth) {
				element.classList.add('popup-right')
			} else {
				element.classList.remove('popup-right')
			}
		})
	}
	for (i = 0; i < togglePopupButtons.length; i++) {
		togglePopupButtons[i].addEventListener('click', function (e) {
			popupElementsClear()
			if (this.classList.contains('active')) {
				this.classList.remove('active')
			} else {
				popupElementsClose()
				this.classList.add('active')
				if (this.closest('.popup-menu-wrap')) {
					document.body.classList.add('menu-show')
				}
				if (this.closest('.popup-search-wrap')) {
					document.body.classList.add('search-show')
				}
				if (this.closest('.popup-filter-wrap')) {
					document.body.classList.add('filter-show')
				}
				popupElementsContentPositionClass()
			}
			e.preventDefault()
			e.stopPropagation()
			return false
		})
	}
	for (i = 0; i < closePopupButtons.length; i++) {
		closePopupButtons[i].addEventListener('click', function (e) {
			popupElementsClear()
			popupElementsClose()
			e.preventDefault()
			e.stopPropagation()
			return false;
		})
	}
	document.onclick = function (event) {
		if (!event.target.closest('.js-popup-block')) {
			popupElementsClear()
			popupElementsClose()
		}
	}
	popupElements.forEach(element => {
		if (element.classList.contains('js-popup-select')) {
			let popupElementSelectItem = element.querySelectorAll('.js-popup-block li a')
			if (element.querySelector('.js-popup-block .active')) {
				element.classList.add('select-active')
				let popupElementActive = element.querySelector('.js-popup-block .active').innerHTML
				let popupElementButton = element.querySelector('.js-btn-popup-toggle')
				popupElementButton.innerHTML = ''
				popupElementButton.insertAdjacentHTML('beforeend', popupElementActive)
			} else {
				element.classList.remove('select-active')
			}
			for (i = 0; i < popupElementSelectItem.length; i++) {
				popupElementSelectItem[i].addEventListener('click', function (e) {
					this.closest('.js-popup-wrap').classList.add('select-active')
					if (this.closest('.js-popup-wrap').querySelector('.js-popup-block .active')) {
						this.closest('.js-popup-wrap').querySelector('.js-popup-block .active').classList.remove('active')
					}
					this.classList.add('active')
					let popupElementActive = element.querySelector('.js-popup-block .active').innerHTML
					let popupElementButton = element.querySelector('.js-btn-popup-toggle')
					popupElementButton.innerHTML = ''
					popupElementButton.insertAdjacentHTML('beforeend', popupElementActive)
					popupElementsClear()
					popupElementsClose()
					if (!this.closest('.js-tabs-nav')) {
						e.preventDefault()
						e.stopPropagation()
						return false
					}
				})
			}
		}
	})



	// Popups
	let popupCurrent;
	let popupsList = document.querySelectorAll('.popup-outer-box')

	document.querySelectorAll(".js-popup-open").forEach(function (element) {
	element.addEventListener("click", function (e) {
		document.querySelector(".popup-outer-box").classList.remove("active");
		document.body.classList.add("popup-open");

		popupCurrent = this.getAttribute("data-popup");
		document
		.querySelector(
			`.popup-outer-box[id="${popupCurrent}"
			]`
		)
		.classList.add("active");

		e.preventDefault();
		e.stopPropagation();
		return false;
		});
	});
	document.querySelectorAll(".js-popup-close").forEach(function (element) {
	element.addEventListener("click", function (event) {
		document.body.classList.remove("popup-open");
		for (i=0;i<popupsList.length;i++) {
			popupsList[i
				].classList.remove("active");
			}
		event.preventDefault();
		event.stopPropagation();
		});
	});
	document.querySelectorAll(".popup-outer-box").forEach(function (element) {
	element.addEventListener("click", function (event) {
		if (!event.target.closest(".popup-box")) {
		document.body.classList.remove("popup-open");
		document.body.classList.remove("popup-open-scroll");
		document.querySelectorAll(".popup-outer-box").forEach(function (e) {
			e.classList.remove("active");
				});
		return false;
			}
		});
	});


	//slider main
	const swiperSliderMain = new Swiper('.slider-main .swiper', {
		loop: false,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		speed: 400,
		pagination: false,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.btn-action-ico.ico-arrow.ico-arrow-next.button-slider-main-next',
			prevEl: '.btn-action-ico.ico-arrow.ico-arrow-prev.button-slider-main-prev',
		},
	
	});


})