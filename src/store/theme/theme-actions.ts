export const SET_THEME = '@@theme/SET_THEME'

export const setTheme = (theme:string) => ({
  type:SET_THEME,
  payload:theme
})