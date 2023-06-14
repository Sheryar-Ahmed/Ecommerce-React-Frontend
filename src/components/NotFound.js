import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center'>
            <span className='w-full text-center'>404 No Found</span>
            <NavLink to='/'>
                <button className='border border-emerald-400 px-2 py-1'>Back to Home</button>
            </NavLink>
        </div>
    )
}

export default NotFound;
