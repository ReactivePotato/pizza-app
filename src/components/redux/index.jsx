import { createStore, combineReducers } from "redux";
import pizzasState from "./reducers/addPizzaReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
   pizzasState
})

export const store = createStore(rootReducer, composeWithDevTools())