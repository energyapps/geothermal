// Visit https://www.mapbox.com/mapbox.js/overview/ for documentation and examples
  var map = L.mapbox.map('map', 'energy.jlaen6p4', {
      detectRetina: true,
      zoomControl: false,
      gridControl: false, //turns off automatic tooltips ??
      scrollWheelZoom:false,
      minZoom: 3,
      maxZoom: 12
  }).fitBounds([
            [42.461, -56.979],[32.536, -134.4]
            ]);

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
    maxClusterRadius:  30
});

 
  for (var i = 0; i <  geo_plants.features.length; i++) {
     var a = geo_plants.features[i];
     var marker = L.marker(new L.LatLng(a.geometry.coordinates[1], a.geometry.coordinates[0]), {

              icon: L.mapbox.marker.icon({              
                'marker-symbol': 'fire-station', 
                'marker-color': 'D73619',
                'marker-size':'medium'
              }),
              // title: 'SUP'
          });
      var myString = a.properties.Operationa;
      var year = myString.substr(0, myString.length-12);
      console.log(year);
          marker.bindPopup('<h2>' + geo_plants.features[i].properties.PlantName + '</h2><p>Year Opened: ' + year + '</p>');
          markers.addLayer(marker);
  }


 for (var i = 0; i < points.features.length; i++) {
  // console.log('d')
        var a = points.features[i];
        // var title = a[2];
        
        if (a.properties.Project_Ph == "Phase 1") {
          var marker = L.marker(new L.LatLng(a.geometry.coordinates[1], a.geometry.coordinates[0]), {

              icon: L.mapbox.marker.icon({              
                'marker-symbol': 'circle', 
                'marker-color': 'D73619',
                'marker-size':'small'
              }),
              // title: 'SUP'
          });

          marker.bindPopup('<h2>' + points.features[i].properties.Project + '</h2><p>' + points.features[i].properties.Project_Ph + '</p>');
          markers.addLayer(marker);
        }

        else if (a.properties.Project_Ph == "Phase 2") {
          var marker = L.marker(new L.LatLng(a.geometry.coordinates[1], a.geometry.coordinates[0]), {

              icon: L.mapbox.marker.icon({              
                'marker-symbol': 'triangle', 
                'marker-color': 'D73619',
                'marker-size':'small'
              }),
              // title: 'SUP'
          });

          marker.bindPopup('<h2>' + points.features[i].properties.Project + '</h2><p>' + points.features[i].properties.Project_Ph + '</p>');
          markers.addLayer(marker);
        }
        else if (a.properties.Project_Ph == "Phase 3") {
          var marker = L.marker(new L.LatLng(a.geometry.coordinates[1], a.geometry.coordinates[0]), {

              icon: L.mapbox.marker.icon({              
                'marker-symbol': 'square', 
                'marker-color': 'D73619',
                'marker-size':'small'
              }),
              // title: 'SUP'
          });

          marker.bindPopup('<h2>' + points.features[i].properties.Project + '</h2><p>' + points.features[i].properties.Project_Ph + '</p>');
          markers.addLayer(marker);
        }

        else if (a.properties.Project_Ph == "Phase 4") {
          var marker = L.marker(new L.LatLng(a.geometry.coordinates[1], a.geometry.coordinates[0]), {

              icon: L.mapbox.marker.icon({              
                'marker-symbol': 'star', 
                'marker-color': 'D73619',
                'marker-size':'small'
              }),
              // title: 'SUP'
          });

          marker.bindPopup('<h2>' + points.features[i].properties.Project + '</h2><p>' + points.features[i].properties.Project_Ph + '</p>');
          markers.addLayer(marker);
        };


    }
    map.addLayer(markers);


// data for info box

var info_data = [
"<div id='info-box'>"+
"        <div class='icon_box'>"+
"        <div class='icon_list'>"+
"          <div class='icon_list_item'><img src='http://a.tiles.mapbox.com/v3/marker/pin-s-circle+D73619@2x.png'></div>"+
"          <div class='icon_text'><p>Phase 1: Resource Procurement and Identification</p></div>"+
"        </div>"+
"        <div class='icon_list'>"+
"          <div class='icon_list_item'><img src='http://a.tiles.mapbox.com/v3/marker/pin-s-triangle+D73619@2x.png'></div>"+
"          <div class='icon_text'><p>Phase 2: Resource Exploration and Confirmation</p></div>"+
"        </div>"+
"        <div class='icon_list'>"+
"          <div class='icon_list_item'><img src='http://a.tiles.mapbox.com/v3/marker/pin-s-square+D73619@2x.png'></div>"+
"          <div class='icon_text'><p>Phase 3: Permitting and Initial Development</p></div>"+
"        </div>"+
"        <div class='icon_list'>"+
"          <div class='icon_list_item'><img src='http://a.tiles.mapbox.com/v3/marker/pin-s-star+D73619@2x.png'></div>"+
"          <div class='icon_text'><p>Phase 4: Resource Production and Power Plant Construction</p></div>"+
"        </div>"+
"        <div class='icon_list'>"+
"          <div class='icon_list_item'><img src='http://a.tiles.mapbox.com/v3/marker/pin-s-fire-station+D73619@2x.png'></div>"+
"          <div class='icon_text'><p>Existing Geothermal Plant </p></div>"+
"        </div>"+
"      </div>"+
"    </div>",

"<p>Information about developing geothermal projects is provided by the Geothermal Energy Association (GEA). GEA defined ‘Phases 1-4’ are shown while those defined as ‘Prospect’ or ‘N/A’ are not displayed. Some plant locations are approximations. Terms and definitions for the stages of geothermal project development can be found <a target='_blank' href='http://geo-energy.org/pdf/NewGeothermalTermsandDefinitions_January2011.pdf'>here</a>.</p>" +
"<p>Further information on the geothermal Heat Flow resource layer can be found <a target='_blank' href='http://www.smu.edu/News/2011/geothermal-24oct2011'>here</a> and is a result of a grant funded by Google.org in collaboration with the Southern Methodist University Geothermal Laboratory.</p>",

"<p>Heat flow refers to the movement of heat from the Earth’s interior to its surface. The majority of this heat or energy is a result of both the cooling of the Earth’s core and radioactive heat generation. Radioactive heat generation takes place in the upper 40 km of the crust and is the result of concentrations of naturally occurring elements such as thorium, potassium, and uranium. </p>" +
"<p>Heat flow is calculated by measuring the change in temperature from the surface of the Earth to a distance into the crust. The gradient is then multiplied by the thermal conductivity (how efficiently the rock transfers thermal energy) of the rock. </p>" +
"<p>Warmer values on the map represent high surface heat flow in milli watts (mW) per meter squared (m2), the standard unit of measure. Regional differences, such as the type of rock in the subsurface and recent tectonic events can all affect heat flow.</p>" +
"<p>For more geothermal and heat flow related data resources please visit the National Geothermal Data System (NGDS).</p>"

];
// console.log(info_data[0])
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

