import { SET_THEME } from "./theme-actions";

export const themeReducer = (state='light', {type,payload}:any) => {
  switch(type){
    case SET_THEME : {
      return payload 
    }
    default: return state
  }
}