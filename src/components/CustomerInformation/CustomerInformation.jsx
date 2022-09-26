// Page two

import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const CustomerInformation = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const customerName = useSelector(store => store.customerName)
    const handleName = (event) => { dispatch ({ type : 'SET_CUSTOMERNAME', payload: event.target.value })};

    const streetAddress = useSelector(store => store.streetAddress)
    const handleAddress = (event) => { dispatch ({ type : 'SET_STREETADDRESS', payload: event.target.value })};

    const city = useSelector(store => store.city)
    const handleCity= (event) => { dispatch ({ type : 'SET_CITY', payload: event.target.value })};

    const zip = useSelector(store => store.zip)
    const handleZip= (event) => { dispatch ({ type : 'SET_ZIP', payload: event.target.value })};

    const type = useSelector(store => store.type)
    const handleType= (event) => { dispatch ({ type : 'SET_TYPE', payload: event.target.value })};






    return (
        <>
            <h1>This is the CustomerInformation component</h1>
            {/* <button onClick={() => history.push('/checkout')} className="button">Go to Checkout</button> */}
            <div className='custForm'>
                <form>
                    <label for="name">Enter First and Last Name</label><br />
                    <input value={customerName} onChange={handleName} className="input" type="text" /><br />

                    <label for="address">Enter Address</label><br />
                    <input value={streetAddress} onChange={handleAddress} className="input" type="text" /><br />

                    <label for="city">Enter City</label><br />
                    <input value={city} onChange={handleCity} className="input" type="text" /><br />

                    <label for="zip">Enter Zip</label><br />
                    <input value={zip} onChange={handleZip} className="input" type="text" maxLength={5} /><br />

                    <label for="zip">Delivery</label><br />
                    <input value={type} onChange={handleType} className="input" type="radio"  /><br />

                    <label for="zip">Take-Out</label><br />
                    <input value={type} onChange={handleType} className="input" type="radio" checked="checked" /><br />

                    <button onClick={() => history.push('/checkout')} className="button">Go to Checkout</button>

                </form>
            </div>
        </>
    );
}

export default CustomerInformation;