// Home Page
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';

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
        <>
            <h1>Step 1: Select Your Pizza</h1>

            <ul>
                {
                    pizzaArray.map((pizza) => {
                        return <PizzaItem key={pizza.id} pizza={pizza}/>
                    })
                }
            </ul>

            <button onClick={() => history.push('/customer/information')} className="button">Enter Customer Information</button>
        </>
    );
}

export default SelectPizza;