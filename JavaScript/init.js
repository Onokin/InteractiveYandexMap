pickRegion = '';
pickType = '';


function loadScript(url)
{    
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
	return script;
}



loadScript('javascript/events.js');
loadScript('javascript/radio.js');
loadScript('javascript/listbox.js');
//loadScript('javascript/resetPlacemarks.js');
//loadScript('javascript/minsk.js');
loadScript('javascript/regions/berezinskiy_region.js');
loadScript('javascript/initYandexMap.js').onload = function() {
	initMap();
  };

//   if(script.readyState) {  // only required for IE <9
//     script.onreadystatechange = function() {
//       if ( script.readyState === "loaded" || script.readyState === "complete" ) {
//         script.onreadystatechange = null;
//         callback();
//       }
//     };
//   }


/* <script src="javascript/berezinskiy_region.js" type="text/javascript"></script>
<script src="borisovskiy_region.js" type="text/javascript"></script>
<script src="vileyskiy_region.js" type="text/javascript"></script>
<script src="volozhinskiy_region.js" type="text/javascript"></script>
<script src="dzerzhinskiy_region.js" type="text/javascript"></script>
<script src="kletskiy_region.js" type="text/javascript"></script>
<script src="kopilskiy_region.js" type="text/javascript"></script>
<script src="krupski_region.js" type="text/javascript"></script>
<script src="logoyski_region.js" type="text/javascript"></script>
<script src="lubanski_region.js" type="text/javascript"></script>
<script src="minskiy_region.js" type="text/javascript"></script>
<script src="molodzechnenskiy_region.js" type="text/javascript"></script>
<script src="myadzelskiy_region.js" type="text/javascript"></script>
<script src="nesvizhskiy_region.js" type="text/javascript"></script>
<script src="pukhovichskiy_region.js" type="text/javascript"></script>
<script src="slutskiy_region.js" type="text/javascript"></script>
<script src="smolevichskiy_region.js" type="text/javascript"></script>
<script src="soligorskiy_region.js" type="text/javascript"></script>
<script src="starodorozhskiy_region.js" type="text/javascript"></script>
<script src="stolbcovskiy_region.js" type="text/javascript"></script>
<script src="uzdenskiy_region.js" type="text/javascript"></script>
<script src="chervenskiy_region.js" type="text/javascript"></script>
<script src="jodino_region.js" type="text/javascript"></script>
<script src="minsk.js" type="text/javascript"></script>
<script src="events.js" type="text/javascript"></script>
<script src="resetPlacemarks.js" type="text/javascript"></script>
<script src="listbox.js" type="text/javascript"></script>
<script src="radio.js" type="text/javascript"></script> */

