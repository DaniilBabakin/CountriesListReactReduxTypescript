import { ReduxState } from "../../types";

export const selectSearch = (state:ReduxState) => state.controls.search

export const selectRegion = (state:ReduxState) => state.controls.region

export const selectControls = (state:ReduxState) => state.controls