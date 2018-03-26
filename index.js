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
        
        var details = data.weather[0].description;
        var humidity = data.main.humidity;
        var wind = data.wind.speed;
        wind = wind.toFixed(0);
        
        //Putting data in my HTML
        $('#date').html("<p>" + date + "</p>");
        $('#city').html("<h2>" + city + "</h2>");
        
        //Temps
        $('.change1').html("<h2>" + "is " + fahTemp + "&#8457" + "<h2>");
        $('.change2').html("<h2>" + "is " + celTemp + "&#8451" + "<h2>");
        
        //Toggling -- http://api.jquery.com/toggle/
    	$("#switchIt").click(function() {
    		$(".change1").toggle();
    		$("#switchIt") + $(".change2").toggle();
    	});
        
        //Weather Description
        $('#details').html("<h3>" + "with " + details + "</h3>");
        $('#extras').html("<p>" + "Outside Feel: Wind is " + wind + "MPH"+ " and Humidity is " + humidity + "%" + "</p>");
        
        
        //Icon Images
        //$('myObject').css('background-image', 'url(' + imageUrl + ')');
        
        //clear sky
        if(data.weather[0].icon === "01d" || "01n"){
            $('body').css('background-image', 'url("https://images.pexels.com/photos/108941/pexels-photo-108941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")');
        }
        //few clouds
        else if(data.weather[0].icon === "02d" || "02n"){
            $('body').css('background-image', 'url("https://images.pexels.com/photos/125457/pexels-photo-125457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")');
        }
        //scattered clouds
        else if(data.weather[0].icon === "03d" || "03n"){
            $('body').css('background-image', 'url(https://images.pexels.com/photos/314726/pexels-photo-314726.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)');
        }
        //broken clouds
        else if(data.weather[0].icon === "04d" || "04n"){
            $('body').css('background-image', 'url(https://images.pexels.com/photos/186980/pexels-photo-186980.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)');
        }
        //shower rain
        else if(data.weather[0].icon === "09d" || "09n"){
            $('body').css('background-image', 'url(https://images.pexels.com/photos/373481/pexels-photo-373481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)');
        }
        //rain
        else if(data.weather[0].icon === "10d" || "10n"){
            $('body').css('background-image', 'url(https://images.pexels.com/photos/110874/pexels-photo-110874.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)');
        }
        //thunderstorm
        else if(data.weather[0].icon === "11d" || "11n"){
            $('body').css('background-image', 'url(https://images.pexels.com/photos/67102/pexels-photo-67102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)');
        }
        //snow
        else if(data.weather[0].icon === "13d" || "13n"){
            $('body').css('background-image', 'url(https://images.pexels.com/photos/58098/pexels-photo-58098.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)');
        }
        //mist
        else if(data.weather[0].icon === "50d" || "50n"){
            $('body').css('background-image', 'url(https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)');
        }
    }
});

