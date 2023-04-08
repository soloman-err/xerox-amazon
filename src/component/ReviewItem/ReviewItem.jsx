import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const ReviewItem = ({ product, handleRemoveFromCart }) => {
    const { id, img, name, price, shipping } = product;
    return (
        <div className='border p-2 flex justify-between items-center gap-10 rounded'>
            <div className='flex gap-2'>
                <img className='w-20 rounded' src={img} alt="" />
                <div>
                    <h2 className='font-bold'>{name}</h2>
                    <p className='text-sm'>Price: <span className='text-yellow-500 font-bold'>${price}</span></p>
                    <p className='text-sm'>Shipping: <span className='text-yellow-500 font-bold'>${shipping}</span></p>
                </div>
            </div>
            <button onClick={() => handleRemoveFromCart(id)} className='bg-red-100 px-2 py-1 rounded-full'>
                <FontAwesomeIcon className='text-red-500 text-lg' icon={faTrashCan} />
            </button>
        </div>
    );
};

export default ReviewItem;