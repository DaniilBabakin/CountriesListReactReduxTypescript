import { SET_COUNTRIES, SET_ERROR, SET_LOADING } from "./countries-actions"

type initialStateProps = {
  countries:[],
  status:string,
  error: any | null
}
const initialState:initialStateProps = {
  countries:[],
  status:'init',
  error:null
}
export const countriesReducer = (state=initialState, {type,payload}:any) => {
  switch(type){
    case SET_COUNTRIES : {
      return {
        ...state,
        status:'received',
        countries:payload
      }
    }
    case SET_LOADING : {
      return {
        ...state,
        status: 'loading',
        error:null
      }
    }
    case SET_ERROR : {
      return {
        ...state,
        error:payload
      }
    }
    default: return state
  }
}