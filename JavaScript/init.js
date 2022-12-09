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


loadScript('https://cdn.rooborisov.by/scripts/borisov_point.js', 'text/javascript');
loadScript('javascript/schoolType.js', 'text/javascript');
loadScript('javascript/regionName.js', 'text/javascript');
loadScript('javascript/events.js', 'text/javascript');
loadScript('javascript/jsonHandler.js', 'text/javascript');
loadScript('javascript/radio.js', 'text/javascript');
loadScript('javascript/listbox.js', 'text/javascript');
loadScript('javascript/urlHandler.js', 'text/javascript');
loadScript('javascript/regions/berezinskiy_region.js', 'text/javascript');
loadScript('javascript/regions/borisovskiy_region.js', 'text/javascript');
loadScript('javascript/regions/chervenskiy_region.js', 'text/javascript');
loadScript('javascript/regions/dzerzhinskiy_region.js', 'text/javascript');
loadScript('javascript/regions/jodino_region.js', 'text/javascript');
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
loadScript('javascript/regions/oblast.js', 'text/javascript');
loadScript('javascript/regions/minsk.js', 'text/javascript');
loadScript('javascript/initYandexMap.js', 'text/javascript').onload = function () {
  loadJSON(function (response) {
    data = JSON.parse(response);
    initMap();
  });
};

