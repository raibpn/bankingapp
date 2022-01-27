import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import clientReducer from "../redux/reducers/clientReducer";

export const rootReducer = combineReducers({
    clients: clientReducer
});

export type AppState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk));