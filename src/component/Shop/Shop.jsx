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
        console.log(storedCart)
    }, [])

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