import { Client }from "../../model/client";
import { ActionType } from "../action-types";

import { Dispatch } from "redux";
import axios from "axios";


export const getClients =(client: Client) => {
    return (dispatch: Dispatch) => {
        axios.get(`${process.env.REACT_APP_API}`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        dispatch({
            type: ActionType.GET_CLIENT,
            payload: client
        })
    }
}

export const deleteClient = (id: number) => ({
    type: ActionType.DELETE_CLIENT,
    id
})

