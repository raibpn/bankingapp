// import { createStore, combineReducers, applyMiddleware } from "redux";

import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
// import clientReducer from "../redux/reducers/clientReducer";

import reducers from "../redux/reducers/index";


// export const rootReducer = combineReducers({
//     clients: clientReducer
// });

export const store = createStore(
    reducers, {}, applyMiddleware(thunk)
)

// export type AppState = ReturnType<typeof rootReducer>
// export const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;