// Initialize and add the map
function initMap() {
  // The location of Uluru
  var NU = {lat: 42.0556, lng: -87.6776};
  var wholeFoods = {lat: 42.0477, lng: -87.6792};
  var aldi = {lat: 42.0276, lng: -87.7046};
  var tj = {lat: 42.0398, lng: -87.6800};
  var jewel = {lat: 42.0394, lng: -87.6807};

  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12, center: NU});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: wholeFoods, map: map, label: 'W'});
  var marker1 = new google.maps.Marker({position: aldi, map: map, label: 'A'});
  var marker2 = new google.maps.Marker({position: tj, map: map, label: 'T'});
  var marker3 = new google.maps.Marker({position: jewel, map: map, label: 'J'});
}