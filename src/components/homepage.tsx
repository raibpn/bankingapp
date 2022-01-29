import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Table } from 'reactstrap';
import { actionCreators } from '../redux';
import { bindActionCreators } from 'redux';
import { State } from '../redux/reducers/index';
// import { getClients } from '../redux/actions/client_action'


//materialUI
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import Client from '../model/client';

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
)(TableRow);

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
    table: {
        marginTop: 100,
        minWidth: 900,
    },
});



// export interface IApplicationProps{ }

// const Homepage = () => {

//     let dispatch = useDispatch();
//     const {clients} = useSelector((state: State) => state.clientData)
//     // const state = React.useState({client})

//     const { getClients } = bindActionCreators(actionCreators, dispatch)

//     useEffect(() => {
//         dispatch(getClients)
//     })

//     return (
//         <Table>
//             <thead>
//                 <tr>
//                     <th>#</th>
//                     <th>id</th>
//                     <th>FIrst Name</th>
//                     <th>Last Name</th>
//                     <th>Street</th>
//                     <th>City</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {/* <tr>
//                     <th scope="row">1</th>
//                     <td>Mark</td>
//                     <td>Otto</td>
//                     <td>@mdo</td>
//                 </tr>
//                 <tr>
//                     <th scope="row">2</th>
//                     <td>Jacob</td>
//                     <td>Thornton</td>
//                     <td>@fat</td>
//                 </tr>
//                 <tr>
//                     <th scope="row">3</th>
//                     <td>Larry</td>
//                     <td>the Bird</td>
//                     <td>@twitter</td>
//                 </tr> */}

//                 {clients && clients.map((row) => (

//                 ))}
//             </tbody>
//         </Table>
//     )
// }

const Homepage = () => {
    const classes = useStyles();

    let dispatch = useDispatch();
    // const { clients } = useSelector((state: State) => state.clientData)
    // const [state, setState] = React.useState([]);

    const { getClients } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        dispatch(getClients);
    })


    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Id</StyledTableCell>
                            <StyledTableCell align="center">First Name</StyledTableCell>
                            <StyledTableCell align="center">Last Name</StyledTableCell>
                            <StyledTableCell align="center">City</StyledTableCell>
                            <StyledTableCell align="center">Street</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    {/* <TableBody>
                        {clients && clients.map((client) => (
                            <StyledTableRow key={client.id}>
                                <StyledTableCell component="th" scope="row">
                                    {client.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{client.id}</StyledTableCell>
                                <StyledTableCell align="right">{client.firstName}</StyledTableCell>
                                <StyledTableCell align="right">{client.lastName}</StyledTableCell>
                                <StyledTableCell align="right">{client.city}</StyledTableCell>
                                <StyledTableCell align="right">{client.streetAddress}</StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody> */}
                </Table>
            </TableContainer>
        </div>
    )
}

export default Homepage;