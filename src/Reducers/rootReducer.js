import { combineReducers } from "redux";
import { pokemonReducer, t } from '../Reducers/pokemonReducer'
import { errorReducer } from "./errorReducer";
import { loadingReducer } from "./loadingReducer";

export const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  error: errorReducer,
  loading: loadingReducer
})