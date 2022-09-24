import { useDispatch } from 'react-redux';

const PizzaItem = ({ pizza }) => {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch({ type: 'ADDTO_CART', payload: pizza });
        dispatch({ type: 'UPDATE_TOTAL', payload: parseFloat(pizza.price) })
    }

    return (
        <li>
            <p>{pizza.name}, {pizza.description}, {pizza.price}</p>
            <button onClick={addToCart}>Add</button>
        </li>
    );
}

export default PizzaItem;