import React from 'react';
import { HeartIcon, PhoneIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import { Link, useNavigate } from 'react-router-dom';
import useLoadCart from '../../hooks/useLoadCart';
import { GoogleLogout } from 'react-google-login';


const HeaderTop = () => {
    const navigate = useNavigate();
    const clientId = '625485533795-l18f07it1fdssjfhqoeenq788vpgq1q1.apps.googleusercontent.com'

    const token = localStorage.getItem("activeToken")
    const localUser = localStorage.getItem("Auth_credentials")
    const user = JSON.parse(localUser)
 

    const [catProduct, totalProduct, totalPrice, isLoading, refetch] = useLoadCart(user)
    const handleSignOut = () => {
        localStorage.removeItem("activeToken");
        localStorage.removeItem("Auth_credentials");
        refetch()
        navigate('/login')
    }




    return (
        <div className='hidden lg:block text-white text-sm capitalize'>
            <div className='bg-gray-800 h-12 flex justify-end  gap-5 items-center p-4'>
                <div className='flex items-center justify-start'>
                    <PhoneIcon className='w-4 h-4 mr-1 text-normal'></PhoneIcon>
                    <a
                        href="https://wa.me/+971562572168"
                        className="whatsapp_float"
                        target="_blank"
                        rel="noopener noreferrer"
                    >WhatsApp (+971562572168)
                    </a>

                </div>
                <Link to={'/dashboard/wishlist'}>
                    <div className='flex items-center justify-start'>
                        <HeartIcon className='w-4 h-4 mr-1'></HeartIcon>
                        <p>Wishlist
                        </p>
                    </div>
                </Link>
                <div className='flex items-center justify-start'>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className=" cursor-pointer pr-2">
                            <div className="indicator bg-none">
                                <p className='text-semibold capitalize'>profile</p>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 rounded-md card card-compact dropdown-content w-52 bg-gray-100 shadow">
                            <div className="card-body text-gray-800">
                                <ul className="menu  w-full">
                                    <li className='hover:bg-slate-200 text-gray-900 rounded-md'><Link to={"dashboard/profile"}>Account</Link></li>
                                    <li className='hover:bg-slate-200 text-gray-900 rounded-md'><Link to={"dashboard/wishlist"}>Wishlist</Link></li>
                                    <li className='hover:bg-slate-200 text-gray-900 rounded-md'><Link to={"dashboard/save-cart"}>Save Cart</Link></li>
                                    <li className='hover:bg-slate-200 text-gray-900 rounded-md'><Link to={"dashboard/order-history"}>Order History</Link></li>
                                    {user?.e && token ? <li className='hover:bg-slate-200 text-gray-900 rounded-md'><Link onClick={handleSignOut}> <GoogleLogout
                                        className='m-0 p-0 w-full text-sm'
                                        clientId={clientId}
                                        buttonText="Logout"
                                        onLogoutSuccess={handleSignOut}
                                    /></Link></li> :
                                        <li className='hover:bg-slate-200 text-gray-900 rounded-md'><Link to={"/login"}>Sign In</Link></li>

                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <ShoppingBagIcon className='w-5 h-5 text-normal' />
                                <span className="badge badge-sm indicator-item">{totalProduct ? totalProduct : 0}</span>
                            </div>

                        </label>
                        <div tabIndex={0} className="mt-3 rounded-sm card card-compact dropdown-content w-60 bg-gray-200 border-2 shadow">
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
    );
};

export default HeaderTop;