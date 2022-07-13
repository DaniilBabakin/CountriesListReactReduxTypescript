import { useEffect } from 'react'

import { loadCountries, selectCountriesInfo, selectVisibleCountries } from './CountrySlice'

import { RootState } from 'store'
import { selectControls } from 'store/controls/ControlSlice'
import { useTypedDispatch, useTypedSelector } from 'types'

export const useCountries = () => {
  const dispatch = useTypedDispatch()

  const { search, region } = useTypedSelector(selectControls)
  const countries = useTypedSelector((state: RootState) => selectVisibleCountries(state, { search, region }))
  const { status, error, countriesNumber } = useTypedSelector(selectCountriesInfo)

  useEffect(() => {
    countriesNumber.length === 0 && dispatch(loadCountries())
  }, [countriesNumber, dispatch])
  return [countries, status, error]
}
