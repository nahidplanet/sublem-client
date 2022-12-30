
import { HeartIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import useLoadCart from '../../../hooks/useLoadCart';
import { api } from '../../../urlConfig';

const SliderSingleProduct = ({ data }) => {
	const [products, totalProduct, totalPrice, isLoading, refetch] = useLoadCart();
	const navigate = useNavigate();
	const { _id, name, productImage, price, discount } = data;

	const handleAddToCart = (id, price) => {
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
					refetch();
				} else {
					toast.error("Please login to added");
				}
			})

	}
	const handleHomeCategoryProductDetails = (id) => {
		navigate(`/home-category/${id}`);
	}
	const handleWishlist = (productId) => {

		const dataIs = { productId: productId }
		fetch(`${api}/product/wishlist`, {
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
				}else{
					toast.error(data?.message)
				}
			})
	}
	// 
	return (
		<div className='p-2'>
			<div className="card rounded-none border text-gray-900 ">
				<figure onClick={() => handleHomeCategoryProductDetails(_id)} className='cursor-pointer lg:h-[300px] h-[200px]'><img src={`http://localhost:5000/images/product/${productImage[0].productImagePath}`} alt="product_image" /></figure>
				<div className="card-body p-2">
					<div className="card-actions  ">
						<p style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }} className='py-1 my-1 font-semibold text-lg text-wrap' >{`${window.innerWidth < 600 ? name.slice(0, 40) : name.slice(0, 25)}`} </p>
						<div className='text-xm md:text-md flex justify-between font-semibold w-full'>
							<p className='text-red-700 font-semibold text-xs md:text-md'>{parseInt(price) - parseInt(discount)}<span className=' text-sx md:text-md'>AED</span></p>
							<p className='font-normal text-xs md:text-md mx-2'> <del>{price}</del> <span className='font-semibold text-sx md:text-md'> AED</span> </p>
							<p className='text-gray-800 font-bold text-xs md:text-md'>save: {discount} AED</p>
						</div>
						<div className='text-xm md:text-md flex justify-evenly gap-5  w-full'>
							<button onClick={() => handleHomeCategoryProductDetails(_id)} className="mt-0 border hover:bg-slate-100 p-1 rounded-sm w-5/12" >View</button>
							<button onClick={() => handleAddToCart(_id, price)} className="mt-0 border hover:bg-slate-100 p-1 rounded-sm w-5/12">Add Cart</button>
							<button onClick={() => handleWishlist(_id)} className=" mt-0  w-2/12">
								<HeartIcon className='text-gray-600 w-6 h-6'></HeartIcon>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SliderSingleProduct;
