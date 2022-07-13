import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: '@@theme',
  initialState: 'light',
  reducers: {
    setTheme(state, action: PayloadAction<any>) {
      return action.payload
    },
  },
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
