function divideRegion(regData, regName) {
	placemarks[regName] = {};
	if (regionInfo[regName].LoadPlacemarks) { //check on custom loading method
		regionInfo[regName].LoadPlacemarks();
		return;
	}
	Object.keys(schoolType).map(key => schoolType[key]).forEach(type => {
		placemarks[regName][type.name] = [];
		if (!regData) { return; }
		if (regData[type.name]) {
			regData[type.name].forEach(el => {
				auxPlacemark = new ymaps.Placemark([el.Longitude, el.Latitude],
					{
						hintContent: el.name,
						balloonContent: `<a href="${el.WebLink}" target="_blank">${el.name}</a>`
					}, {
					iconLayout: 'default#image',
					iconImageHref: `icons/placemarks/${type.name}.png`,//'icons/placemarks/5.png',
					iconImageSize: [30, 30],
					iconImageOffset: [-15, -15],
					visible: false,
				});
				placemarks[regName][type.name].push(auxPlacemark);
				map.geoObjects.add(auxPlacemark);
			});
		}
	});
}

function polygonInitChecker(regObj) {
	if (typeof polygons[regObj.name] === "undefined") {
		setTimeout(function () {
			polygonInitChecker(regObj);
			console.log(placemarks);
		}, 100);
		console.log(`${regObj.name} got late`);
	}
	else {
		map.geoObjects.add(polygons[regObj.name]);
	}
}


function initMap() {
	ymaps.ready(function () {

		map = new ymaps.Map("map", {
			center: [27.525773, 53.89079],
			zoom: 8,
			controls: ['zoomControl', 'typeSelector']
		});

		map.setCenter(
			[27.525773, 53.89079],
			8,
			{ duration: 400 }
		);



		//Инициализация меток, информационных панелей и полигонов
		Object.keys(regionInfo).map(key => regionInfo[key]).forEach(regObj => {
			if (regObj.InitPolygon) {
				regObj.InitPolygon();
				polygonInitChecker(regObj);
			}
			divideRegion(data[regObj.name], regObj.name);
			AddInfo(regObj);
		});
		// Создадим элемент управления поиск
		var searchControl = new ymaps.control.SearchControl({
			options: {
				provider: 'yandex#search'
			}
		});
		map.controls.add(searchControl);
		initListBox();
		// while (typeof listBox === "undefined"){
		// 	console.log("list box got late");
		// }

		initButtons();

		//Инициализация полигонов 
		//console.log(Object.keys(polygons).map(key => polygons[key]).length);
		// Object.keys(polygons).map(key => polygons[key]).forEach(polygon => {
		// 	map.geoObjects.add(polygon);
		// });




		//console.log(urlReadParameter(urlParamsInfo.focus_region));
		let reg = urlReadParameter(urlParamsInfo.focus_region);
		if (reg) {
			FocusOnRegion(regionInfo[reg]);
		}
		// if (urlReadParameter(urlParamsInfo.focus_region) != null){
		// 	FocusOnRegion(urlReadParameter(urlParamsInfo.focus_region));
		// }


		// var button = new ymaps.control.Button({
		// 	data: {
		// 		// Зададим иконку для кнопки
		// 		image: 'images/button.jpg',
		// 		// Текст на кнопке.
		// 		content: 'Сохранитьwwwwwwwwwwwwwwwwwwwwwww',
		// 		// Текст всплывающей подсказки.
		// 		title: 'Нажмите для сохранения маршрута'
		// 	}
		// }, {
		// 	// Зададим опции для кнопки.
		// 	selectOnClick: false
		// });
		// map.controls.add(button, { top: 200, right: 500 });


		

		// var button = new ymaps.control.Button({
		// 	data: {
		// 		content: 'Red button',
		// 		title: 'Press the button'
		// 	},
		// 	options: {
		// 		layout: ymaps.templateLayoutFactory.createClass(
		// 			// Если кнопка не нажата, применяется CSS стиль 'myButton'.
		// 			// Если кнопка нажата, к ней применятся CSS-стили 'myButton' и 'myButtonSelected'.

		// 			"<div class='myButton {% if state.selected %}myButtonSelected{% endif %}' title='{{ data.title }}'>" +
		// 			"{{ data.content }}" +
		// 			"</div>"
		// 		),
		// 		// Чтобы другие элементы управления корректно позиционировались по горизонтали,
		// 		// нужно обязательно задать максимальную ширину для макета.
		// 		maxWidth: 150
		// 	}
		// });
		// map.controls.add(button, { float: 'left', floatIndex: 0 });

		// // Можно задать позиционирование относительно краев карты. В этом случае
		// // значение опции maxWidth не влияет на позиционирование
		// // элементов управления.
		// map.controls.add(button, { float: 'none', position: { left: '5px', top: '5px' } });
	});
}