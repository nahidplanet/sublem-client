import React, { useEffect, useState } from 'react';
import HeaderBottom from './HeaderBottom';
import HeaderTop from './HeaderTop';
import MainMenu from './MainMenu';
import MobileMenu from './MobileMenu';
import MobileNavbar from './Navbar/MobileNavbar';



const Header = () => {

    const [open, setOpen] = useState(false);
    const handelMobileMenu = () => {
        setOpen(!open)
    }

    return (
        <div className='my-0 py-0 max-w-[1430px] mx-auto sticky '>

            <nav>
                <HeaderTop></HeaderTop>
                <div>
                    <MobileMenu handelMobileMenu={handelMobileMenu}></MobileMenu>
                    <MainMenu ></MainMenu>
                </div>
                <HeaderBottom></HeaderBottom>
                <MobileNavbar open={open}></MobileNavbar>
            </nav>
        </div>

    );
};

export default Header;
















