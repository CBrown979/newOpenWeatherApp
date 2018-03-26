/*global $ navigator*/

$(document).ready(function(){
        
    if (navigator.geolocation){//https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
        navigator.geolocation.getCurrentPosition(function(position){
        latLon(position);
        console.log("lat: " + position.coords.latitude);
        console.log("lon: " + position.coords.longitude);
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
                    // console.log(data.name);
                    // console.log(data.main.temp);
                    var showMe = show(data);
                }
            });
    }
    
    function show(data){
        var date = new Date();
        var city = data.name;
        // var temp = data.main.temp;
        var fahTemp = data.main.temp;
        fahTemp=fahTemp.toFixed(1);
        var celTemp = (fahTemp - 32)*5/9;
        celTemp = celTemp.toFixed(0);
        
        //Putting data in my HTML
        $('#date').html("<p>" + date + "</p>");
        $('#city').html("<h2>" + city + "</h2>");
        
        //Temps
        $('.change1').html("<h2>" + fahTemp + "&#8457" + "<h2>");
        $('.change2').html("<h2>" + celTemp + "&#8451" + "<h2>");
        
        //Toggling -- http://api.jquery.com/toggle/
    	$("#switchIt").click(function() {
    		$(".change1").toggle();
    		$("#switchIt") + $(".change2").toggle();
    	});
        
        
        
        //Icon Images
        //$('myObject').css('background-image', 'url(' + imageUrl + ')');
        
        //clear sky
        if(data.weather[0].icon === "01d" || "01n"){
            $('body').css('background-image', 'url("https://images.pexels.com/photos/108941/pexels-photo-108941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")');
        }
        
    }
});

// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}