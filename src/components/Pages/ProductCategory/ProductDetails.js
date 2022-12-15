import { HeartIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Slider from "react-slick";
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import axios from 'axios';
import Loader from '../../Shared/Loader';
import './ProductDetails.css'
import { useState } from 'react';
import axiosInst from '../../axios';
import { addToDb } from '../../../utils/manageCartProducat';

const ProductDetails = () => {
	const [cartCount, setCartCount] = useState(0)
	var baseUrl = `http://localhost:5000/images/product/`;
	const { id } = useParams();
	const { isLoading, data } = useQuery(
		['singleProduct'], () => axios.get(`http://localhost:5000/api/v1/product/${id}`)
			.then(data => data)
	)
	if (isLoading) {
		return <Loader></Loader>
	}
	const { _id, name, productImage, code, category, type, sortDescription, longDescription, price, discount } = data?.data?.data[0];
	const handleCartDecrease = () => {
		setCartCount(cartCount - 1)
	}
	const handleCartIncrease = (id) => {
		addToDb(id)
		setCartCount(cartCount + 1)
	}
	const handleAddToCart = (productId, price, quantity) => {

		const product = { productId, price, quantity }
		axiosInst.post(`/product/cart/add`, { productId, price, quantity }).then(res => {
			console.log(res);
		})
	}
	const settings = {
		customPaging: function (i) {
			return (
				<div >
					<img src={`${baseUrl}${productImage[i].productImagePath}`} alt={name} />`
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
			<div className='min-h-screen w-full'>
				<div className='h-10 flex items-center mx-10 capitalize text-md font-semibold border-b'>
					<span className=' text-normal capitalize italic text-gray-600'>Product/ {category}/ {type}/ {name}</span>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-5  mt-10 lg:px-14 px-6 '>
					<div className=" col-span-3 p-10">
						<Slider {...settings}>
							{
								productImage.map((item, index) => <div className='lg:w-[600px] lg:h-[450px] border' key={index}>
									<img className='w-full h-full' src={baseUrl + item.productImagePath} alt={name} />
								</div>)
							}
						</Slider>
					</div>
					<div className='col-span-2 text-center text-gray-900 my-5'>
						<div>
							<h1 className='font-normal text-xl capitalize'>{name}</h1>
							<h1 className='font-semibold my-2 flex justify-around px-14'>
								<span className='text-red-600'>{discount ? price - discount : '00'} AED</span>
								<del className='text-gray-600'>{price}AED </del>
								<span>Save {discount ? discount : '00'}AED</span>
							</h1>
							<p className='text-lg my-2'>Code:{code}</p>
							<p> {sortDescription}</p>
							<p className='mt-5 text-lg font-semibold'>Prices are inclusive of Tax/VAT</p>
							<p className=' text-lg font-semibold'>Delivery Within 48 hours*</p>
							<div className=''>
								<h1 className='text-2xl font-semibold text-green-600 '>2 In Stock Now</h1>
								<div>
									<div className='flex justify-center items-center'>
										<table>
											<tbody>
												<tr>
													<td>
														<button onClick={handleCartDecrease} className='border rounded-sm text-gray-900 font-bold text-xl w-10 h-10 hover:bg-gray-500 hover:text-white'>-</button>
													</td>
													<td>
														<input value={cartCount} onChange={(e) => setCartCount(toString(e.target.value))} className='w-14 h-10 mx-4 p-2 bg-white border rounded-sm font-bold' type="number" name="" id="incriecInput" />
													</td>
													<td>
														<button onClick={()=>handleCartIncrease(_id)} className='border rounded-sm text-gray-900 font-bold text-xl w-10 h-10 hover:bg-gray-500 hover:text-white'>+</button>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
									<button onClick={() => handleAddToCart(_id, price, cartCount)} className='block mx-auto my-5 rounded-sm hover:bg-gray-300 bg-gray-200 w-7/12 py-4 text-lg text-gray-800 capitalize font-semibold text-center'>add to cart</button>
									{/* WishList */}
									<div className='w-full'>
										<button className='flex items-center mx-auto text-green-600 underline font-normal px-3 py-2 text-xl'>
											<HeartIcon className='w-6 h-6 mr-3 ' />Add to wishlist
										</button>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
				<h1 className='text-2xl font-semibold capitalize text-gray-900 ml-10 mb-2'>Product details :</h1>
				<div className='mx-10 mb-10 border bg-gray-50'>

					<div className='p-10 text-black '>
						{longDescription}
					</div>
				</div>
				<div className='h-18'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, rem?
				</div>
			</div>
		</>
	);
};

export default ProductDetails;