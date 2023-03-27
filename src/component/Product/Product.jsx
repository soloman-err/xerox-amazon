import React from 'react';

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    return (
        <>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-lg md:text-xl font-bold">{name}</h2>
                    <p className='text-sm'>Manufacturer: {seller}</p>
                    <p className='text-sm'>Rating: {ratings} star</p>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-lg md:text-xl'>Price: ${price}</h2>
                        <div className="card-actions justify-end">
                            <button className="p-2 rounded-md btn-warning">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;