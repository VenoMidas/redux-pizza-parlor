import { useSelector } from 'react-redux';

const Header = () => {
    const totalCost = useSelector(store => store.totalCost)

    return (
        <header className='App-header'>
            <h1 className='App-title'>Prime Pizza</h1>
            <h1>Cart Total: {totalCost.toFixed(2)}</h1>
        </header>
    );
}

export default Header;