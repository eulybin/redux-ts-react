import { useState } from 'react';
import { useCartSelector } from '../store/hooks.ts';
import Cart from './Cart.tsx';

export default function Header() {
    const totalCartQuantity = useCartSelector((state) =>
        state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
    );

    const [cartIsVisible, setCartIsVisible] = useState(false);

    function handleOpenCartClick() {
        setCartIsVisible(true);
    }

    function handleCloseCartClick() {
        setCartIsVisible(false);
    }

    return (
        <>
            {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
            <header id='main-header'>
                <div id='main-title'>
                    <img src='logo.png' alt='Elegant model' />
                    <h1>Elegant Redux</h1>
                </div>
                <p>
                    <button onClick={handleOpenCartClick}>Cart ({totalCartQuantity})</button>
                </p>
            </header>
        </>
    );
}
