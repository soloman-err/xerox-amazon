import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])
    return (
        <div className='flex px-32 my-10'>
            <div className='bg-slate-100 w-[80%] grid grid-cols-3 gap-5 p-5'>
                {
                    products.slice(0, 9).map((product) => <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className='bg-slate-200 grid-cols-10 w-[20%]'>
                <h2>cart</h2>
            </div>
        </div>
    );
};

export default Shop;