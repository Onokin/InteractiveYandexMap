ymaps.ready(function () {
	// var radioGroup = new ymaps.control.RadioGroup({
    //     items: [
	// 		new ymaps.control.Button({ data: { content: 'Включить' } }, { selectedByDefault: true }),
    //         new ymaps.control.Button({ data: { content: 'Сохранить' } }), 
    //     ]
    // });

	function RadioResetPlacemarks() {
		globalPlacemarkResetSchools();
	}

	function RadioResetChildren() {
		globalPlacemarkResetChilderen();
	}

	function RadioBattonChecked(selectedType, enabled) {
		//RadioResetSchools();
		//RadioResetChildren();
		//RadioResetRsp();

		if (enabled && selectedType != pickType) {
			ResetPlacemarks(pickRegion);
			pickType = selectedType;
			ShowPlacemarks(pickRegion);
		}
		else {
			return;
		}

		// switch (selectedType) {
		// 	case schoolType.school:
		// 			console.log(schoolType.school);
		// 		break;
		// 	case schoolType.preSchool:
		// 			console.log(schoolType.preSchool);
		// 		break;
		// 	case schoolType.special:
		// 			console.log(schoolType.special);
		// 		break;
		// 	case schoolType.dop:
		// 			console.log(schoolType.dop);
		// 		break;
		// 	case schoolType.regionSub:
		// 			console.log(schoolType.regionSub);
		// 		break;
		// 	default:
		// 		console.log(`err`);
		// }
	}


	//enable preSchool by default
	$("#radio-preSchool input").prop("checked", true);

	$("#radio-school input").on("click", function () {
		RadioBattonChecked(schoolType.school.name, $("#radio-school input:checked").val() == "on" ? true : false)
	});
	$("#radio-preSchool input").on("click", function () { 
		RadioBattonChecked(schoolType.preSchool.name, $("#radio-preSchool input:checked").val() == "on" ? true : false) 
	});
	$("#radio-special input").on("click", function () { 
		RadioBattonChecked(schoolType.special.name, $("#radio-special input:checked").val() == "on" ? true : false) 
	});
	$("#radio-specialSchool input").on("click", function () { 
		RadioBattonChecked(schoolType.specialSchool.name, $("#radio-specialSchool input:checked").val() == "on" ? true : false) 
	});
	$("#radio-dopYouth input").on("click", function () { 
		RadioBattonChecked(schoolType.dopYouth.name, $("#radio-dopYouth input:checked").val() == "on" ? true : false)
	});
	$("#radio-dopAdult input").on("click", function () { 
		RadioBattonChecked(schoolType.dopAdult.name, $("#radio-dopAdult input:checked").val() == "on" ? true : false) 
	});
	

});
