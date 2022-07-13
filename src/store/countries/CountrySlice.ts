import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ICountry } from 'models/ICountry'

import { RootState } from '../index'

interface countryStateProps {
  list: ICountry[]
  status: string
  error: any | null
}
const initialState: countryStateProps = {
  list: [],
  status: 'init',
  error: null,
}
export const countriesSlice = createSlice({
  name: '@@countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCountries.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loadCountries.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.payload
      })
      .addCase(loadCountries.fulfilled, (state, action) => {
        state.status = 'received'
        state.list = action.payload.data
      })
  },
})

export default countriesSlice.reducer

//actionCreators
export const loadCountries = createAsyncThunk(
  '@@countries/load-countries',
  async (_, { extra: { client, api } }: any) => {
    return client.get(api.ALL_COUNTRIES)
  },
)

//selectors
export const selectCountriesInfo = (state: RootState) => ({
  status: state.countries.status,
  error: state.countries.error,
  countriesNumber: state.countries.list,
})

export const selectAllCountries = (state: RootState) => state.countries.list

export const selectVisibleCountries = (state: RootState, { search = '', region = '' }: any) => {
  return state.countries.list.filter(
    (country: any) => country.name.toLowerCase().includes(search.toLowerCase()) && country.region.includes(region),
  )
}
