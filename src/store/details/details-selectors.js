import { ReduxState } from "../../types";

export const selectCurrentCountry = (state:ReduxState) => state.details.currentCountry
export const selectDetails = (state:ReduxState)=> state.details
export const selectNeighbors = (state:ReduxState)=> state.details.neighbors