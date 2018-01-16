/*global $ navigator APIKEY*/

$(document).ready(function(){
        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial' + "&APPID=" + APIKEY,
            type: "GET",
            dataType: "jsonp",
            success: function(data){
                console.log(data);
            }
        });
        console.log("end of ajax");
        
        if (navigator.geolocation){//https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
            navigator.geolocation.getCurrentPosition(function(position){
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            console.log(lat, lon);
        });
    }   else {
            alert("Geolocation not available");
    }
        
});
