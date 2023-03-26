import React from 'react';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div className='nav
         bg-slate-700 flex items-center justify-between px-32 py-3'>
            <img className='h-full' src={logo} alt="" />
            <div className='flex gap-10 text-white font-bold text-lg'>
                <a className='hover:text-orange-600' href="/shop">Shop</a>
                <a className='hover:text-orange-600' href="/orders">Orders</a>
                <a className='hover:text-orange-600' href="/inventory">Inventory</a>
                <a className='hover:text-orange-600' href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;