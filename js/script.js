import cityList from "./cityList.js";
import { GET } from "./utils/http.js";
import {
  cE,
  qS,
  cityListGen,
  weatherGen,
  creditsGen,
  forecastWrapperGen,
  forecastGen,
} from "./utils/fn.js";

const selectEl = qS(".cities");

cityList.forEach((city) => selectEl.append(cityListGen(city)));

///// EVENTS /////
// shows weather for selected city
selectEl.addEventListener("change", (e) => {
  const placeholder = qS(".placeholder");
  const wrapperEl = qS(".widgetWrapper");

  if (e.target.value !== "" && placeholder) {
    qS(".page").removeChild(placeholder);

    // fetches current weather + air quality data + 5-day forecasts
    const weatherData = Promise.all([
      GET("weather", e.target.value),
      GET("air_pollution", e.target.value),
      GET("forecast", e.target.value),
    ]);

    weatherData.then((data) => {
      qS(".page").insertBefore(weatherGen(data), qS("footer"));
      qS(".page").insertBefore(forecastWrapperGen(), qS("footer"));
      data[2].list.forEach((item) =>
        qS(".forecastWrapper").append(forecastGen(item))
      );
    });
  } else if (e.target.value !== "" && wrapperEl) {
    qS(".page").removeChild(wrapperEl);
    qS(".page").removeChild(qS(".forecastWrapper"));

    const weatherData = Promise.all([
      GET("weather", e.target.value),
      GET("air_pollution", e.target.value),
      GET("forecast", e.target.value),
    ]);

    weatherData.then((data) => {
      qS(".page").insertBefore(weatherGen(data), qS("footer"));
      qS(".page").insertBefore(forecastWrapperGen(), qS("footer"));
      data[2].list.forEach((item) =>
        qS(".forecastWrapper").append(forecastGen(item))
      );
    });
  } else if (e.target.value === "") {
    const newPlaceholder = cE("p");
    newPlaceholder.className = "placeholder";
    newPlaceholder.textContent =
      "Please select a city to receive weather forecasts";
    qS(".page").removeChild(wrapperEl);
    qS(".page").removeChild(qS(".forecastWrapper"));
    document.body.style.backgroundImage = "none";

    qS(".page").insertBefore(newPlaceholder, qS("footer"));
  }
});

// shows credits
qS("footer").addEventListener("click", () =>
  qS(".page").append(creditsGen(qS(".page")))
);
