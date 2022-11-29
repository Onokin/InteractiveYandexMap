pickRegion = '';
pickType = 'preSchool';
placemarks = {};
data = {};

function loadScript(url, type) {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = type;
  script.src = url;
  head.appendChild(script);
  return script;
}



loadScript('javascript/schoolType.js', 'text/javascript');
loadScript('javascript/regionName.js', 'text/javascript');
loadScript('javascript/events.js', 'text/javascript');
loadScript('javascript/jsonHandler.js', 'text/javascript');
loadScript('javascript/radio.js', 'text/javascript');
loadScript('javascript/listbox.js', 'text/javascript');
loadScript('javascript/regions/berezinskiy_region.js', 'text/javascript');
loadScript('javascript/regions/borisovskiy_region.js', 'text/javascript');
loadScript('javascript/regions/chervenskiy_region.js', 'text/javascript');
loadScript('javascript/regions/dzerzhinskiy_region.js', 'text/javascript');
loadScript('javascript/regions/kletskiy_region.js', 'text/javascript');
loadScript('javascript/regions/kopilskiy_region.js', 'text/javascript');
loadScript('javascript/regions/krupski_region.js', 'text/javascript');
loadScript('javascript/regions/logoyski_region.js', 'text/javascript');
loadScript('javascript/regions/lubanski_region.js', 'text/javascript');
loadScript('javascript/regions/minskiy_region.js', 'text/javascript');
loadScript('javascript/regions/molodzechnenskiy_region.js', 'text/javascript');
loadScript('javascript/regions/myadzelskiy_region.js', 'text/javascript');
loadScript('javascript/regions/nesvizhskiy_region.js', 'text/javascript');
loadScript('javascript/regions/pukhovichskiy_region.js', 'text/javascript');
loadScript('javascript/regions/slutskiy_region.js', 'text/javascript');
loadScript('javascript/regions/smolevichskiy_region.js', 'text/javascript');
loadScript('javascript/regions/soligorskiy_region.js', 'text/javascript');
loadScript('javascript/regions/starodorozhskiy_region.js', 'text/javascript');
loadScript('javascript/regions/stolbcovskiy_region.js', 'text/javascript');
loadScript('javascript/regions/uzdenskiy_region.js', 'text/javascript');
loadScript('javascript/regions/vileyskiy_region.js', 'text/javascript');
loadScript('javascript/regions/volozhinskiy_region.js', 'text/javascript');
loadScript('javascript/regions/minsk.js', 'text/javascript');
loadScript('javascript/initYandexMap.js', 'text/javascript').onload = function () {
  loadJSON(function (response) {
    data = JSON.parse(response);
    console.log(polygons);
    console.log(data);
    initMap();
    console.log(placemarks);
  });
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

