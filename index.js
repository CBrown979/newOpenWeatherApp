  /*global $ */  
  /*global navigator*/
  /*global position*/
  /*global apiKey*/
  
//Need lat and lon for api url path
// navigator.geolocation.getCurrentPosition(function(position) {
//   do_something(position.coords.latitude, position.coords.longitude);
// }); The above example will cause the do_something() function to execute when the location is obtained.

$(document).ready(function(){
    if (navigator.geolocation){//https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
        navigator.geolocation.getCurrentPosition(function(position){
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
        });
    // } else {
    //     alert("Geolocation not available");
    // }
    
    function nameNUseCoordinates(){
        var lat=position.coords.latitude;
        var lon=position.coords.longitude;
        //use api call & key to get the data
        $.ajax({
            url: "https://api.openweathermap.org/data/2/5/weather?units=imperial",
            data: {lat: lat, lon: lon, apiKey: "ApiKey"},
            format: "jsonp",
            success: function(data){
                console.log(data)
                var showWeather = show(data);
                $("#details").innerHTML=showWeather;
            }
        });
    }
    function show(data){
        //var city=data.name;
        var tempF=data.main.temp.toFixed(0);
        //var tempC=(tempF-32 * (5/9)).toFixed(0)
        var descript=data.weather[0].description;
        $("#insertCity").innerHTML=city;
        $("#insertTempF").innerHTML=tempF;
        $("#insertTempC").innerHTML=tempC;
        $("#insertDescript").innerHTML=descript;
        var iconPic=data.weather[0].icon;
        switch(iconPic){
            case "01d":
                $("#iconic").innerHTML="http://ak8.picdn.net/shutterstock/videos/723328/thumb/1.jpg";
                break;
            
        }
    };

    



    // var weatherSummary = {
    //     city: "",
    //     tempF: "",
    //     tempC: "",
    //     descript: ""
    // }
//     function getWeather(){
//         var lat=position.coords.latitude;
//         var lon=position.coords.longitude;
//         $.ajax({
//             method: "GET",
//             url: "https://api.openweathermap.org/data/2.5/weather?units=imperial",
//             data: {lat: lat, lon: lon, apiKey: apiKey},
//             format: "JSON",
//             success: function(data){
//                 console.log(data);
//                 city=data.name;
//                 tempF=data.main.temp.toFixed(0);
//                 // tempC=(that.tempF-32 * (5/9)).toFixed(0);
//                 descript=data.weather.description;
//                 // this.displaySummary();
//             }
//         });
//     }
    