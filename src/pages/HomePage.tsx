import { CountryList } from 'store/countries/CountryList'

import { Controls } from '../store/controls/Controls'

export const HomePage = () => {
  return (
    <>
      <Controls />
      <CountryList />
    </>
  )
}
