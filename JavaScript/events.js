ymaps.ready(function() {
	
	$('#info-close').click(function() {
		$('#info').animate({right: '-1000'});
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

		globalPlacemarkReset();
			
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

function globalPlacemarkReset(){
	EventsResetSchoolsberezinskiy();
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