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

  //   user info   //
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
  datePEl.textContent = today.toLocaleDateString([], {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  locationIconEl.appendChild(locationImgEl);
  cityNameEl.appendChild(cityNamePEl);
  cityInfoEl.append(locationIconEl, cityNameEl);
  clockIconEl.appendChild(clockImgEl);
  dateEl.appendChild(datePEl);
  dateInfoEl.append(clockIconEl, dateEl);
  userInfoEl.append(cityInfoEl, dateInfoEl);

  //   weather info   //
  const weatherInfoEl = cE("div");
  const weatherInfoMainEl = cE("div");
  const weatherTypeEl = cE("div");
  const weatherIconContainerEl = cE("div");
  const weatherIconEl = cE("img");
  const weatherTypePEl = cE("p");
  const temperatureEl = cE("div");
  const temperatureMoreEl = cE("div");
  const tempSeparatorEl = cE("p");
  const tempSeparator2El = cE("p");
  const minTempEl = cE("p");
  const maxTempEl = cE("p");
  const feelsLikeEl = cE("p");
  const weatherMoreEl = cE("div");
  const humidityWrapperEl = cE("div");
  const humidityIconEl = cE("div");
  const humidityImgEl = cE("img");
  const humidityEl = cE("p");
  const windWrapperEl = cE("div");
  const windIconEl = cE("div");
  const windImgEl = cE("img");
  const windEl = cE("p");

  weatherInfoEl.className = "weatherInfo";
  weatherInfoMainEl.className = "weatherInfo__main";
  weatherTypeEl.className = "weatherType";
  weatherIconContainerEl.className = "weatherIcon";
  weatherIconEl.src = `https://openweathermap.org/img/wn/${cityData.weather[0].icon}@4x.png`;
  weatherIconEl.alt = cityData.weather[0].description;
  weatherTypePEl.textContent =
    cityData.weather[0].description[0].toUpperCase() +
    cityData.weather[0].description.substring(1);
  temperatureEl.className = "temperature";
  temperatureEl.textContent = parseInt(cityData.main.temp) + "°C";
  temperatureMoreEl.className = "temperature__more";
  tempSeparatorEl.textContent = "|";
  tempSeparator2El.textContent = "|";
  minTempEl.className = "temperature-min";
  minTempEl.innerHTML = `Min: <br> ${parseInt(cityData.main.temp_min)}°C`;
  maxTempEl.className = "temperature-max";
  maxTempEl.innerHTML = `Max: <br> ${parseInt(cityData.main.temp_max)}°C`;
  feelsLikeEl.className = "temperature-feelsLike";
  feelsLikeEl.innerHTML = `Feels like: <br> ${parseInt(
    cityData.main.feels_like
  )}°C`;
  weatherMoreEl.className = "weatherInfo__more";
  humidityWrapperEl.className = "humidity";
  humidityIconEl.className = "humidityIcon";
  humidityImgEl.src = "./assets/humidity.svg";
  humidityImgEl.alt = "humidity";
  humidityEl.textContent = `Humidity: ${parseInt(cityData.main.humidity)}%`;
  windWrapperEl.className = "wind";
  windIconEl.className = "windIcon";
  windImgEl.src = "./assets/wind.svg";
  windImgEl.alt = "wind";
  windEl.textContent = `Wind: ${parseFloat(
    (cityData.wind.speed * 3.6).toFixed(2)
  )} km/h`;

  weatherIconContainerEl.appendChild(weatherIconEl);
  weatherTypeEl.append(weatherIconContainerEl, weatherTypePEl);
  temperatureMoreEl.append(
    minTempEl,
    tempSeparatorEl,
    maxTempEl,
    tempSeparator2El,
    feelsLikeEl
  );
  weatherInfoMainEl.append(weatherTypeEl, temperatureEl, temperatureMoreEl);
  humidityIconEl.appendChild(humidityImgEl);
  humidityWrapperEl.append(humidityIconEl, humidityEl);
  windIconEl.appendChild(windImgEl);
  windWrapperEl.append(windIconEl, windEl);
  weatherMoreEl.append(humidityWrapperEl, windWrapperEl);
  weatherInfoEl.append(weatherInfoMainEl, weatherMoreEl);

  //   sun info   //
  const sunInfoEl = cE("div");
  const sunriseEl = cE("div");
  const sunriseIconEl = cE("img");
  const sunriseTimeEl = cE("p");
  const sunsetEl = cE("div");
  const sunsetIconEl = cE("img");
  const sunsetTimeEl = cE("p");
  const dividerEl = cE("div");

  sunInfoEl.className = "sunInfo";
  sunriseEl.className = "sunrise";
  sunriseIconEl.src = "./assets/sunrise.svg";
  sunriseIconEl.alt = "sunrise";
  sunriseTimeEl.className = "sunriseTime";
  sunriseTimeEl.textContent = new Date(
    cityData.sys.sunrise * 1000
  ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  sunsetEl.className = "sunset";
  sunsetIconEl.src = "./assets/sunset.svg";
  sunsetIconEl.alt = "sunset";
  sunsetTimeEl.className = "sunsetTime";
  sunsetTimeEl.textContent = new Date(
    cityData.sys.sunset * 1000
  ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  dividerEl.className = "divider";

  sunriseEl.append(sunriseIconEl, sunriseTimeEl);
  sunsetEl.append(sunsetIconEl, sunsetTimeEl);

  sunInfoEl.append(sunriseEl, dividerEl, sunsetEl);

  // changes widget background based on current weather
  const weatherIcon = cityData.weather[0].icon;
  switch (weatherIcon) {
    case "01d":
      wrapperEl.style.backgroundImage = "url('../assets/bg/clear-sky-day.jpg')";
      break;

    case "01n":
      wrapperEl.style.backgroundImage =
        "url('../assets/bg/clear-sky-night.jpg')";
      break;

    case "02d":
    case "03d":
    case "04d":
      wrapperEl.style.backgroundImage = "url('../assets/bg/clouds-day.jpg')";
      break;

    case "02n":
    case "03n":
    case "04n":
      wrapperEl.style.backgroundImage = "url('../assets/bg/clouds-night.jpg')";
      break;

    case "09d":
    case "09n":
      wrapperEl.style.backgroundImage = "url('../assets/bg/drizzle.jpg')";
      break;

    case "10d":
    case "10n":
      wrapperEl.style.backgroundImage = "url('../assets/bg/rain.jpg')";
      break;

    case "11d":
    case "11n":
      wrapperEl.style.backgroundImage = "url('../assets/bg/thunderstorm.jpg')";
      break;

    case "13d":
    case "13n":
      wrapperEl.style.backgroundImage = "url('../assets/bg/snow.jpg')";
      break;

    case "50d":
    case "50n":
      wrapperEl.style.backgroundImage = "url('../assets/bg/7xx.jpg')";
      break;
  }

  wrapperEl.append(userInfoEl, weatherInfoEl, sunInfoEl);

  return wrapperEl;
};

export const creditsGen = (parent) => {
  const wrapperEl = cE("div");
  const creditsEl = cE("div");
  const credits1El = cE("p");
  const credits2El = cE("p");
  const credits3El = cE("p");
  const credits4El = cE("p");

  wrapperEl.className = "creditsModal";
  creditsEl.className = "creditsWrapper";
  credits1El.className = "credits";
  credits1El.innerHTML =
    'Dawn and sunset icons by <a href="https://www.wishforge.games/?ref=svgrepo.com" target="_blank">Wishforge.games</a> in CC Attribution License via <a href="https://www.svgrepo.com/" target="_blank">SVG Repo</a>';
  credits2El.className = "credits";
  credits2El.innerHTML =
    'Clock icon by <a href="https://twitter.com/drvaneetthakur?ref=svgrepo.com" target="_blank">Vaneet Thakur</a> in CC Attribution License via <a href="https://www.svgrepo.com/" target="_blank">SVG Repo</a>';
  credits3El.className = "credits";
  credits3El.innerHTML =
    'Location and drop icons by <a href="https://orchid.software/en/docs/icons/?ref=svgrepo.com" target="_blank">Orchid</a> in MIT License via <a href="https://www.svgrepo.com/" target="_blank">SVG Repo</a>';
  credits4El.className = "credits";
  credits4El.innerHTML =
    'Wind icon by <a href="https://github.com/framework7io/framework7-icons?ref=svgrepo.com" target="_blank">Framework7io</a> in MIT License via <a href="https://www.svgrepo.com/" target="_blank">SVG Repo</a>';

  creditsEl.append(credits1El, credits2El, credits3El, credits4El);
  wrapperEl.appendChild(creditsEl);
  wrapperEl.addEventListener("click", (e) => {
    if (e.target.className === "creditsModal") {
      parent.removeChild(wrapperEl);
    }
  });

  return wrapperEl;
};
