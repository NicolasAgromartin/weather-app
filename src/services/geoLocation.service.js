import { baseUrl, geoLocationUrl, apiKey } from "./openWeather.service";


export function getLocation(searched,setCities){
  fetch(`${baseUrl}${geoLocationUrl}${searched}&limit=7&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => setCities(data))
}