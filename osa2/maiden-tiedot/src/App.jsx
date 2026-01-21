import { useState, useEffect } from 'react'

import Countries from './components/Countries'
import countryService from './services/countries'

function App() {
  const [input, setInput] = useState('')
  const [countries, setCountries] = useState([])
  const [weather, setWeather] = useState(null)
  
  useEffect(() => {
    countryService.getFiltered(input).then(selection =>
      setCountries(selection)
    )
  }, [input])
  
  useEffect(() => {
    if (countries.length !== 1) {
      setWeather(null)
      return
    }
    countryService.getWeather(countries[0]).then(currentWeather => 
      setWeather(currentWeather)
    )
  }, [countries])
  
  const selectCountry = country => {
    setCountries([country])
  }
  
  return (
    <div>
      <p>
        find countries <input value={input} onChange={(event) => setInput(event.target.value)} />
      </p>
      <Countries countries={countries} selectCountry={selectCountry} weather={weather} />
    </div>
  )
}

export default App
