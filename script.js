const userLocation = document.getElementById('userLocation');
const userAccess = document.getElementById('userAccess');
const val = document.getElementById('errorOutput1')
// const mapping = document.getElementById('map')


function renderData(data){
    console.log(data);
    document.getElementById("lat_ash1").innerHTML = data.coord.lat
    document.getElementById("lon_ash1").innerHTML = data.coord.lon
    document.getElementById("location_ash").innerHTML = data.name
    document.getElementById("lat_ash").innerHTML = data.coord.lat
    document.getElementById("lon_ash").innerHTML = data.coord.lon
    document.getElementById("time_ash").innerHTML = data.timezone
    document.getElementById("winds_ash").innerHTML = data.wind.speed
    document.getElementById("pres_ash").innerHTML = data.main.pressure
    document.getElementById("humi_ash").innerHTML = data.main.humidity
    document.getElementById("windd_ash").innerHTML = data.wind.deg
    document.getElementById("feels_like").innerHTML = data.main.feels_like
}

//for fetching and all
function submitData(userLocation) {

     console.log(userLocation);
     console.log(userAccess);
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.coords.latitude}&lon=${userLocation.coords.longitude}&appid=41f0381fedd924492178a2ae8c53edfd`
      fetch(url)
      .then((response) => response.json())
      .then((data) => renderData(data))
      .catch((error) => console.log(error))
}


//how to Gelocation

const successCallback = (position) => {
    submitData(position)
    console.log(position);
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);


//Google Map pic img thing
// let map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 18.5344, lng: 73.883 },
//     zoom: 8,
//   });
// }
// window.initMap = initMap;

//
// const successLock = (position) =>{
//   const {latitude, longitude} = position.coords;
//   fetch(`https://api.ipgeolocation.io/ipgeo?lat=${coords.latitude}&lon=${coords.longitude}apiKey=7a1b3b1e20894f2fb46dbab9a2fcc78f`)
//   .then(response = response.json())
//   .then(console.log);
// }