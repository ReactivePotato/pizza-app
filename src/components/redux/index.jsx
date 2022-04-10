import { createStore, combineReducers } from "redux";
import pizzasInCartReducer from "./reducers/pizzasInCartReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
   pizzasInCartReducer
})

export const store = createStore(rootReducer, composeWithDevTools())