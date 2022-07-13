import { Info } from 'components/Info'
import React, { useEffect } from 'react'
import { NavigateFunction } from 'react-router-dom'
import { useTypedDispatch, useTypedSelector } from 'types'

import { clearDetails, loadCountryByName, selectDetails } from './DetailsSlice'

interface CountryDetailsProps {
  name: string
  navigate: NavigateFunction
}

export const CountryDetails: React.FC<CountryDetailsProps> = ({ name, navigate }) => {
  const dispatch = useTypedDispatch()
  const { currentCountry, error, status } = useTypedSelector(selectDetails)
  useEffect(() => {
    dispatch(loadCountryByName(name))

    return () => {
      dispatch(clearDetails())
    }
  }, [name, dispatch])
  return (
    <>
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </>
  )
}
