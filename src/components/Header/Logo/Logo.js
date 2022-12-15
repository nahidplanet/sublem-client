import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../../assets/header/headerLogo.png'

const logo = () => {
    return (
        <Link to="/" className=''>
            <img className='w-full h-full' src={headerLogo} alt="logo" />
        </Link>
    );
};

export default logo;