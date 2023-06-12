import axios from "axios";

export async function getLondonWeather() {
  try {
    let apiKey = process.env.APIKEY;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=51.5073219&lon=-0.1276474&appid=${apiKey}&units=metric`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}
