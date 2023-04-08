import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div className='nav
         bg-[#1C2B35] flex flex-col md:flex-row items-center justify-between px-[10%] py-3 sticky top-0 z-10'>
            <img className='h-full' src={logo} alt="" />
            <div className='flex gap-6 md:gap-10 text-white font-bold text-lg'>
                <Link className='hover:text-orange-600' to="">Shop</Link>
                <Link className='hover:text-orange-600' to="/orders">Orders</Link>
                <Link className='hover:text-orange-600' to="/inventory">Inventory</Link>
                <Link className='hover:text-orange-600' to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;