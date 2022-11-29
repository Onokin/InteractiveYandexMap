ymaps.ready(function () {

	function RadioResetSchools() {
		globalPlacemarkResetSchools();
	}

	function RadioResetChildren() {
		globalPlacemarkResetChilderen();
	}

	function RadioBattonChecked(selectedType) {
		//RadioResetSchools();
		//RadioResetChildren();
		//RadioResetRsp();

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

	$("#radio-school input").on("click", function () { RadioBattonChecked(schoolType.school) });
	$("#radio-preSchool input").on("click", function () { RadioBattonChecked(schoolType.preSchool) });
	$("#radio-special input").on("click", function () { RadioBattonChecked(schoolType.special) });
	$("#radio-dop input").on("click", function () { RadioBattonChecked(schoolType.dop) });
	$("#radio-regionSub input").on("click", function () { RadioBattonChecked(schoolType.regionSub)});

});
