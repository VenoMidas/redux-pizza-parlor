
const PizzaItem = ({ pizza }) => {

    return (
        <li>
            <p>{pizza.name}, {pizza.description}, {pizza.price}</p>
        </li>
    );
}

export default PizzaItem;