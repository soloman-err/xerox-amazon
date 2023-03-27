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
        <div className='flex px-[10%] my-10 bg-slate-300'>
            <div className='md:w-[80%] grid grid-cols-1 md:grid-cols-2 gid lg:grid-cols-3 xl:grid-cols-4 gap-10 py-5'>
                {
                    products.slice(0, 12).map((product) => <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className='bg-slate-200 grid-cols-10 w-[20%]'>
                <h2>cart</h2>
            </div>
        </div>
    );
};

export default Shop;