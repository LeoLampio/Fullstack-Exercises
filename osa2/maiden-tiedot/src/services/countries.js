import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries'

const getFiltered = filter => {
  return axios.get(`${baseUrl}/api/all`)
    .then(response =>
      response.data.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
    )
}

export default { getFiltered }