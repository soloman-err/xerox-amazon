import React from 'react';

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    return (
        <>
            <div className="card bg-base-100 shadow-xl border-2 border-slate-200 p-2">
                <figure><img className='' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-lg lg:text-xl font-bold mb-6">{name}</h2>
                    <div className='mt-auto space-y-2'>
                        <div>
                            <p className=''>Manufacturer: {seller}</p>
                            <p className=''>Rating: {ratings} star</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h2 className='md:text-xl font-semibold'>Price: ${price}</h2>
                            <div className="card-actions justify-end">
                                <button className="p-2 text-sm xl:text-lg font-semibold rounded-md btn-warning">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;