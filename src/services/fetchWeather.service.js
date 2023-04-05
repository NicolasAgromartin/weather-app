import { baseUrl, weatherDataUrl, apiKey } from "./openWeather.service";


export function getWeather(searched, setWeather){
  const cityName = searched.split(',')[0];
  const stateCode = searched.split(',')[1];
  const countryCode = searched.split(',')[2];
  
  fetch(`${baseUrl}${weatherDataUrl}q=${cityName},${stateCode},${countryCode}&units=metric&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => setWeather(data))
}