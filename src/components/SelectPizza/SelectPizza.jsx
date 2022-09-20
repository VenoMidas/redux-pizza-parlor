// Home Page
import { useHistory } from 'react-router-dom';

const SelectPizza = () => {
    const history = useHistory();

    return (
        <>
            <h1>This is the SelectPizza component</h1>
            <button onClick={() => history.push('/customer/information')} className="button">Enter Customer Information</button>
        </>
    );
}

export default SelectPizza;