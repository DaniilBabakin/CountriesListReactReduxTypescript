import { CLEAR_CONTROLS, SET_REGION, SET_SEARCH } from "./controls-action"

type initialStateProps = {
  search:string
  region:string
}
const initialState:initialStateProps = {
  search: '',
  region:''
}

export const controlsReducer = (state=initialState,action:any)=>{
  switch(action.type){
    case SET_SEARCH:{
      return {
        ...state,
        search:action.payload
      }
    }
    case SET_REGION:{
      return {
        ...state,
        region:action.payload
      }
    }
    case CLEAR_CONTROLS:{
      return initialState
    }
    default: return state
  }
}