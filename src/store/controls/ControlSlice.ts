import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../index'

interface ControlStateProps {
  search: string
  region: string
}
const initialState: ControlStateProps = {
  search: '',
  region: '',
}
export const controlSlice = createSlice({
  name: '@@controls',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload
    },
    setRegion(state, action) {
      state.region = action.payload
    },
    clearControls() {
      return initialState
    },
  },
})

export const { setRegion, setSearch, clearControls } = controlSlice.actions
export default controlSlice.reducer

//selectors
export const selectSearch = (state: RootState) => state.controls.search
export const selectRegion = (state: RootState) => state.controls.region
export const selectControls = (state: RootState) => state.controls
