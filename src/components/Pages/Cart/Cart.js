import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SingleCart from './SingleCart';
import { ChevronDownIcon, ChevronRightIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebaseAuth/firebase.init';
import useLoadCart from '../../../hooks/useLoadCart';
import Loader from '../../Shared/Loader';
import PageTitle from '../../Shared/PageTitle';
import { api } from '../../../urlConfig';

const Cart = () => {
	const [user] = useAuthState(auth)
	const [open, setOpen] = useState(false)
	const [catProduct, totalProduct, totalPrice, isLoading, refetch] = useLoadCart(user)
	const navigate = useNavigate()

	if (isLoading) {
		<Loader></Loader>
	}
	


	const handleProductIncrease = (id, price) => {
		const addToCartInfo = { productId: id, price }
		fetch(`${api}/product/cart/user`, {
			method: "POST",
			headers: {
				'authorization': `Bearer ${localStorage.getItem('activeToken')}`,
				'content-type': 'application/json'
			},
			body: JSON.stringify(addToCartInfo)
		})
			.then(res => res.json())
			.then(data => {
				if (data.status) {
					toast.success("Product added successful");
					refetch()
				} else {
					toast.error("Login Required");
					
				}
			})


	}
	// product increment 
	const handleProductDecrement = (id, price) => {
		const addToCartInfo = { productId: id, price }
		fetch(`${api}/product/cart/user/decrement`, {
			method: "POST",
			headers: {
				'authorization': `Bearer ${localStorage.getItem('activeToken')}`,
				'content-type': 'application/json'
			},
			body: JSON.stringify(addToCartInfo)
		})
			.then(res => res.json())
			.then(data => {
				if (data.status) {
					toast.success("Product added successful");
					refetch()
				} else {
					toast.error("Login Required");
					navigate('/login')
				}
			})

	}

	const handleCartDeleteItem = async (id) => {
		// cartDelete(id)
		fetch(`${api}/product/cart/delete/${id}`, {
			method: 'DELETE',
			headers: {
				"authorization": `Bearer ${localStorage.getItem('activeToken')}`
			},
		}).then(response => response.json())
			.then(data => {
				if (!data.status) {
					toast.error("Delete failed")
				} else {
					toast.success("Delete successful");
					refetch()
				}
			})

	}
	const handlePressOrder = () => {
		navigate('/checkout/details')

	}
	return (
		<div className='min-h-screen'>
			<PageTitle title={"Cart"}></PageTitle>
			<h1 className='text-gray-900 font-bold capitalize text-4xl my-4 text-center'>My Bag</h1>
			<div className='w-[85%] mx-auto'>
				<div className='border border-black px-3 py-2'>
					<h1 className='text-gray-900 font-semibold capitalize text-lg text-left'>Prices are inclusive of Tax/VAT</h1>
				</div>
				{/* cart page  */}
				<div className='grid grid-cols-1 lg:grid-cols-5 m-2'>
					<div className='col-span-3 m-2'>
						{/* single cart  */}

						{catProduct?.cartItems.length <1 &&
							<div className='h-full'>
								<div className='border flex flex-col justify-center items-center h-full'>
									<h1 className='text-gray-800 capitalize text-3xl font-bold'>Your Bag is blank</h1>
									<div>
										<Link to={'/'} className='text-gray-800 capitalize text-xl font-semibold flex items-center underline'><span>go to shopping</span> <ShoppingBagIcon className='w-10 h-10 text-green-500' /> </Link>
									</div>
								</div>
							</div>
						}

						{
							catProduct?.cartItems?.map(item => <SingleCart
								key={item?.productId?._id}
								data={item}
								handleCartDeleteItem={handleCartDeleteItem}
								handleProductIncrease={handleProductIncrease}
								handleProductDecrement={handleProductDecrement}
							></SingleCart>)
						}

					</div>
					<div className='col-span-2'>
						<div className='border border-gray-300 ml-3 m-2 p-5 pt-2'>
							<h1 className='text-xl text-center text-gray-900 font-bold capitalize mt-2'>cart details</h1>
							<table className='text-gray-800 w-full text-md font-semibold capitalize'>
								<tr className='flex justify-between my-3'>
									<td>total item</td>
									<td>{totalProduct ? totalProduct : "0"}</td>
								</tr>
								<tr className='flex justify-between my-3'>
									<td>Estimated Delivery</td>
									<td>FREE</td>
								</tr>
								<tr className='flex justify-between my-3'>
									<td>Estimated Total</td>
									<td>{totalPrice ? totalPrice : '00'} AED</td>
								</tr>
								<tr className='flex justify-between my-3 cursor-pointer'>
									<td className='text-sm mt-2 mb-0' onClick={() => setOpen(!open)}>
										<span>{open ? <ChevronDownIcon className='w-4 h-4 inline '></ChevronDownIcon> : <ChevronRightIcon className='w-4 h-4 inline'></ChevronRightIcon>
										}</span> Got a discount code?</td>
								</tr>
							</table>
							<div className={`${open ? "block" : "hidden"} flex items-center w-full`}>
								<input type="text" placeholder='Please Enter Your Voucher Code' className='p-1 w-full  bg-white text-gray-800 border border-r-0 rounded-l' /> <button className='bg-black ml-[-2px] text-white text-md p-1  my-6 rounded-r'>Apply</button>
							</div>
							{/* { ? } */}
							<button disabled={catProduct?.cartItems.length <1} onClick={handlePressOrder} className='text-white text-center rounded-sm bg-green-600 hover:bg-green-700 w-full px-3 py-2 border border-gray-500 font-bold text-lg block' >Continue</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;