
import Weather from "./Weather"

const Countries = ({ countries, selectCountry, weather, getIcon }) => {
  
  if (countries.length === 0) {
    return (
      <div>
        <p>No countries found</p>
      </div>
    )
  } else if (countries.length === 1) {
    return (
      <div>
        <h1>{countries[0].name.common}</h1>
        <div>
          <b>Capital</b> {countries[0].capital.length === 1 ? <>{countries[0].capital}</> : countries[0].capital.map(cap => <div key={cap}>&emsp;{cap}</div>)}
        </div>
        <div><b>Area</b> {countries[0].area}</div>
        <h2>Languages</h2>
        <ul>
          {Object.values(countries[0].languages).map(lang => <li key={lang}>{lang}</li>)}
        </ul>
        <img src={countries[0].flags.svg} alt={countries[0].flags.alt} width={128} />
        <Weather capital={countries[0].capital[0]} weather={weather} />
      </div>
    )
  } else if (countries.length <= 10) {
    return (
      <div>
        {countries.map(country => <div key={country.name.common}>{country.name.common} <button onClick={() => selectCountry(country)}>show</button></div>)}
      </div>
    )
  }
  return (
    <div>
      <p>Too many matches, specify another filter</p>
    </div>
  )
}

export default Countries