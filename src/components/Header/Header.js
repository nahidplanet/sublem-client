import React, { useState } from 'react';
import HeaderBottom from './HeaderBottom';
import HeaderTop from './HeaderTop';
import MainMenu from './MainMenu';
import MobileMenu from './MobileMenu';
import MobileToggleMenu from './MobileToggleMenu';



const Header = () => {
  
    const [open, setOpen] = useState(false);
  
    const handelMobileMenu = () => {
        setOpen(!open)
    }


    return (
        <div className='my-0 py-0 max-w-[1430px] mx-auto  '>

            <nav>
                <HeaderTop></HeaderTop>
                <div>
                    <MainMenu ></MainMenu>
                    <MobileMenu handelMobileMenu={handelMobileMenu} ></MobileMenu>
                </div>
                <HeaderBottom></HeaderBottom>
                <MobileToggleMenu open={open}></MobileToggleMenu>
            </nav>
        </div>

    );
};

export default Header;
















