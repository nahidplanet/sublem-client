import React from 'react';
import { HeartIcon, PhoneIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';

import { useState } from 'react';
import { useEffect } from 'react';
import auth from '../../../firebaseAuth/firebase.init';
import { getStoredCart } from '../../../utils/manageCartProducat';

const HeaderSecondTop = () => {
	const [signOut, loading, error] = useSignOut(auth);
	const [user, gloading, gerror] = useAuthState(auth);
	const [cart, setCart] = useState([]);
	const [storedCart, setStoredCart] = useState([]);
	const [products, setProducts] = useState([]);
	const navigate = useNavigate;


	useEffect(() => {
		fetch('http://localhost:5000/api/v1/product', {
			method: "GET",
			headers: {
				'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
				'content-type': 'application/json'
			}
		})
			.then(res => res.json())
			.then(data => {
				setProducts(data?.data?.products)
			})
	}, [])

	const handleClick = (product) => {
		const newCart = [...cart, product];
		setCart(newCart)
	}


	useEffect(() => {
		const storedCartd = getStoredCart();
		setStoredCart(storedCartd)
		// const savedCart = [];
		// for (const id in storedCart) {

		// 	const addedProduct = products?.find(product => product._id === id)
		// 	// console.log(addedProduct);
		// 	if (addedProduct) {
		// 		const quantity = storedCart[id];
		// 		// console.log(quantity);
		// 		savedCart.push(addedProduct)
		// 	}
		// }
		// // console.log(cart.length);
	}, [])








	return (
		<div className='hidden lg:block text-white text-sm capitalize'>
			<div className='bg-gray-800 h-12 flex justify-end  gap-5 items-center p-4'>
				<div className='flex items-center justify-start'>
					<PhoneIcon className='w-4 h-4 mr-1 text-normal'></PhoneIcon>
					<p>contact us ( +88 01791180333 )</p>
				</div>
				<div className='flex items-center justify-start'>
					<HeartIcon className='w-4 h-4 mr-1'></HeartIcon>
					<p>Wishlist
					</p>
				</div>
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
									{user ? <li className='hover:bg-slate-200 text-gray-900 rounded-md'><Link onClick={async () => {
										await signOut()
										localStorage.removeItem("accessToken");
										navigate('/login')
									}}> Sign Out</Link></li> :
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
								<span className="badge badge-sm indicator-item">{storedCart.length}</span>
							</div>

						</label>
						<div tabIndex={0} className="mt-3 rounded-sm card card-compact dropdown-content w-60 bg-gray-200 border-2 shadow">
							<div className="card-body">
								<div className="font-bold text-md text-gray-900 flex items-center justify-between"><span>Total Cart Item</span> <span> {'0'}</span></div>
								<div className="font-bold text-md text-gray-900 flex items-center justify-between"><span>Estimated Total:</span> <span>{"00"}AED</span></div>
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

export default HeaderSecondTop;