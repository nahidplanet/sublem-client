import React from 'react';
import Logo from './Logo/Logo'
import { GlobeAltIcon, MapPinIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import Search from './Search/Search';

const MobileMenu = ({ handelMobileMenu }) => {


    return (
        <div className='lg:hidden'>
            <div className='w-full h-22 pt-3 px-3 py-2 lg:py-0 flex items-center'>
                <div className=' grid grid-cols-5 gap-10'>
                    <div className='flex flex-col justify-center items-center cursor-pointer' >
                        <label className=" swap swap-rotate">
                            <input type="checkbox" onClick={() => handelMobileMenu()} />
                            <svg className="text-gray-800 swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                            <svg className="text-gray-800 swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                        </label>
                        <p className='text-gray-800 text-sm'>Menu</p>
                    </div>
                    <div className='flex flex-col justify-center items-center cursor-pointer'>
                        <p><GlobeAltIcon className='w-6 h-6 text-gray-800' /></p>
                        <p className='text-gray-800 text-sm mt-2'>language</p>
                    </div>
                    <Logo className="w-full h-full"></Logo>
                    <div className='flex flex-col justify-center items-center cursor-pointer'>
                        <p><MapPinIcon className='w-6 h-6 text-gray-800' /></p>
                        <p className='text-gray-800 text-sm mt-2'>store</p>
                    </div>
                    <div className=''>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle pr-2">
                                <div className="indicator bg-none">
                                    <ShoppingBagIcon className='w-6 h-6 text-gray-800' />
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                                <p className=' text-gray-800 font-normal text-sm mt-2'>Cart</p>
                            </label>
                            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-gray-100 rounded-none shadow">
                                <div className="card-body text-gray-800">
                                    <span className="font-bold text-lg">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
            <Search className='w-full'></Search>
        </div>
    );
};

export default MobileMenu;