// import uuid from "uuid";
import { Client } from "../../model/client";
import {  ActionType } from "../action-types/index";

// export const GET_CLIENT = "GET_CLIENT"
// export const ADD_CLIENT = "ADD_CLIENT"
// export const EDIT_CLIENT = "EDIT_CLIENT"
// export const DELETE_CLIENT = "DELETE_CLIENT"

export interface GetClientAction {
    type: ActionType.GET_CLIENT
    payload: Client[];
}

interface AddClientAction {
    type: ActionType.ADD_CLIENT
    payload: Client;
}

interface EditClientAction {
    type: ActionType.EDIT_CLIENT
    payload: Client[];
}

interface DeleteClientAction {
    type: ActionType.DELETE_CLIENT
    id: number;
}

export type ClientActions = GetClientAction | AddClientAction | EditClientAction | DeleteClientAction
