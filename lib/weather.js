import axios from "axios";

export async function getLondonWeather() {
  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?lat=51.5073219&lon=-0.1276474&appid=3786a22b887aeb2dbb5576cf64034abd&units=metric"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}
