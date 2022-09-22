import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from './Header/Header';
import SelectPizza from '../SelectPizza/SelectPizza';
import CustomerInformation from '../CustomerInformation/CustomerInformation';
import Checkout from '../Checkout/Checkout';
import Admin from '../Admin/Admin';



function App() {

  return (
    <div className='App'>
      <Router>

        <Header />

        <Route exact path="/">
          <SelectPizza />
        </Route>

        <Route exact path="/customer/information">
          <CustomerInformation />
        </Route>

        <Route exact path="/checkout">
          <Checkout />
        </Route>

        <Route exact path="/admin">
          <Admin />
        </Route>
      </Router>
    </div>
  );
}

export default App;
