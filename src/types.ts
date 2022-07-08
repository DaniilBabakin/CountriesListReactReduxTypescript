import { AnyAction, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { store } from "./store";
import { rootReducer } from "./store/root-reducer";

export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof rootReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>;
export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;