import { combineReducers } from "redux";
import clientReducer from "./clientReducer";

const reducers = combineReducers({
    clientData: clientReducer
});

export default reducers;
export type State = ReturnType<typeof reducers>
