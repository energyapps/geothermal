// Visit https://www.mapbox.com/mapbox.js/overview/ for documentation and examples
  var map = L.mapbox.map('map', 'energy.jlaen6p4', {
      detectRetina: true,
      zoomControl: false,
      gridControl: false, //turns off automatic tooltips ??
      scrollWheelZoom:false,
      minZoom: 3,
      maxZoom: 9
  }).setView([38.99, -98.40], 4);

map.addControl( L.control.zoom({position: 'topright'}) );

var class_current = 0;

(function ($) { 

$(function () {
        $('#alaska').click(function(e) {
            map.fitBounds([
            [71.3516, -188.90491],[51.3516, -129.986]
            ]);

        });
        $('#hawaii').click(function(e) {
            map.fitBounds([
            [22.2289, -154.8],[18.948, -159.764]
            ]);
            // selectstate();

        });
        $('#usa').click(function(e) {
            map.fitBounds([
            [42.461, -56.979],[32.536, -134.4]
            ]);
            // var e = null;
            // $('.legendz').removeClass('active')
            // p = 0;
            // onClickyhigh();
            // selectstate();
        });
    });
}(jQuery));  

var markers = new L.MarkerClusterGroup({
    maxClusterRadius:  45
});

 for (var i = 0; i < points.features.length; i++) {
  console.log('d')
        var a = points.features[i];
        // var title = a[2];
        var marker = L.marker(new L.LatLng(a.geometry.coordinates[1], a.geometry.coordinates[0]), {
            icon: L.mapbox.marker.icon({
              'marker-symbol': '', 
              'marker-color': 'D73619',
              'marker-size':'small'
            }),
            // title: 'SUP'
        });
        marker.bindPopup('<h1>' + points.features[i].properties.Name + '</h1><p>' + points.features[i].properties.Temp_C_ML + '</p>');
        markers.addLayer(marker);
    }
    map.addLayer(markers);




// data for info box

var info_data = [
"<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<p>",
"<p>consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<p>",
"<p>pizza party<p>"]
console.log(info_data[0])
// toggle and switch

(function ($) { 

  info_box = document.getElementById('info-box');

  $(document).ready(function() { 
    $('.under-map-button').click(function (e) {
      e.preventDefault();
      $('.under-map-button').removeClass('active');      
      $(this).addClass('active'); 
      $('#info-container').addClass('active');     
    });
    $('.position-1').click(function (e) {
      $('.info-bar').removeClass('active');
      $('.position-1').addClass('active');
      info_box.innerHTML = info_data[0]
    });
    $('.position-2').click(function (e) {
      $('.info-bar').removeClass('active');
      $('.position-2').addClass('active');
      info_box.innerHTML = info_data[1]      
    });
    $('.position-3').click(function (e) {
      $('.info-bar').removeClass('active');      
      $('.position-3').addClass('active');
      info_box.innerHTML = info_data[2]
    });

    //Close button clicked
    $('.close-overlay').click(function (e) {
      $('#info-container').removeClass('active');
      $('.info-bar').removeClass('active');
      $('.under-map-button').removeClass('active');
    });
  });   

}(jQuery));  

