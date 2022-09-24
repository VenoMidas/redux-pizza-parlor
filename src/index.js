import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'; // imports for redux
import { Provider } from 'react-redux'; // redux provider for react
import logger from 'redux-logger'; // logger for debugging
import './index.css';
import App from './components/App/App';

// reducers

// cart will hold an array of objects
const cart = (state = [], action) => {
    if (action.type === 'ADDTO_CART') {
        // return current array plus the object from action.payload
        return [...state, action.payload];
    } else if (action.type === 'CLEAR_ALL') {
        return [];
    } else if (action.type === 'REMOVE_ITEM') {
        // will return only the pizzas that do not match the action.payload
        // if we had the ability to add multiple, this would remove ALL of that type of pizza
        return [...state.filter(pizza => pizza !== action.payload)];
    } else {
        return state;
    };
};

// totalCost to track the total sum of pizza prices added to cart
const totalCost = (state = 0, action) => {
    if (action.type === 'UPDATE_TOTAL') {
        // check this in case action.payload isn't a number
        return state + action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return 0;
    } else {
        return state;
    };
};

const customerName = (state = '', action) => {
    if (action.type === 'SET_CUSTOMERNAME') {
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return '';
    } else {
        return state;
    };
};

const streetAddress = (state = '', action) => {
    if (action.type === 'SET_STREETADDRESS') {
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return '';
    } else {
        return state;
    };
};

const city = (state = '', action) => {
    if (action.type === 'SET_CITY') {
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return '';
    } else {
        return state;
    };
};

// for zipcode - leaving default as empty string
// then it won't show a default value in the input
// also the input seems to change to a string anyway
const zip = (state = '', action) => {
    if (action.type === 'SET_ZIP') {
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return '';
    } else {
        return state;
    };
};

// type (pickup or delivery)
// set default to delivery - could change it to empty see how the form looks either way with or without a default
const type = (state = 'delivery', action) => {
    if (action.type === 'SET_TYPE') {
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return 'delivery';
    } else {
        return state;
    };
};
// End reducers

// store for reducers
const storeInstance = createStore(
    combineReducers({
        cart,
        totalCost,
        customerName,
        streetAddress,
        city,
        zip,
        type
    }),
    applyMiddleware(logger) // logger for debugging and verifying proper operation
); // end store

ReactDOM.render(
    // provide the store instance for App
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
);