import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <>
            <div className="card bg-base-100 shadow-xl border-2 border-slate-300">
                <figure><img className='' src='{img}' alt="Shoes" /></figure>
                <div className='mb-16'>
                    <div className='px-2 py-2'>
                        <div className='space-y-2'>
                            <h2 className="text-lg lg:text-xl font-bold">{name}</h2>
                            <h2 className='md:text-xl font-bold'>Price: ${price}</h2>
                        </div>
                        <div className=''>
                            <p className=''>Manufacturer: {seller}</p>
                            <p className=''>Rating: {ratings} star</p>
                        </div>
                    </div>
                    <button onClick={() => handleAddToCart(props.product)} className='bg-warning hover:bg-orange-200 w-full py-3 rounded-b-lg absolute bottom-0 lg:text-xl font-bold'>
                        Add to cart
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Product;