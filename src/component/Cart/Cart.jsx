import React from 'react';

const Cart = ({ cart, handleClearCart, children }) => {
    console.log(cart)

    // Accessing single product of cart:
    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart) {
        totalPrice += product.price;
        totalShipping += product.shipping;
    }
    const tax = totalPrice * 5 / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='grid-cols-10 w-[15%] px-2'>
            <div className='sticky top-10 bg-warning px-2 py-10 rounded'>
                <h2 className='text-center text-lg font-bold'>Order Summary</h2>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${totalPrice.toFixed(2)}</p>
                <p>Shipping Charge: ${totalShipping.toFixed(2)}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h5 className='font-bold'>Grand Total: ${grandTotal.toFixed(2)}</h5>
                <div className='space-y-2'>
                    <button className='bg-red-600 text-white w-full font-bold' onClick={handleClearCart}>Clear Cart</button>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Cart;