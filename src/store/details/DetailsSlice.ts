import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IBorder } from 'models/IBorder'
import { ICountry } from 'models/ICountry'

import { RootState } from '../index'

interface DetailsState {
  currentCountry: ICountry | null
  status: string
  error: any | null
  neighbors: IBorder[]
}

const initialState: DetailsState = {
  currentCountry: null,
  status: 'idle',
  error: null,
  neighbors: [],
}
export const detailsSlice = createSlice({
  name: '@@details',
  initialState,
  reducers: {
    setError(state, action: PayloadAction<string>) {
      state.status = 'rejected'
      state.error = action.payload
    },
    clearDetails() {
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCountryByName.pending, (state) => {
        state.error = null
        state.status = 'loading'
      })
      .addCase(loadCountryByName.rejected, (state, action: PayloadAction<any>) => {
        state.status = 'rejected'
        state.error = action.payload
      })
      .addCase(loadCountryByName.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'idle'
        state.currentCountry = action.payload.data[0]
      })
      .addCase(loadNeighborsByBorder.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'idle'
        state.neighbors = action.payload.data.map((country: ICountry) => country.name)
      })
  },
})
export const { clearDetails } = detailsSlice.actions
export default detailsSlice.reducer

//action creators
export const loadCountryByName = createAsyncThunk(
  '@@details/load-country-by-name',
  (name: string, { extra: { client, api } }: any) => {
    return client.get(api.searchByCountry(name))
  },
)

export const loadNeighborsByBorder = createAsyncThunk(
  '@@details/load-neighbors-by-border',
  (borders: IBorder[], { extra: { client, api } }: any) => {
    return client.get(api.filterByCode(borders))
  },
)
// export const loadNeighborsByBorder =
//   (borders: any[]) =>
//   (dispatch: any, _: any, { client, api }: any) => {
//     dispatch(setLoading())

//     client
//       .get(api.filterByCode(borders))
//       .then((res: any) => dispatch(setNeighbors(res.data.map((item: any) => item.name))))
//       .catch(console.error)
//   }

//selectors

export const selectCurrentCountry = (state: RootState) => state.details.currentCountry
export const selectDetails = (state: RootState) => state.details
export const selectNeighbors = (state: RootState) => state.details.neighbors
