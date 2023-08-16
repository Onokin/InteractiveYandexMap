function formateDate(date){
	var day = '01';//date.setDate(1);//.getDate();
	//if (day < 10) day = '0' + day;
	var month = date.getMonth() + 1;
	if (month < 10) month = '0' + month;
	var year = date.getFullYear();
	return day + '.' + month + '.' + year;;
}
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
						balloonContent: `<a href="${el.UDOLink != "" ? el.UDOLink : el.MainLink}" target="_blank">${el.name}</a>`
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

		initButtons();

		let reg = urlReadParameter(urlParamsInfo.focus_region);
		if (reg) {
			FocusOnRegion(regionInfo[reg]);
		}

	});
}