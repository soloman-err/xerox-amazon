import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];

        // step-1: get id
        for (const id in products) {
            // step-2: get the product by using id
            const addedProduct = products.find(product => product.id === id);

            if (addedProduct) {
                // step-3: add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step-4: add the addedProduct to the saved cart
                savedCart.push(addedProduct);
            }
        }
        // step-5: set the cart
        setCart(savedCart);

    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);

        addToDb(product.id)
    }
    return (
        <div className='flex px-[10%] p t-10 justify-between'>
            <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 gid lg:grid-cols-3 xl:grid-cols-4 gap-5 py-5'>
                {
                    products.slice(0, 20).map((product) =>
                        <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Shop;