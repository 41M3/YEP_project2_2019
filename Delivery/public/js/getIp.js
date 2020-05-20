var xmlHttp = new XMLHttpRequest();
xmlHttp.open( 'GET', 'http://localhost:8080/ip', false );
xmlHttp.send( null );

var div = document.getElementById('ip');
var text = document.createTextNode(xmlHttp.responseText);
div.appendChild(text);

$.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
  console.log(JSON.stringify(data, null, 2));
});