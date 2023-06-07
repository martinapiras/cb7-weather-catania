import API_KEY from "../../api.js";

export const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const GET = async (type, cityName) => {
  const res = await fetch(
    `${BASE_URL}${type}?q=${cityName},it&appid=${API_KEY}&units=metric`
  );
  const data = res.json();

  return data;
};
