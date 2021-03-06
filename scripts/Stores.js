var map;
var marker;
//prevent time form from refreshing the page
$('#dtime_form').submit(function(e){
  e.preventDefault(); 
});

// Initialize and add the map
function initMap() {
  // The location of Uluru
  var NU = { lat: 42.0556, lng: -87.6776 };
  var wholeFoods = { lat: 42.0477, lng: -87.6792 };
  var aldi = { lat: 42.0276, lng: -87.7046 };
  var tj = { lat: 42.0398, lng: -87.6800 };
  var jewel = { lat: 42.0394, lng: -87.6807 };

  // The map, centered at Uluru
  map = new google.maps.Map(
    document.getElementById('map'), { zoom: 12, center: NU });
  // The marker, positioned at Uluru
  marker = [];
  marker[0] = new google.maps.Marker({ position: wholeFoods, map: map, label: 'W' });
  marker[1] = new google.maps.Marker({ position: tj, map: map, label: 'T' });
  marker[2] = new google.maps.Marker({ position: jewel, map: map, label: 'J' });
  marker[3] = new google.maps.Marker({ position: aldi, map: map, label: 'A' });
}


var stime_query;

function init_stores() {
  console.log("Initializing store cards");

  //clear out elements in content div and re-render
  var node = document.querySelector('.row');
  while (node && node.firstChild) {
    node.removeChild(node.firstChild);
  }

  stime_query = stime_query || Infinity;

  for (var i = 0; i < stores.length; i++) {
    var t = document.querySelector("#scardtemplate");
    var r = stores[i];

    if (parseFloat(r.time) > stime_query) {
      marker[i].setMap(null);
      continue;
    }

    marker[i].setMap(map);
    t.content.querySelector('img').src = r.imgsrc;
    t.content.querySelector('.description').innerHTML = "<b>" + r.name + "</b><br />" + r.address + "<br />" + r.time + " minute drive";
    t.content.querySelector('a').href = r.link;

    var clone = document.importNode(t.content, true);
    document.querySelector(".cards > .row").appendChild(clone);
  }
  return false;

}

function ssearch() {
  stime_query = parseFloat(document.querySelector(".search-time").value) || Infinity;

  console.log(stime_query);
  init_stores();
  return false;
}
