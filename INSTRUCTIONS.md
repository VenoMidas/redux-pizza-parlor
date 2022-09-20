## USE BRANCHES

`git checkout -b branch_name_here`
add your feature
`git push origin branch_name_here`
pull request
merge pull request
`git checkout main`
`git pull origin main`
return to top to start new branch

- [X] Mark
## Redux setup
- [X] all in index.js only
- [X] Reducers
    - [X] `cart` `ADDTO_CART` state = [], return [...state, action.payload]
    - [X] `totalCost` `UPDATE_TOTAL` state = 0, return state + action.payload (pizza.price) 
    - [X] `customerName` `SET_CUSTOMERNAME` state = '' return action.payload
    - [X] `streetAddress` `SET_STREETADDRESS` state = '' return action.payload
    - [X] `city` `SET_CITY` state = '' return action.payload
    - [X] `zip` `SET_ZIP` state = '' return action.payload
    - [X] `type` (pickup/delivery) `SET_TYPE` state = 'delivery' (would set default to delivery?) return action.payload
    - [X] `CLEAR_ALL` for all required reducers
- [X] store instance
    - [X] combine reducers
    - [X] apply middleware logger
- [X] Wrap App in provider

- [ ] Oscar
## Router setup
 - in app.jsx only
 - [ ] import { HashRouter as Router, Route, Link } from 'react-router-dom';
 - [ ] import components (even if they don't exist yet)
 - [ ] setup router
    - [ ] set routes
    - [ ] home page '/' is `SelectPizza` component (screen one)
    - [ ] '/customer/information' is `CustomerInformation` component (screen two)
    - [ ] '/checkout' is `Checkout` component (screen three)
    - [ ] '/admin/ displays `Admin` component


## Header Component
- See screen-one.png wireframe
- [ ] Make into separate component
- [ ] Display Total: `cart` from redux
    - [ ] `cart` will be an array of objects (pizzas)
    - [ ] for/of loop on cart and sum price
    - [ ] do not display on step 3 checkout
        - condition rendering? if useLocation === /checkout?
- [ ] Add shopping cart icon to make pretty? (save for MUI later?)

## SelectPizza component
- See screen-one.png wireframe
- [ ] Create component
- [ ] axios `get /api/pizza`
    - [ ] store results in `pizzaArray`
- [ ] map array 
    - [ ] return `PizzaItem` components
- [ ] Button to move to next page `history.push('/customer/information')`

 ## PizzaItem component
 - See screen-one.png wireframe
 - [ ] create component   
 - [ ] display item on page
 - [ ] add or remove pizza - can only add one send pizza object to `ADDTO_CART`
    - see wireframe for example (add changes to remove on click?)

## CustomerInformation component
- see screen-two.png wireframe
- [ ] create component
- [ ] input fields for 
    - [ ] Name `SET_CUSTOMERNAME`
    - [ ] Street Address `SET_STREETADDRESS`
    - [ ] City `SET_CITY`
    - [ ] Zip `SET_ZIP`
    - [ ] Pickup/Delivery option `SET_TYPE`
        - [ ] add helper text to say "choose a type"
- [ ] Button to move to next page `history.push(/checkout)` 

## Checkout component
- see screen-three.png wireframe
- [ ] create component
- display customer info (from redux)
- display type (from redux)
- display name of pizza, cost of each item in table (from redux cart array of objects)
- [ ] display total
- checkout button
    - [ ] `POST /api/order`
    - [ ] navigate `history.push(/)`
    - [ ] clear all reducers `CLEAR_ALL`

## Admin component
- see screen-admin.png wireframe
- [ ] create component
- [ ] get /api/orders
- [ ] store results in ordersArray
- [ ] map ordersArray on a table


## For Everyone
- create database `pizza_parlor`
- copy/paste code from `database.sql` into `pizza_parlor` database
- run code

- npm install
- npm run server
- npm run client in new terminal

- test routes with postman
- GET `/api/pizza`
- POST `/api/order` - see README for example POST data
- GET `/api/order`

## For Meaghan
- Reach out if you have questions with testing on Postman

- [X] Can do all basic setup on one branch (initial_component_setup) or something like that?
- [X] create SelectPizza, PizzaItem, CustomerInformation, Checkout, Admin components
- [X] inside components do a simple <h1> that says this is the _blank_ component
- [X] simple button that does history.push to next page (routes are up top, and will not work until we all merge)

- No fancy styling required, save MUI for later

- We still have questions around total cost. 
    - can we dispatch 2 actions this would remove the need to loop through cart array to sum price for "Total: cost" output
    - click add on the pizza
        - dispatch the entire `pizza` object to ADDTO_CART
            - in redux would return [...state, action.payload]
        - dispatch just `pizza.price` to UPDATE_TOTAL
            - in redux would return sum += action.payload
- for example in the addToCart function...
    - dispatch({ type: 'ADDTO_CART', payload: pizza }, { type: 'UPDATE_TOTAL', payload: pizza.cost })
        - or
    - dispatch({ type: 'ADDTO_CART', payload: pizza });
      dispatch({ type: 'UPDATE_TOTAL', payload: pizza.cost })

    