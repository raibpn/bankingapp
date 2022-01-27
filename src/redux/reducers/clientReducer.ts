import { Client } from "../../model/client";
import { ActionType } from "../actions";
import { ClientActions } from "../actions/client_action"

const clientReducerDefaultState: Client[] = [];

const clientReducer = (state = clientReducerDefaultState, action: ClientActions) : Client[] => {
  switch (action.type) {
    case ActionType.ADD_CLIENT:
      return [...state, action.client];
    case ActionType.DELETE_CLIENT:
      return state.filter(({ id }) => id !== action.id);
    case ActionType.EDIT_CLIENT:
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
    case ActionType.GET_CLIENT:
      return action.client;
    default:
      return state;
  }
};

export default clientReducer;