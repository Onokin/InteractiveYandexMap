ymaps.ready(function () {

	$('#info-close').click(function () {
		$('#info').animate({ right: '-1000' });
		ResetFocus();
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

function FocusOnRegion(region) {
	console.log('FocusOnRegion' + region.name);
	if (pickRegion != region.name) {
		ResetFocus();
		pickRegion = region.name;
		polygons[region.name].options.set({ strokeColor: '#666633', fillOpacity: 0.2, strokeStyle: 'solid' });
		map.setCenter(region.center, region.zoom, { duration: 400 }).then(function () {
			ShowPlacemarks();
		}, this);
		$(`#info .${region.name}`).css("display", "block");
		$("#info").animate({ right: '0' });
	}
}

function ResetFocus() {
	if (pickRegion) {
		globalResetInfo();
		ResetPlacemarks(pickRegion);
		ResetPolygon(pickRegion);
		pickRegion = '';
	}
}

function ShowPlacemarks() {
	console.log('showPlacemarks');
	console.log(pickRegion + pickType);
	if (pickRegion) {
		placemarks[pickRegion][pickType].forEach(element => {
			element.options.set('visible', true);
		});

	}
}

function ResetPlacemarks(region) {
	console.log('resetPlacemarks' + region);
	if (pickRegion) {
		// if (pickRegion === region) {
		// 	pickRegion = '';
		// }
		placemarks[region][pickType].forEach(element => {
			element.options.set('visible', false);
		});

	}
}


function ResetPolygon(region) {
	console.log('resetPoly' + region);
	polygons[region].options.set({ strokeColor: '#CC0033', fillOpacity: 0, strokeStyle: 'shortdash' });

}