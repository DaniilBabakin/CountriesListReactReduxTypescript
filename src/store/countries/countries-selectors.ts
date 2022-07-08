import { ReduxState } from "../../types";

export const selectCountriesInfo = (state:ReduxState) => ({
  status:state.countries.status,
  error:state.countries.error,
  countriesNumber:state.countries.countries
})

export const selectAllCountries = (state:ReduxState) => state.countries.countries

export const selectVisibleCountries = (state:ReduxState,{search = '',region=''}:any) => {
  return state.countries.countries.filter((country:any)=>
    country.name.toLowerCase().includes(search.toLowerCase()) && country.region.includes(region)
  )
}