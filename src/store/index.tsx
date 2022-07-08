import { createStore, compose, applyMiddleware } from "redux"
import axios from "axios"
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'


import { rootReducer } from "./root-reducer"
import * as api from '../config'

export const store = createStore(rootReducer,composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument({
        client:axios,
        api
      })
    )
))
