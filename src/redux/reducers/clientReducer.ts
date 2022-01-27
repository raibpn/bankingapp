import { Client } from "../../model/client";
import {  ActionType } from "../action-types/index";
import { ClientActions } from "../actions/index"

const clientReducerDefaultState: Client[] = [];

const clientReducer = (state = clientReducerDefaultState, action: ClientActions) => {
  switch (action.type) {
    case ActionType.ADD_CLIENT:
      return [...state, action.payload];
    case ActionType.DELETE_CLIENT:
      return state.filter(({ id }) => id !== action.id);
    // case ActionType.EDIT_CLIENT:
    //   return state.map(client => {
    //     if (client.id === action.payload.id) {
    //       return {
    //         ...client,
    //         ...action.payload
    //       };
    //     } else {
    //       return client;
    //     }
    //   });
    case ActionType.GET_CLIENT:
          return {
              ...state,
              clients: action.payload
      }
    default:
      return state;
  }
};

export default clientReducer;