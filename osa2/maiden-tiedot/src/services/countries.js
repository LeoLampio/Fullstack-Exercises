import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries'
const api_key = import.meta.env.VITE_WEATHER_KEY

const getFiltered = filter => {
  return axios.get(`${baseUrl}/api/all`)
    .then(response =>
      response.data.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
    )
}

const getWeather = country => {
  const lat = country.capitalInfo.latlng[0]
  const lon = country.capitalInfo.latlng[1]
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
    .then(response => response.data)
}

export default { getFiltered, getWeather }