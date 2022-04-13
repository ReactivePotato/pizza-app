import { createStore, combineReducers } from "redux";
import pizzasInCartReducer from "./reducers/pizzasInCartReducer";
import pizzaCostReducer from "./reducers/pizzaCostReducer";
import pizzaFilterReducer from "./reducers/pizzaFilterReducer"
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
   pizzasInCartReducer,
   pizzaCostReducer,
   pizzaFilterReducer
})

export const store = createStore(rootReducer, composeWithDevTools())