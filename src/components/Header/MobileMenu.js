import React from 'react';
import Logo from './Logo/Logo'
import { GlobeAltIcon, MapPinIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import Search from './Search/Search';
import { Link } from 'react-router-dom';
import useLoadCart from '../../hooks/useLoadCart';
import whatsApp from '../../assets/icon/whatsapp-menu.svg';

const MobileMenu = ({ handelMobileMenu }) => {
    const [catProduct, totalProduct, totalPrice, isLoading, refetch] = useLoadCart()

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
                        <div className='w-6 h-6 text-gray-800'>
                            <a
                                href="https://wa.me/+971562572168"
                                className="whatsapp_float"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><img className='w-full h-full text-gray-800' src={whatsApp} alt="whatsapp" />
                            </a>
                        </div>
                        <p className='text-gray-800 text-sm mt-2'>WhatsApp</p>
                    </div>
                    <div className='mt-1'>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <ShoppingBagIcon className='w-7 h-7  text-normal text-gray-800' />
                                    <span className="badge badge-sm indicator-item">{totalProduct ? totalProduct : 0}</span>
                                </div>
                                <p className='text-gray-800 text-sm mt-2 font-normal capitalize'>Cart</p>


                            </label>
                            <div tabIndex={0} className=" rounded-sm card card-compact dropdown-content w-60 bg-gray-200 border-2 shadow">
                                <div className="card-body">
                                    <div className="font-bold text-md text-gray-900 flex items-center justify-between"><span>Total Cart Item</span> <span> {totalProduct ? totalProduct : '0'}</span></div>
                                    <div className="font-bold text-md text-gray-900 flex items-center justify-between"><span>Estimated Total:</span> <span>{totalPrice ? totalPrice : "00"}AED</span></div>
                                    <div className="card-actions">
                                        <Link to="/cart" className="btn btn-primary btn-block">View cart </Link>
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