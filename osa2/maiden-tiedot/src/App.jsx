import { useState, useEffect } from 'react'

import Countries from './components/Countries'
import countryService from './services/countries'

function App() {
  const [input, setInput] = useState('')
  const [countries, setCountries] = useState([])
  
  useEffect(() => {
    countryService.getFiltered(input).then(selection =>
      setCountries(selection)
    )
  }, [input])
  
  return (
    <div>
      <p>
        find countries <input value={input} onChange={(event) => setInput(event.target.value)} />
      </p>
      <Countries countries={countries} />
    </div>
  )
}

export default App
