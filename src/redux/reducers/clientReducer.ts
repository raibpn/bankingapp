import { Client } from "../../model/client";
import { ClientActions } from "../actions/client_action"

const clientReducerDefaultState: Client[] = [];

const clientReducer = (state = clientReducerDefaultState, action: ClientActions) : Client[] => {
  switch (action.type) {
    case "ADD_CLIENT":
      return [...state, action.client];
    case "DELETE_CLIENT":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_CLIENT":
      return state.map(client => {
        if (client.id === action.client.id) {
          return {
            ...client,
            ...action.client
          };
        } else {
          return client;
        }
      });
    case "GET_CLIENT":
      return action.client;
    default:
      return state;
  }
};

export default clientReducer;