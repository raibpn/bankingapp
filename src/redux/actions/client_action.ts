import { Client } from "../../model/client";
import { ActionType } from "../action-types";

import { Dispatch } from "redux";
import axios from "axios";

//ACTION CREATOR

// export const AddClient = ({
//     id, firstName, lastName, streetAddress, city }: { id: number, firstName: string, lastName: string, streetAddress: string, city: string }) => {
//   return (dispatch: Dispatch, getState: () => AppState) => {
//     const {
//     //   id = 1,
//       firstName = "",
//       lastName = "",
//       streetAddress = "",
//       city = ""
//     } = clientData;
//     const client = { description, note, amount, createdAt };

//     const id = uuid();

//     dispatch(
//       addExpense({
//         id,
//         ...expense
//       })
//     );
//   };
// };

// export const startRemoveExpense = id => {
//   return (dispatch, getState) => {
//     dispatch(removeExpense({ id }));
//   };
// };

// export const startEditExpense = expense => {
//   return (dispatch, getState) => {
//     dispatch(editExpense(id, updates));
//   };
// };

// export const getClients = (client :Client) => {
//     return (dispatch : Dispatch) => {
//         axios
//             .get(`$(process.env.BANKING_APP_API)`)
//             .then(response) => {
//     console.log("response:", resp);
//     Dispatch ({type: ActionType.GET_CLIENT, payload: resp.data
//     });
//  }
   
    
// }

// export default axios.create({
//     baseURL: "http://localhost:5000/clients"
// })

export const getClients = (client: Client) => {
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
