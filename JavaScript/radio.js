ymaps.ready(function () {

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

		if (enabled &&  selectedType != pickType) {
			ResetPlacemarks(pickRegion);
			pickType = selectedType;
			ShowPlacemarks(pickRegion);
		}
		else {
			return;
		}

		switch (selectedType) {
			case schoolType.school:
					console.log(schoolType.school);
				break;
			case schoolType.preSchool:
					console.log(schoolType.preSchool);
				break;
			case schoolType.special:
					console.log(schoolType.special);
				break;
			case schoolType.dop:
					console.log(schoolType.dop);
				break;
			case schoolType.regionSub:
					console.log(schoolType.regionSub);
				break;
			default:
				console.log(`err`);
		}
	}



	// 	if ($("#radio-preSchool input:checked").val() == "on") {
	// 		if (pick == 'Centralnyj') {
	// 			CentralnyjSchools.options.set('visible', true);
	// 		}
	// 		if (pick == 'Frunzenskij') {
	// 			FrunzenskijSchools.options.set('visible', true);
	// 		}
	// 		if (pick == 'Leninskij') {
	// 			LeninskijSchools.options.set('visible', true);
	// 		}
	// 		if (pick == 'Moskovskij') {
	// 			MoskovskijSchools.options.set('visible', true);
	// 		}
	// 		if (pick == 'Oktyabrskij') {
	// 			OktyabrskijSchools.options.set('visible', true);
	// 		}
	// 		if (pick == 'Partizanskij') {
	// 			PartizanskijSchools.options.set('visible', true);
	// 		}
	// 		if (pick == 'Pervomajskij') {
	// 			PervomajskijSchools.options.set('visible', true);
	// 		}
	// 		if (pick == 'Sovetskij') {
	// 			SovetskijSchools.options.set('visible', true);
	// 		}
	// 		if (pick == 'Zavodskoj') {
	// 			ZavodskojSchools.options.set('visible', true);
	// 		}
	// 	}
	// }


	//enable preSchool by default
	$("#radio-preSchool input").prop("checked", true);

	$("#radio-school input").on("click", function () {
		RadioBattonChecked(schoolType.school, $("#radio-school input:checked").val() == "on" ? true : false)
	});
	$("#radio-preSchool input").on("click", function () { 
		RadioBattonChecked(schoolType.preSchool, $("#radio-preSchool input:checked").val() == "on" ? true : false) 
	});
	$("#radio-special input").on("click", function () { 
		RadioBattonChecked(schoolType.special, $("#radio-special input:checked").val() == "on" ? true : false) 
	});
	$("#radio-dop input").on("click", function () { 
		RadioBattonChecked(schoolType.dop, $("#radio-dop input:checked").val() == "on" ? true : false)
	});
	$("#radio-regionSub input").on("click", function () { 
		RadioBattonChecked(schoolType.regionSub, $("#radio-regionSub input:checked").val() == "on" ? true : false) 
	});

});
