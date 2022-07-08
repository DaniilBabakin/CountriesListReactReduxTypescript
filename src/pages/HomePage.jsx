import { useNavigate } from 'react-router-dom';

import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { useEffect } from 'react';
import { loadCountries } from '../store/countries/countries-actions';
import { useTypedDispatch, useTypedSelector } from '../types';
import { selectAllCountries, selectCountriesInfo, selectVisibleCountries } from '../store/countries/countries-selectors';
import { selectControls} from '../store/controls/controls-selectors';

export const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch()

  const {search,region} = useTypedSelector(selectControls)
  console.log(search,region)
  const countries = useTypedSelector((state:any) => selectVisibleCountries(state,{search,region}));
  const {status,error,countriesNumber} = useTypedSelector(selectCountriesInfo)

  
  useEffect(() => {
    countriesNumber.length === 0 && dispatch(loadCountries())  

  }, [countriesNumber])
  
  return (
    <>
      <Controls />

      {error && <h2>Can't fetch data</h2>}
      {status === 'loading' && <h2>Loading...</h2>}

      {status === 'received' && (
      <List>
            {countries.map((c) => {
              const countryInfo = {
                img: c.flags.png,
                name: c.name,
                info: [
                  {
                    title: 'Population',
                    description: c.population.toLocaleString(),
                  },
                  {
                    title: 'Region',
                    description: c.region,
                  },
                  {
                    title: 'Capital',
                    description: c.capital,
                  },
                ],
              };

              return (
                <Card
                  key={c.name}
                  onClick={() => navigate(`/country/${c.name}`)}
                  {...countryInfo}
                />
              );
            })}
          </List>
      )}
    </>
  );
};
