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

- [X] Oscar
## Router setup
 - in app.jsx only
 - [x] import { HashRouter as Router, Route, Link } from 'react-router-dom';
 - [x] import components (even if they don't exist yet)
 - [x] setup router
    - [x] set routes
    - [x] home page '/' is `SelectPizza` component (screen one)
    - [x] '/customer/information' is `CustomerInformation` component (screen two)
    - [x] '/checkout' is `Checkout` component (screen three)
    - [x] '/admin/ displays `Admin` component


## Header Component
- See screen-one.png wireframe
- [X] Make into separate component
- [ ] Display Total: `cart` from redux
    - [ ] `cart` will be an array of objects (pizzas)
    - [ ] for/of loop on cart and sum price
    - [ ] do not display on step 3 checkout
        - condition rendering? if useLocation === /checkout?
- [ ] Add shopping cart icon to make pretty? (save for MUI later?)


- [ ] MARK To Do
## SelectPizza component
- See screen-one.png wireframe
- [X] Create component
- [ ] axios `get /api/pizza`
    - [ ] store results in `pizzaArray`
- [ ] map array 
    - [ ] return `PizzaItem` components
- [ ] Button to move to next page `history.push('/customer/information')`

 ## PizzaItem component
 - See screen-one.png wireframe
 - [X] create component   
 - [ ] display item on page

 ----- Part 1 Above, Part 2 Below ---

 - [ ] add or remove pizza - can only add one, send pizza object to `ADDTO_CART` and price to `UPDATE_TOTAL`
        - onClick call function addToCart (name can be whatever you want)
            - dispatch({ type: 'ADDTO_CART', payload: pizza })
            - dispatch({ type: 'UPDATE_TOTAL', payload: pizza.cost }) 
                - keep an eye on type (string or number) for math to work
        - see wireframe for example (add changes to remove on click?)
        - conditional rendering? for add/remove button? - simple toggle is fine to start



- [ ] Oscar part 1
## CustomerInformation component
- see screen-two.png wireframe
- [X] create component
- [ ] input fields for 
    - [ ] Name `SET_CUSTOMERNAME`
    - [ ] Street Address `SET_STREETADDRESS`
    - [ ] City `SET_CITY`
    - [ ] Zip `SET_ZIP`
    - [ ] Pickup/Delivery option `SET_TYPE`
        - [ ] add helper text to say "choose a type"
- [ ] Button to move to next page `history.push(/checkout)` 

- [ ] Oscar part 2
## Checkout component
- see screen-three.png wireframe
- [X] create component
- display customer info (from redux)
- display type (from redux)
- display name of pizza, cost of each item in table (from redux cart array of objects)
- [ ] display total
- checkout button
    - [ ] `POST /api/order`
    - [ ] navigate `history.push(/)`
    - [ ] clear all reducers `CLEAR_ALL`

- [ ] Meaghan To Do
## Admin component
- see screen-admin.png wireframe
- [X] create component
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

- We CAN send 2 dispatches
        - dispatch the entire `pizza` object to ADDTO_CART
            - in redux would return [...state, action.payload]
        - dispatch just `pizza.price` to UPDATE_TOTAL
            - in redux would return state + action.payload
    - function addToCart (name can be whatever you want)
    - dispatch({ type: 'ADDTO_CART', payload: pizza }); - (sends entire pizza object to the cart)
      dispatch({ type: 'UPDATE_TOTAL', payload: pizza.cost }) - (sends just the cost to the total cost reducer)

    