import { HeartIcon } from '@heroicons/react/24/solid';
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { useParams } from 'react-router';
import axios from 'axios';
import Loader from '../../Shared/Loader';
import './ProductDetails.css'
import useLoadCart from '../../../hooks/useLoadCart';
import { toast } from 'react-toastify';
import PageTitle from '../../Shared/PageTitle';
import { api, baseUrl } from '../../../urlConfig';

const ProductDetails = () => {
	const [loading, setLoading] = useState(false)
	const [product, setProduct] = useState([])
	const [cartCount, setCartCount] = useState(0)
	const [catProduct, totalProduct, totalPrice, sisLoading, refetch] = useLoadCart()


	let pathIs = false;

	const { id } = useParams();

	useEffect(() => {
		setLoading(true)
		axios.get(`${api}/product/${id}`)
			.then(data => {
				setProduct(data?.data?.data)
				setLoading(false)

			})
	}, [id])


	if (loading || product.length < 1) {
		return <Loader></Loader>
	}
	const { _id, name, productImage, code, color, feature, category, type, sortDescription, longDescription, price, discount } = product[0];
	if (productImage[0].productImagePath?.includes("http")) {
		pathIs = true;
	} else {
		pathIs = false;
	}

	const handleCartDecrease = () => {
		setCartCount(cartCount - 1)
	}
	const handleCartIncrease = () => {
		setCartCount(cartCount + 1)
	}




	const handleAddToCart = (_id, price, cartCount) => {

		const addToCartInfo = { productId: _id, price, quantity: cartCount }

		fetch(`${api}/product/cart/productDetails`, {
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
					toast.success("Add To cart");

					refetch()
				} else {
					toast.error("Login Required");

				}
			})
	}

	const handleWishlist = (productId) => {

		const url = `${api}/product/wishlist`;
		const dataIs = { productId: productId }
		fetch(url, {
			method: "POST",
			headers: {
				'authorization': `Bearer ${localStorage.getItem('activeToken')}`,
				'content-type': 'application/json'
			},
			body: JSON.stringify(dataIs)
		})
			.then(res => res.json())
			.then(data => {
				if (data.status) {
					toast.success(data?.message)
				} else {
					toast.error(data?.message)
				}
			})
	}
	// slider single image 
	const settings = {
		customPaging: function (i) {
			return (
				<div >
					{
						pathIs ? <img src={`${productImage[i].productImagePath}`} alt={name} />
							: <img src={`${baseUrl}${productImage[i].productImagePath}`} alt={name} />
					}
				</div>
			);
		},
		dots: true,
		dotsClass: "slick-dots slick-thumb",
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};
	return (
		<>
			<PageTitle title={"Product Details"}></PageTitle>
			<div className='min-h-screen w-full'>
				<div className='h-10 flex items-center mx-10 capitalize text-md font-semibold border-b'>
					<span className=' text-normal capitalize italic text-gray-600'>Product/ {category}/ {type}/ {name}</span>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-5  mt-10 lg:px-14 px-6 '>
					<div className=" col-span-3 p-10">
						<Slider {...settings}>
							{
								productImage?.map((item, index) => <div className='lg:w-[600px] lg:h-[450px] border' key={index}>

									{
										pathIs ? <img className='w-full h-full' src={`${productImage[index].productImagePath}`} alt={name} />
											: <img className='w-full h-full' src={`${baseUrl}${productImage[index].productImagePath}`} alt={name} />
									}
								</div>)
							}
						</Slider>
					</div>
					<div className='col-span-2 text-center text-gray-900 my-5'>
						<div>
							<h1 className='font-normal text-xl capitalize' style={{ 'white-space': 'pre-wrap', 'overflow-wrap': 'break-word' }}>{name}</h1>
							<h1 className='font-semibold my-2 flex justify-around px-14'>
								<span className='text-red-600'>{discount ? price - discount : '00'} AED</span>
								<del className='text-gray-600'>{price}AED </del>
								<span>Save {discount ? discount : '00'}AED</span>
							</h1>
							<p className='text-lg my-2'>Code:{code}</p>
							<p className=' text-black h-auto bg-transparent w-full ' style={{ 'white-space': 'pre-wrap', 'overflow-wrap': 'break-word' }}> {sortDescription}</p>
							<p className='mt-5 text-lg font-semibold'>Prices are inclusive of Tax/VAT</p>
							<p className=' text-lg font-semibold'>Delivery Within 48 hours*</p>
							<div className=''>
								<div>
									{
										color && <h1 className={` text-md font-semibold `}>Color<span className='w-8 h-4 border inline-block ml-2 my-0' style={{ background: `${color}` }}></span></h1>

									}
								</div>								<div>
									<div className='flex justify-center items-center'>
										<div>
											<div className='flex justify-center items-center mt-10'>
												<div>
													<button disabled={cartCount < 1} onClick={handleCartDecrease} className='mt-0 border w-10 h-10 bg-white text-gray-900 text-2xl font-bold rounded-sm mr-2 hover:bg-gray-200  '>-</button>
												</div>
												<div>
													<input value={cartCount} readOnly onChange={(e) => setCartCount(toString(e.target.value))} className='mt-[-13px] border w-12 h-10 bg-white text-gray-900 text-xl font-bold rounded-sm mr-2 px-2' type="number" />
												</div>
												<div>

													<button onClick={() => handleCartIncrease(_id, (parseInt(price) - parseInt(discount)))} className='mt-0 border w-10 h-10 bg-white text-gray-900 text-2xl font-bold rounded-sm mr-2 hover:bg-gray-200  '>+</button>
												</div>
											</div>
										</div>
									</div>
									{/* add to cart button */}
									<button disabled={cartCount === 0} onClick={() => handleAddToCart(_id, (parseInt(price) - parseInt(discount)), cartCount)} className='block mx-auto my-5 rounded-sm hover:bg-gray-300 bg-gray-200 w-7/12 py-4 text-lg text-gray-800 capitalize font-semibold text-center'>add to cart</button>
									{/* WishList */}
									<div className='w-full'>
										<button onClick={() => handleWishlist(_id)} className='flex items-center mx-auto text-green-600 underline font-normal px-3 py-2 text-xl'>
											<HeartIcon className='w-6 h-6 mr-3 ' />Add to wishlist
										</button>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
				<div> 	{
					feature && <>
						<h1 className='text-2xl font-semibold capitalize text-gray-900 ml-10 mb-2'>Product Feature :</h1>
						<div className='mx-10 mb-10 border bg-gray-50'>

							<div readOnly value={longDescription} className='p-10 text-black h-auto bg-transparent w-full ' style={{ 'white-space': 'pre-wrap', 'overflow-wrap': 'break-word' }}>
								{feature}
							</div>
						</div>
					</>
				}
				</div>
				<div>
					<h1 className='text-2xl font-semibold capitalize text-gray-900 ml-10 mb-2'>Product details :</h1>
					<div className='mx-10 mb-10 border bg-gray-50'>

						<div readOnly value={longDescription} className='p-10 text-black h-auto bg-transparent w-full ' style={{ 'white-space': 'pre-wrap', 'overflow-wrap': 'break-word' }}>
							{longDescription}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDetails;