import { useNavigate } from 'react-router-dom'

import { useCountries } from './useCountries'

import { Card } from 'components/Card'
import { List } from 'components/List'
import { ICountry } from 'models/ICountry'

export const CountryList: React.FC = () => {
  const navigate = useNavigate()
  const [countries, status, error] = useCountries()
  console.log(countries)
  return (
    <>
      {error && <h2>Can't fetch data</h2>}
      {status === 'loading' && <h2>Loading...</h2>}

      {status === 'received' && (
        <List>
          {countries.map((country: ICountry) => {
            const countryInfo = {
              img: country.flags.png,
              name: country.name,
              info: [
                {
                  title: 'Population',
                  description: country.population.toLocaleString(),
                },
                {
                  title: 'Region',
                  description: country.region,
                },
                {
                  title: 'Capital',
                  description: country.capital,
                },
              ],
            }

            return <Card key={country.name} onClick={() => navigate(`/country/${country.name}`)} {...countryInfo} />
          })}
        </List>
      )}
    </>
  )
}
