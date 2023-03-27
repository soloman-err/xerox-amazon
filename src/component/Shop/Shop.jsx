import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='flex px-[10%] p t-10 justify-between'>
            <div className='md:w-[80%] grid grid-cols-1 md:grid-cols-2 gid lg:grid-cols-3 xl:grid-cols-4 gap-5 py-5'>
                {
                    products.slice(0, 20).map((product) =>
                        <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className='bg-orange-300 grid-cols-10 w-[15%]'>
                <h2>Selected Item:{cart.length}</h2>
            </div>
        </div>
    );
};

export default Shop;