import { GET } from "./http.js";

export const cE = (element) => document.createElement(element);
export const qS = (element) => document.querySelector(element);

export const cityListGen = (city) => {
  const optionEl = cE("option");

  optionEl.setAttribute("value", city.value);
  optionEl.textContent = city.name;
  optionEl.className = "city";

  return optionEl;
};

export const weatherGen = (cityData) => {
  const today = new Date();
  const wrapperEl = cE("div");

  //   user info
  const userInfoEl = cE("div");
  const cityInfoEl = cE("div");
  const locationIconEl = cE("div");
  const locationImgEl = cE("img");
  const cityNameEl = cE("div");
  const cityNamePEl = cE("p");
  const dateInfoEl = cE("div");
  const clockIconEl = cE("div");
  const clockImgEl = cE("img");
  const dateEl = cE("div");
  const datePEl = cE("p");

  wrapperEl.className = "widgetWrapper";
  userInfoEl.className = "userInfo";
  cityInfoEl.className = "cityInfo";
  locationIconEl.className = "locationIcon";
  locationImgEl.src = "./assets/location-pin.svg";
  locationImgEl.alt = "location";
  cityNameEl.className = "cityName";
  cityNamePEl.textContent = cityData.name;
  dateInfoEl.className = "dateInfo";
  clockIconEl.className = "clockIcon";
  clockImgEl.src = "./assets/clock.svg";
  clockImgEl.alt = "time";
  dateEl.className = "date";
  datePEl.textContent =
    today.getDate() +
    "/" +
    (parseInt(today.getMonth()) + 1) +
    "/" +
    today.getFullYear() +
    ", " +
    today.getHours() +
    ":" +
    today.getMinutes();

  locationIconEl.appendChild(locationImgEl);
  cityNameEl.appendChild(cityNamePEl);
  cityInfoEl.append(locationIconEl, cityNameEl);
  clockIconEl.appendChild(clockImgEl);
  dateEl.appendChild(datePEl);
  dateInfoEl.append(clockIconEl, dateEl);
  userInfoEl.append(cityInfoEl, dateInfoEl);

  // weather info
  const weatherInfoEl = cE("div");
  const weatherInfoMainEl = cE("div");
  const weatherTypeEl = cE("div");
  const weatherIconEl = cE("img");
  const weatherTypePEl = cE("p");
  const temperatureEl = cE("div");
  const temperatureMoreEl = cE("div");
  const minTempEl = cE("p");
  const maxTempEl = cE("p");
  const feelsLikeEl = cE("p");
  const weatherMoreEl = cE("div");
  const humidityEl = cE("p");
  const windEl = cE("p");

  weatherInfoEl.className = "weatherInfo";
  weatherInfoMainEl.className = "weatherInfo__main";
  weatherTypeEl.className = "weatherType";
  weatherIconEl.src = "./assets/sunrise.svg";
  weatherIconEl.alt = "PLACEHOLDER";
  weatherTypePEl.textContent = cityData.weather[0].description;
  temperatureEl.className = "temperature";
  temperatureEl.textContent = parseInt(cityData.main.temp) + "°C";
  temperatureMoreEl.className = "temperature__more";
  minTempEl.className = "temperature-min";
  minTempEl.textContent = "Min: " + parseInt(cityData.main.temp_min) + "°C";
  maxTempEl.className = "temperature-max";
  maxTempEl.textContent = "Max: " + parseInt(cityData.main.temp_max) + "°C";
  feelsLikeEl.className = "temperature-feelsLike";
  feelsLikeEl.textContent =
    "Feels like: " + parseInt(cityData.main.feels_like) + "°C";
  weatherMoreEl.className = "weatherInfo__more";
  humidityEl.className = "humidity";
  humidityEl.textContent =
    "Humidity: " + parseInt(cityData.main.humidity) + "%";
  windEl.className = "wind";
  windEl.textContent = "Wind: " + cityData.wind.speed + " km/h";

  weatherTypeEl.append(weatherIconEl, weatherTypePEl);
  temperatureMoreEl.append(minTempEl, maxTempEl, feelsLikeEl);
  weatherInfoMainEl.append(weatherTypeEl, temperatureEl, temperatureMoreEl);
  weatherMoreEl.append(humidityEl, windEl);
  weatherInfoEl.append(weatherInfoMainEl, weatherMoreEl);

  // sun info
  const sunInfoEl = cE("div");
  const sunriseEl = cE("div");
  const sunriseIconEl = cE("img");
  const sunriseTimeEl = cE("p");
  const sunsetEl = cE("div");
  const sunsetIconEl = cE("img");
  const sunsetTimeEl = cE("p");
  const barEl = cE("hr");

  sunInfoEl.className = "sunInfo";
  sunriseEl.className = "sunrise";
  sunriseIconEl.src = "./assets/sunrise.svg";
  sunriseIconEl.alt = "sunrise";
  sunriseTimeEl.className = "sunriseTime";
  sunriseTimeEl.textContent = "PLACEHOLDER";
  sunsetEl.className = "sunset";
  sunsetIconEl.src = "./assets/sunset.svg";
  sunsetIconEl.alt = "sunset";
  sunsetTimeEl.className = "sunsetTime";
  sunsetTimeEl.textContent = "PLACEHOLDER";

  sunriseEl.append(sunriseIconEl, sunriseTimeEl);
  sunsetEl.append(sunsetIconEl, sunsetTimeEl);

  sunInfoEl.append(sunriseEl, barEl, sunsetEl);

  wrapperEl.append(userInfoEl, weatherInfoEl, sunInfoEl);

  return wrapperEl;
};

qS(".page").removeChild(qS(".placeholder"));

GET("Villacidro").then((data) => qS(".page").append(weatherGen(data)));
