/*global $ navigator lat lon position*/

$(document).ready(function(){
        
    if (navigator.geolocation){//https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
        navigator.geolocation.getCurrentPosition(function(position){
        latLon(position);
        console.log("lat: " + position.coords.latitude);
        console.log(position.coords.longitude);
      });
    }   
    function latLon(position){
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
    
    // else {
    //         alert("Geolocation not available");
    // }
        $.ajax({
                url: 'https://api.openweathermap.org/data/2.5/weather?&units=imperial',
                method: "GET",
                dataType: "jsonp",
                data: {
                    lat: lat,
                    lon: lon,
                    apiKey: "654758d0ac9e9bd8020e1f2b2d11b75b"
                },
                success: function(data){
                    console.log(data);
                }
            });
    }
});

// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}