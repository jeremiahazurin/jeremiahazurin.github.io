<html>
<head>
<script>
var jeremys_2016_travels;

var mexico_latlng = new google.maps.LatLng(21.170960, -86.852670);
var indonesia_latlng = new google.maps.LatLng(-5.109547, 106.192488);
var singapore_latlng = new google.maps.LatLng(1.375747, 103.991874);
var pittsburgh_latlng = new google.maps.LatLng(40.449187, -79.960835);
var spain_latlng = new google.maps.LatLng(41.505936, 2.143272);
var saudi_latlng = new google.maps.LatLng(26.493800, 50.065329);
var nh_latlng = new google.maps.LatLng(38.781622, -77.016784);

function initialize() {
  var mapOptions = {
    zoom: 1,
    center: mexico_latlng
  };
  jeremys_2016_travels = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

  var mexico_info = "<strong>Cancún, Mexico</strong><br/>" +
    "Spring Break!";

  var mexico_infowindow = new google.maps.InfoWindow({
    content: mexico_info
  });

  var mexico_marker = new google.maps.Marker({
    position: mexico_latlng,
    map: jeremys_2016_travels,
    title: 'Spring Break in Cancún, Mexico'
  });

  google.maps.event.addListener(mexico_marker, 'click', function() {
    mexico_infowindow.open(jeremys_2016_travels, mexico_marker);
  });
  
  var indonesia_info = "<strong>Bantam, Indonesia</strong><br/>" +
    "Vina's Wedding!";

  var indonesia_infowindow = new google.maps.InfoWindow({
    content: indonesia_info
  });

  var indonesia_marker = new google.maps.Marker({
    position: indonesia_latlng,
    map: jeremys_2016_travels,
    title: 'Indonesia'
  });

  google.maps.event.addListener(indonesia_marker, 'click', function() {
    indonesia_infowindow.open(jeremys_2016_travels, indonesia_marker);
  });

  var singapore_info = "<strong>Singapore, singapore</strong><br/>" +
    "Touring with some of my friends from my gap years!";

  var singapore_infowindow = new google.maps.InfoWindow({
    content: singapore_info
  });

  var singapore_marker = new google.maps.Marker({
    position: singapore_latlng,
    map: jeremys_2016_travels,
    title: 'Singapore'
  });

  google.maps.event.addListener(singapore_marker, 'click', function() {
    singapore_infowindow.open(jeremys_2016_travels, singapore_marker);
  });

  var pittsburgh_info = "<strong>Pittsburgh, Pennsylvania</strong><br/>" +
    "Information Science Research Project @ Pitt/CMU";

  var pittsburgh_infowindow = new google.maps.InfoWindow({
    content: pittsburgh_info
  });

  var pittsburgh_marker = new google.maps.Marker({
    position: pittsburgh_latlng,
    map: jeremys_2016_travels,
    title: 'Pittsburgh, PA'
  });

  google.maps.event.addListener(pittsburgh_marker, 'click', function() {
    pittsburgh_infowindow.open(jeremys_2016_travels, pittsburgh_marker);
  });

  var spain_info = "<strong>Barcelona, Spain</strong><br/>" +
    "Family Vacation for the Summer";

  var spain_infowindow = new google.maps.InfoWindow({
    content: spain_info
  });

  var spain_marker = new google.maps.Marker({
    position: spain_latlng,
    map: jeremys_2016_travels,
    title: 'Barcelona, Spain'
  });

  google.maps.event.addListener(spain_marker, 'click', function() {
    spain_infowindow.open(jeremys_2016_travels, spain_marker);
  });

  var saudi_info = "<strong>Dhahran, Saudi Arabia</strong><br/>" +
    "My internship employer brought me to Saudi Arabia with the US Mission to Saudi Arabia at the State Department";

  var saudi_infowindow = new google.maps.InfoWindow({
    content: saudi_info
  });

  var saudi_marker = new google.maps.Marker({
    position: saudi_latlng,
    map: jeremys_2016_travels,
    title: 'Dhahran, Saudi Arabia'
  });

  google.maps.event.addListener(saudi_marker, 'click', function() {
    saudi_infowindow.open(jeremys_2016_travels, saudi_marker);
  });
  
  var nh_info = "<strong>National Harbor, DC</strong><br/>" +
    "Home: National Harbor, DC";

  var nh_infowindow = new google.maps.InfoWindow({
    content: nh_info
  });

  var nh_marker = new google.maps.Marker({
    position: nh_latlng,
    map: jeremys_2016_travels,
    title: 'National Harbor'
  });

  google.maps.event.addListener(nh_marker, 'click', function() {
    nh_infowindow.open(jeremys_2016_travels, nh_marker);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
</script>
</head>
<style>
html,body,#map-canvas {
    height: 100%;
    margin: 0px;
    padding: 0px
}
</style>

<body>
<h1>My Travels in 2016</h1>
<div id="map-canvas"></div>

</body>
</html>
