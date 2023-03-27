import React from 'react';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div className='nav
         bg-[#1C2B35] flex flex-col md:flex-row items-center justify-between px-[10%] py-3'>
            <img className='h-full' src={logo} alt="" />
            <div className='flex gap-6 md:gap-10 text-white font-bold text-lg'>
                <a className='hover:text-orange-600' href="/shop">Shop</a>
                <a className='hover:text-orange-600' href="/orders">Orders</a>
                <a className='hover:text-orange-600' href="/inventory">Inventory</a>
                <a className='hover:text-orange-600' href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;