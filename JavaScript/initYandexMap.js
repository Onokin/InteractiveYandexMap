
function divideRegion(regData, regName) {
	placemarks[regName] = {};
	console.log(regName);
	console.log(regionInfo[regName]);
	if (regionInfo[regName].LoadPlacemarks){ //check on custom loading method
		regionInfo[regName].LoadPlacemarks();
		return;
	}
	Object.keys(schoolType).map(key => schoolType[key]).forEach(type => {
		placemarks[regName][type] = [];
		if (!regData) { return; }
		if (regData[type]) {
			regData[type].forEach(el => {
				auxPlacemark = new ymaps.Placemark([el.Longitude, el.Latitude],
					{
						hintContent: el.name,
						balloonContent: `<a href="${el.WebLink}" target="_blank">${el.name}</a>`
					}, {
					iconLayout: 'default#image',
					iconImageHref: 'icons/logo.png',
					iconImageSize: [30, 30],
					iconImageOffset: [-5, -38],
					visible: false,
				});
				placemarks[regName][type].push(auxPlacemark);
				map.geoObjects.add(auxPlacemark);
			});
		}
	});
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

		// Создадим элемент управления поиск
		var searchControl = new ymaps.control.SearchControl({
			options: {
				provider: 'yandex#search'
			}
		});

		// Добавим поиск на карту
		map.controls.add(searchControl);

		map.controls.add(listBox, { float: 'left' });

		//Инициализация полигонов 
		Object.keys(polygons).map(key => polygons[key]).forEach(polygon => {
			map.geoObjects.add(polygon);
		});

		//Инициализация меток
		Object.keys(regionInfo).map(key => regionInfo[key]).forEach(regObj => {
			divideRegion(data[regObj.name], regObj.name);
		});

		//console.log(urlReadParameter(urlParamsInfo.focus_region));
		let reg = urlReadParameter(urlParamsInfo.focus_region);
		if (reg){
			FocusOnRegion(regionInfo[reg]);
		}
		// if (urlReadParameter(urlParamsInfo.focus_region) != null){
		// 	FocusOnRegion(urlReadParameter(urlParamsInfo.focus_region));
		// }
		console.log(placemarks);
	});
}