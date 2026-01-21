
const Weather = ({ capital, weather, getIcon }) => {
  if (weather === null) {
    return null
  }
  return (
    <>
      <h2>Weather in {capital}</h2>
      <p>Temperature {weather === null ? null : weather.main.temp} Celsius</p>
      <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} width={64}/>
      <p>Wind {weather === null ? null : weather.wind.speed} m/s</p>
    </>
  )
}

export default Weather