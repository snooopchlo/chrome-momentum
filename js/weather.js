const API_KEY = "37c6e94220e8f4af3c012e220df55ddb";

const iconImg = document.getElementById("weather-icon");

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#location");
      // const weatherIcon = document.querySelector("#weather-icon");
      const { description, icon } = data.weather[0];
      const { sunrise, sunset } = data.sys;
      const weather = document.querySelector("#weather-temp");

      city.innerText = data.name;
      const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      iconImg.src = iconUrl;
      // weatherIcon.innerText = `${data.weather[0].main}`;
      weather.innerText = `${data.main.temp}°C`;
    });
}

function onGeoError() {
  alert("can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
