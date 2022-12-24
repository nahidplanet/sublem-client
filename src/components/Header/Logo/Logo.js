import React from 'react';
import { Link } from 'react-router-dom';
import main from '../../../assets/header/desktopLogo.jpg'
import mobile from '../../../assets/header/mobileLogo.jpeg'

const logo = () => {
    return (
        <Link to="/" className=''>
            <img className='w-full h-full hidden lg:block' src={main} alt="logo" />
            <img className='w-full h-full  lg:hidden' src={mobile} alt="logo" />
        </Link>
    );
};

export default logo;