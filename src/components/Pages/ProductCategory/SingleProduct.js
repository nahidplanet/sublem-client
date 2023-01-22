
import { HeartIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import useLoadCart from '../../../hooks/useLoadCart';
import { api ,baseUrl} from '../../../urlConfig';


const SingleProduct = ({ data }) => {
	const [products, totalProduct, totalPrice, isLoading, refetch] = useLoadCart();
	const navigate = useNavigate();
	const { _id, name, productImage, price, discount } = data;

	let pathIs = false;
	if (productImage[0].productImagePath?.includes("http")) {
		pathIs = true;
	} else {
		pathIs = false;
	}
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
					// navigate('/login')
				}
			})

	}
	const handleHomeCategoryProductDetails = (id) => {
		navigate(`/home-category/${id}`);
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
				}else{
					toast.error(data?.message)

				}
			})
	}
	return (
		<div className='p-2'>

			<div className="card rounded-none border text-gray-900 ">
				<figure onClick={() => handleHomeCategoryProductDetails(_id)}  className='lg:h-[300px] cursor-pointer'>
					{
						pathIs ? <img className='w-full h-full mx-auto' src={`${productImage[0].productImagePath}`} alt={name} />
							: <img className='w-full h-full mx-auto' src={`${baseUrl}${productImage[0].productImagePath}`} alt={name} />
					}
				</figure>
				<div className="card-body p-2">
					<div className="card-actions m-0 ">
						<p onClick={() => handleHomeCategoryProductDetails(_id)}  className='py-1 my-1 text-lg w-full cursor-pointer' style={{ 'white-space': 'pre-wrap', 'overflow-wrap': 'break-word' }}>{name.length>40? `${name.slice(0,35)}...More`:name}</p>
						<div className='text-xm md:text-md m-0 p-0 flex justify-between font-semibold w-full'>
							<p className='text-red-700 font-semibold'>{parseInt(price) - parseInt(discount)}<span> AED</span></p>
							<p className='font-normal'> <del>{price} <span className='font-semibold'> AED</span> </del></p>
							<p> <span className='text-gray-800 font-bold'>Save: </span>{discount} AED</p>
						</div>
						<div className='text-xm md:text-md flex justify-evenly gap-5  w-full'>
							<button onClick={() => handleHomeCategoryProductDetails(_id)} className="mt-0 border hover:bg-slate-100 p-1 rounded-sm w-5/12" >View</button>
							<button onClick={() => handleAddToCart(_id, (parseInt(price) - parseInt(discount)))} className="mt-0 border hover:bg-slate-100 p-1 rounded-sm w-5/12">Add Cart</button>
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

export default SingleProduct;