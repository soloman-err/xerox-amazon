import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    console.log(cart)

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='flex px-[10%] pt-10 justify-between'>
            <div className='space-y-3'>
                {
                    cart[0].map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <Cart
                cart={cart[0]}
                handleClearCart={handleClearCart}
            >
                <div className='bg-red-600 text-white font-bold w-full text-center'>
                    <Link to='/checkout'>
                        <button>Proceed Checkout</button>
                    </Link>
                </div>
            </Cart>
        </div>
    );
};

export default Orders;