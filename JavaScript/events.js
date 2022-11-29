ymaps.ready(function () {

	$('#info-close').click(function () {
		$('#info').animate({ right: '-1000' });
		$('#info .berezinskiy').css("display", "none");
		$('#info .borisovskiy').css("display", "none");
		$('#info .vileyskiy').css("display", "none");
		$('#info .volozhinskiy').css("display", "none");
		$('#info .dzerzhinskiy').css("display", "none");
		$('#info .kletskiy').css("display", "none");
		$('#info .kopilskiy').css("display", "none");
		$('#info .krupski').css("display", "none");
		$('#info .logoyski').css("display", "none");
		$('#info .lubanski').css("display", "none");
		$('#info .minskiy').css("display", "none");
		$('#info .molodzechnenskiy').css("display", "none");
		$('#info .myadzelskiy').css("display", "none");
		$('#info .nesvizhskiy').css("display", "none");
		$('#info .pukhovichskiy').css("display", "none");
		$('#info .slutskiy').css("display", "none");
		$('#info .smolevichskiy').css("display", "none");
		$('#info .soligorskiy').css("display", "none");
		$('#info .starodorozhskiy').css("display", "none");
		$('#info .stolbcovskiy').css("display", "none");
		$('#info .uzdenskiy').css("display", "none");
		$('#info .chervenskiy').css("display", "none");
		$('#info .jodino').css("display", "none");
		$('#info .minsk').css("display", "none");

		//globalPlacemarkReset();

		ResetPlacemarks(pickRegion);
	});

});

function globalResetInfo() {
	$('#info .berezinskiy').css("display", "none");
	$('#info .borisovskiy').css("display", "none");
	$('#info .vileyskiy').css("display", "none");
	$('#info .volozhinskiy').css("display", "none");
	$('#info .dzerzhinskiy').css("display", "none");
	$('#info .kletskiy').css("display", "none");
	$('#info .kopilskiy').css("display", "none");
	$('#info .krupski').css("display", "none");
	$('#info .logoyski').css("display", "none");
	$('#info .lubanski').css("display", "none");
	$('#info .minskiy').css("display", "none");
	$('#info .molodzechnenskiy').css("display", "none");
	$('#info .myadzelskiy').css("display", "none");
	$('#info .nesvizhskiy').css("display", "none");
	$('#info .pukhovichskiy').css("display", "none");
	$('#info .slutskiy').css("display", "none");
	$('#info .smolevichskiy').css("display", "none");
	$('#info .soligorskiy').css("display", "none");
	$('#info .starodorozhskiy').css("display", "none");
	$('#info .stolbcovskiy').css("display", "none");
	$('#info .uzdenskiy').css("display", "none");
	$('#info .chervenskiy').css("display", "none");
	$('#info .jodino').css("display", "none");
	$('#info .minsk').css("display", "none");
}

function globalPlacemarkReset() {
	pickRegion = '';
	Resetberezinskiy();
	ResetPlacemarks(regionName.berezinskiy);
	// EventsResetSchoolschervenskiy();
	// EventsResetSchoolsborisovsky();
	// EventsResetSchoolsdzerzhinskiy();
	// EventsResetSchoolsjodino();
	// EventsResetSchoolskletskiy();
	// EventsResetSchoolskopilskiy();
	// EventsResetSchoolskrupski();
	// EventsResetSchoolsminskiy();
	// EventsResetSchoolslubanski();
	// EventsResetSchoolslogoyski();
	// EventsResetSchoolsmolodzechnenskiy();
	// EventsResetSchoolsmyadzelskiy();
	// EventsResetSchoolsnesvizhskiy();
	// EventsResetSchoolspukhovichskiy();
	// EventsResetSchoolsslutskiy();
	// EventsResetSchoolssmolevichskiy();
	// EventsResetSchoolssoligorskiy();
	// EventsResetSchoolsstarodorozhskiy();
	// EventsResetSchoolsstolbcovskiy();
	// EventsResetSchoolsuzdenskiy();
	// EventsResetSchoolsvileyskiy();
	// EventsResetSchoolsvolozhinskiy();
}

function ShowPlacemarks(region) {
	console.log('showPlacemarks' + region);
	if (pickRegion != region) {
		//globalPlacemarkReset();
		globalResetInfo();
		pickRegion = region;
		//map.setCenter([27.61881, 53.89965], 12, { duration: 500	});
		polygons[region].options.set({ strokeColor: '#666633', fillOpacity: 0.2, strokeStyle: 'solid' });
		map.setCenter([29.072636, 53.834761], 10, { duration: 400 }).then(function () {
			placemarks[pickRegion][pickType].forEach(element => {
				element.options.set('visible', true);
			});
		}, this);
		$(`#info .${region}`).css("display", "block");
		$("#info").animate({ right: '0' });
	}
}

function ResetPlacemarks(region) {
	console.log('resetPlacemarks' + region);
	if (pickRegion === region) {
		pickRegion = '';
	}

	placemarks[region][pickType].forEach(element => {
		element.options.set('visible', false);
	});
	ResetPolygon(region);
}


function ResetPolygon(region) {
	console.log('resetPoly' + region);
	polygons[region].options.set({ strokeColor: '#CC0033', fillOpacity: 0, strokeStyle: 'shortdash' });
}