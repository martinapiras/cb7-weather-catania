export const cE = (element) => document.createElement(element);
export const qS = (element) => document.querySelector(element);

export const cityListGen = (city) => {
  const optionEl = cE("option");

  optionEl.setAttribute("value", city.value);
  optionEl.setAttribute("lat", city.lat);
  optionEl.setAttribute("lon", city.lon);
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
  cityNamePEl.textContent = cityData[0].name;
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
  const humidityTitleEl = cE("span");
  const humidityValueEl = cE("span");
  const aqiWrapperEl = cE("div");
  const aqiIconEl = cE("div");
  const aqiImgEl = cE("img");
  const aqiEl = cE("p");
  const aqiTitleEl = cE("span");
  const aqiValueEl = cE("span");
  const windWrapperEl = cE("div");
  const windIconEl = cE("div");
  const windImgEl = cE("img");
  const windEl = cE("p");
  const windTitleEl = cE("span");
  const windValueEl = cE("span");

  weatherInfoEl.className = "weatherInfo";
  weatherInfoMainEl.className = "weatherInfo__main";
  weatherTypeEl.className = "weatherType";
  weatherIconContainerEl.className = "weatherIcon";
  weatherIconEl.src = `https://openweathermap.org/img/wn/${cityData[0].weather[0].icon}@4x.png`;
  weatherIconEl.alt = cityData[0].weather[0].description;
  weatherTypePEl.textContent =
    cityData[0].weather[0].description[0].toUpperCase() +
    cityData[0].weather[0].description.substring(1);
  temperatureEl.className = "temperature";
  temperatureEl.textContent = parseInt(cityData[0].main.temp) + "°C";
  temperatureMoreEl.className = "temperature__more";
  tempSeparatorEl.textContent = "|";
  tempSeparator2El.textContent = "|";
  minTempEl.className = "temperature-min";
  minTempEl.innerHTML = `<b>Min:</b><br>${parseInt(
    cityData[0].main.temp_min
  )}°C`;
  maxTempEl.className = "temperature-max";
  maxTempEl.innerHTML = `<b>Max:</b><br>${parseInt(
    cityData[0].main.temp_max
  )}°C`;
  feelsLikeEl.className = "temperature-feelsLike";
  feelsLikeEl.innerHTML = `<b>Feels like:</b><br>${parseInt(
    cityData[0].main.feels_like
  )}°C`;
  weatherMoreEl.className = "weatherInfo__more";
  humidityWrapperEl.className = "humidity";
  humidityIconEl.className = "humidityIcon";
  humidityImgEl.src = "./assets/humidity.svg";
  humidityImgEl.alt = "humidity";
  humidityTitleEl.textContent = "Humidity:";
  humidityValueEl.textContent = `${parseInt(cityData[0].main.humidity)}%`;
  aqiWrapperEl.className = "aqi";
  aqiIconEl.className = "aqiIcon";
  aqiImgEl.src = "./assets/aqi.svg";
  aqiImgEl.alt = "AQI";
  aqiTitleEl.textContent = "AQI:";
  aqiValueEl.textContent = `${parseInt(cityData[1].list[0].main.aqi)}`;
  windWrapperEl.className = "wind";
  windIconEl.className = "windIcon";
  windImgEl.src = "./assets/wind.svg";
  windImgEl.alt = "wind";
  windTitleEl.textContent = "Wind:";
  windValueEl.textContent = `${parseFloat(
    (cityData[0].wind.speed * 3.6).toFixed(2)
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
  humidityEl.append(humidityTitleEl, humidityValueEl);
  humidityWrapperEl.append(humidityIconEl, humidityEl);
  aqiIconEl.appendChild(aqiImgEl);
  aqiWrapperEl.append(aqiIconEl, aqiEl);
  aqiEl.append(aqiTitleEl, aqiValueEl);
  windIconEl.appendChild(windImgEl);
  windEl.append(windTitleEl, windValueEl);
  windWrapperEl.append(windIconEl, windEl);
  weatherMoreEl.append(humidityWrapperEl, aqiWrapperEl, windWrapperEl);
  weatherInfoEl.append(weatherInfoMainEl, weatherMoreEl);

  // shows AQI info //
  aqiWrapperEl.addEventListener("click", () =>
    qS(".page").append(aqiModalGen(cityData, qS(".page")))
  );

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
    cityData[0].sys.sunrise * 1000
  ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  sunsetEl.className = "sunset";
  sunsetIconEl.src = "./assets/sunset.svg";
  sunsetIconEl.alt = "sunset";
  sunsetTimeEl.className = "sunsetTime";
  sunsetTimeEl.textContent = new Date(
    cityData[0].sys.sunset * 1000
  ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  dividerEl.className = "divider";

  sunriseEl.append(sunriseIconEl, sunriseTimeEl);
  sunsetEl.append(sunsetIconEl, sunsetTimeEl);

  sunInfoEl.append(sunriseEl, dividerEl, sunsetEl);

  // changes widget background based on current weather
  const weatherIcon = cityData[0].weather[0].icon;
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
  const credits5El = cE("p");

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
    'Wind icon by <a href="https://github.com/32pixelsCo/zest-icons/blob/master/packages/zest-free/LICENSE.md?ref=svgrepo.com" target="_blank">Zest</a> in MIT License via <a href="https://www.svgrepo.com/" target="_blank">SVG Repo</a>';
  credits5El.className = "credits";
  credits5El.innerHTML =
    'Leaf icon by <a href="https://github.com/jtblabs/jtb-icons?ref=svgrepo.com" target="_blank">Jtblabs</a> in MIT License via <a href="https://www.svgrepo.com/" target="_blank">SVG Repo</a>';

  creditsEl.append(credits1El, credits2El, credits3El, credits4El, credits5El);
  wrapperEl.appendChild(creditsEl);
  wrapperEl.addEventListener("click", (e) => {
    if (e.target.className === "creditsModal") {
      parent.removeChild(wrapperEl);
    }
  });

  return wrapperEl;
};

export const aqiModalGen = (cityData, parent) => {
  const overlayEl = cE("div");
  const wrapperEl = cE("div");
  const titleEl = cE("p");
  const value = cityData[1].list[0].main.aqi;
  const valueEl = cE("h3");
  const descriptionEl = cE("p");
  const valuesWrapperEl = cE("div");
  const disclaimerEl = cE("p");

  overlayEl.className = "aqiOverlay";
  wrapperEl.className = "aqiModal";
  titleEl.className = "aqiModal__title";
  titleEl.textContent = "Air Quality Index (AQI)";
  valueEl.className = "aqiModal__aqi";
  valueEl.textContent = value;
  descriptionEl.className = "aqiModal__description";
  valuesWrapperEl.className = "aqiModal__values";
  disclaimerEl.className = "aqiModal__disclaimer";
  disclaimerEl.textContent = "*Concentration expressed in μg/m3.";

  switch (value) {
    case 1:
      descriptionEl.textContent = "Good";
      break;

    case 2:
      descriptionEl.textContent = "Fair";
      break;

    case 3:
      descriptionEl.textContent = "Moderate";
      break;

    case 4:
      descriptionEl.textContent = "Poor";
      break;

    case 5:
      descriptionEl.textContent = "Very Poor";
      break;
  }

  const pollutants = cityData[1].list[0].components;
  console.log(pollutants);
  const pollutantsArr = [{}, {}, {}, {}, {}, {}, {}, {}];

  Object.assign(pollutantsArr[0], { name: "CO" }, { value: pollutants.co });
  Object.assign(pollutantsArr[1], { name: "NO2" }, { value: pollutants.no2 });
  Object.assign(pollutantsArr[2], { name: "NO" }, { value: pollutants.no });
  Object.assign(pollutantsArr[3], { name: "O3" }, { value: pollutants.o3 });
  Object.assign(pollutantsArr[4], { name: "SO2" }, { value: pollutants.so2 });
  Object.assign(
    pollutantsArr[5],
    { name: "PM2.5" },
    { value: pollutants.pm2_5 }
  );
  Object.assign(pollutantsArr[6], { name: "PM10" }, { value: pollutants.pm10 });
  Object.assign(pollutantsArr[7], { name: "NH3" }, { value: pollutants.nh3 });

  console.log(pollutantsArr);

  pollutantsArr.forEach((pollutant) =>
    valuesWrapperEl.append(pollutantsGen(pollutant))
  );
  wrapperEl.append(
    titleEl,
    valueEl,
    descriptionEl,
    valuesWrapperEl,
    disclaimerEl
  );
  overlayEl.appendChild(wrapperEl);

  overlayEl.addEventListener("click", (e) => {
    if (e.target.className === "aqiOverlay") {
      parent.removeChild(overlayEl);
    }
  });

  return overlayEl;
};

const pollutantsGen = (data) => {
  const valueWrapperEl = cE("div");
  const pollutantNumberEl = cE("p");
  const pollutantNameEl = cE("p");

  valueWrapperEl.className = "aqiModal__value";
  pollutantNumberEl.className = "pollutant__number";
  pollutantNumberEl.textContent = parseFloat(data.value).toFixed(2);
  pollutantNameEl.className = "pollutant__name";
  pollutantNameEl.textContent = data.name;

  valueWrapperEl.append(pollutantNumberEl, pollutantNameEl);

  return valueWrapperEl;
  // }
};
