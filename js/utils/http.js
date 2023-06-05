import API_KEY from "../../api.js";

export const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=`;

export const GET = async (cityName) => {
  const res = await fetch(
    `${BASE_URL}${cityName},it&appid=${API_KEY}&units=metric`
  );
  const data = res.json();

  return data;
};
