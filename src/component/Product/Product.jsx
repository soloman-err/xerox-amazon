import React from 'react';

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='hv-[40%]' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings} star</p>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-2xl'>Price: ${price}</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-secondary">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;