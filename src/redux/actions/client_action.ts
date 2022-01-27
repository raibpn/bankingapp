import uuid from "uuid";
import { Client } from "../../model/client";
import { ActionType } from "./index";

// export const GET_CLIENT = "GET_CLIENT"
// export const ADD_CLIENT = "ADD_CLIENT"
// export const EDIT_CLIENT = "EDIT_CLIENT"
// export const DELETE_CLIENT = "DELETE_CLIENT"

interface GetClientAction {
    type: ActionType.GET_CLIENT
    client: Client[];
}

interface ADDClientAction {
    type: ActionType.ADD_CLIENT
    client: Client;
}

interface EditClientAction {
    type: ActionType.EDIT_CLIENT
    client: Client[];
}

interface DeleteClientAction {
    type: ActionType.DELETE_CLIENT
    id: number;
}

export type ClientActions = GetClientAction | ADDClientAction | EditClientAction | DeleteClientAction