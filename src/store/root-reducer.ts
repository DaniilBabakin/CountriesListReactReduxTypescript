import { combineReducers } from '@reduxjs/toolkit'

import { controlSlice } from './controls/ControlSlice'
import { countriesSlice } from './countries/CountrySlice'
import { detailsSlice } from './details/DetailsSlice'
import { themeSlice } from './theme/ThemeSlice'

export const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  countries: countriesSlice.reducer,
  controls: controlSlice.reducer,
  details: detailsSlice.reducer,
})
