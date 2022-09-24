// Home Page
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const SelectPizza = () => {
    const history = useHistory();
    let [pizzaArray, setPizzaArray] = useState([]);

    useEffect(() => {
        getPizzaArray();
    }, []);

    const getPizzaArray = () => {
        axios({
            method: 'GET',
            url: '/api/pizza',
        }).then(response => {
            setPizzaArray(response.data);
        }).catch(error => {
            console.log(error);
            alert('Something went wrong!');
        });
    };

    return (
        <div>
            <Typography sx={{ marginLeft: 5 }} variant="h3" gutterBottom>Step 1: Select Your Pizza</Typography>

            <Grid container spacing={2} >
                {
                    pizzaArray.map((pizza) => {
                        return <PizzaItem key={pizza.id} pizza={pizza} />
                    })
                }
            </Grid>

            <button onClick={() => history.push('/customer/information')} >Enter Customer Information</button>
        </div>
    );
};

export default SelectPizza;