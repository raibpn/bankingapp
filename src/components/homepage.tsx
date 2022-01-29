import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { actionCreators } from '../redux';
// import { bindActionCreators } from 'redux';
import { State } from '../redux/reducers/index';
import { getClients } from '../redux/actions/client_action'
import { Link } from 'react-router-dom';

//materialUI
import { Table, TableCell, TableHead, TableBody, TableRow, Button } from '@material-ui/core';


const Homepage = () => {

    let dispatch = useDispatch();
    const clients = useSelector((state: State) => state.clientData)

    // const { getClients } =  bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        dispatch(getClients);
    });


    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="center">First Name</TableCell>
                        <TableCell align="center">Last Name</TableCell>
                        <TableCell align="center">City</TableCell>
                        <TableCell align="center">Street</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        clients.map(client => (
                            <TableRow>
                                <TableCell>{client.id}</TableCell>
                                <TableCell>{client.firstName}</TableCell>
                                <TableCell>{client.lastName}</TableCell>
                                <TableCell>{client.streetAddress}</TableCell>
                                <TableCell>{client.city}</TableCell>
                                <TableCell>
                                    <Button component={Link} to={`/delete/${client.id}`}>Delete</Button>
                                    <Button></Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default Homepage;