import cityList from "./cityList.js";
import { GET } from "./utils/http.js";
import { cE, qS, cityListGen, weatherGen, creditsGen } from "./utils/fn.js";

const selectEl = qS(".cities");

cityList.forEach((city) => selectEl.append(cityListGen(city)));

///// EVENTS /////
// shows weather for selected city
selectEl.addEventListener("change", (e) => {
  const placeholder = qS(".placeholder");
  const wrapperEl = qS(".widgetWrapper");

  if (e.target.value !== "" && placeholder) {
    qS(".page").removeChild(placeholder);

    // fetches current weather + air quality data
    const weatherData = Promise.all([
      GET("weather", e.target.value),
      GET("air_pollution", e.target.value),
    ]);

    weatherData.then((data) =>
      qS(".page").insertBefore(weatherGen(data), qS("footer"))
    );
  } else if (e.target.value !== "" && wrapperEl) {
    qS(".page").removeChild(wrapperEl);
    const weatherData = Promise.all([
      GET("weather", e.target.value),
      GET("air_pollution", e.target.value),
    ]);

    weatherData.then((data) =>
      qS(".page").insertBefore(weatherGen(data), qS("footer"))
    );
  } else if (e.target.value === "") {
    const newPlaceholder = cE("p");
    newPlaceholder.className = "placeholder";
    newPlaceholder.textContent =
      "Please select a city to receive weather forecasts";
    qS(".page").removeChild(wrapperEl);
    qS(".page").insertBefore(newPlaceholder, qS("footer"));
  }
});

// shows credits
qS("footer").addEventListener("click", () =>
  qS(".page").append(creditsGen(qS(".page")))
);
