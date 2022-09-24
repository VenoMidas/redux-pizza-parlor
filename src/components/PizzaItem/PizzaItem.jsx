import { useDispatch } from 'react-redux';
import { useState } from 'react';

const PizzaItem = ({ pizza }) => {
    const dispatch = useDispatch();
    const [toggle, setToggle] = useState(false);

    const addToCart = () => {
        dispatch({ type: 'ADDTO_CART', payload: pizza });
        dispatch({ type: 'UPDATE_TOTAL', payload: parseFloat(pizza.price) });
        setToggle(!toggle);
    };

    const removeFromCart = () => {
        dispatch({ type: 'REMOVE_ITEM', payload: pizza });
        setToggle(!toggle);
    };

    return (
        <li>
            <p>{pizza.name}, {pizza.description}, {pizza.price}</p>
            {
                toggle ? (
                    // if toggle = true show "remove" button
                    <button onClick={removeFromCart}>Remove</button>
                ) : (
                    // if toggle = false show "add" button
                    <button onClick={addToCart}>Add</button>
                )
            }
        </li>
    );
}

export default PizzaItem;