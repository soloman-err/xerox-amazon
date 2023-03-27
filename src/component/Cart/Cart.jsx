import React from 'react';

const Cart = ({ cart }) => {

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
        <div className='bg-orange-300 grid-cols-10 w-[15%] px-2 sticky'>
            <h2 className='text-center text-lg font-bold'>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <p>Shipping Charge: ${totalShipping.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;