// Page two

import { useHistory } from 'react-router-dom';

const CustomerInformation = () => {
    const history = useHistory();

    return (
        <>
            <h1>This is the CustomerInformation component</h1>
            <button onClick={() => history.push('/checkout')} className="button">Go to Checkout</button>
        </>
    );
}

export default CustomerInformation;