import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const totalCost = useSelector(store => store.totalCost)
    const location = useLocation();

    return (
        <header className='App-header'>
            <h1 className='App-title'>Prime Pizza</h1>
            {
                location.pathname === '/checkout' || location.pathname === '/admin' ? (
                    // if pathname = /checkout or /admin show nothing
                    <></>
                ) : (
                    // if pathname != /checkout or /admin show cart total
                    <h1>Cart Total: {totalCost.toFixed(2)}</h1>
                )
            }

        </header>
    );
};

export default Header;