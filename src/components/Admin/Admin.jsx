// Admin Page
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';

const Admin = () => {
    let [orderList, setOrderList] = useState([]);

    // On load, fetch order data from the server
    useEffect(() => {
        console.log('in useEffect');
        getOrders();
    }, []);

    // axios GET request
    const getOrders = () => {
        axios({
            method: 'GET', 
            url: '/api/order',
        }).then(response => {
            setOrderList(response.data);
        }).catch((err) => {
            console.log(err);
            alert('Something went wrong!');
        });
    };

    return (
        <Box sx={{ p: 2, border: '3px solid black'}}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Time Order Placed</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Cost</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            orderList.map(order => (
                                <TableRow key={order.id} sx={{ '&:last-child td, &:last-child th': {border: 0}}}>
                                    <TableCell>{order.customer_name}</TableCell>
                                    <TableCell>{order.time}</TableCell>
                                    <TableCell>{order.type}</TableCell>
                                    <TableCell>{order.total}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
       </Box>
    );
}

export default Admin;