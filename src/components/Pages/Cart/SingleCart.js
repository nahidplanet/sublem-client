import React from 'react';
import { useState } from 'react';
import { ArrowLongRightIcon,TrashIcon } from '@heroicons/react/24/solid';

const SingleCart = ({ data,handleCartDeleteItem ,handleProductIncrease,handleProductDecrement}) => {
	const [cartCount, setCartCount] = useState(data.quantity);
	const { price ,productId ,quantity} = data;
	const { name, productImage, category, type } = data.productId;
	
	


	const handleCartDecrease = () => {
		setCartCount(cartCount - 1)
		handleProductDecrement(productId._id,price)
	}
	const handleCartIncrease = () => {
		setCartCount(cartCount + 1);
		handleProductIncrease(productId._id,price)
	}
	return (
		<div className='grid grid-cols-5 gap-3 border-gray-300 border-t border-b mb-5 text-gray-900 py-3'>
			<div className=' flex flex-col justify-center '>
				<img className='' src={`http://localhost:5000/images/product/${productImage[0].productImagePath}`} alt=" " />
			</div>
			<div className='col-span-3'>
				<div className='flex flex-col'>
					<div>
						<h1 className='font-semibold capitalize'>{name}</h1>
						<div className='text-sm flex items-center'>
							<span >{category}</span>
							<span className='mx-2' >< ArrowLongRightIcon className='w-4'></ArrowLongRightIcon></span>
							<span>{type}</span>
						</div>
					</div>
					<div className='flex items-center'>
						<span className='text-gray-900 font-normal text-md mr-2 capitalize'>Quantity -</span>
						<div className='flex items-center justify-center my-3'>
							<div>
								<button disabled={cartCount === 0} onClick={handleCartDecrease} className='border rounded-sm text-gray-900 font-bold text-xl w-10 my-0 h-10 hover:bg-gray-500 hover:text-white'>-</button>
							</div>
							<div>
								<input readOnly value={cartCount} onChange={(e) => setCartCount(toString(e.target.value))} className='w-14 h-10 mx-4 my-0 p-2 bg-white border rounded-sm font-bold' type="number" name="" id="incriecInput" />
							</div>
							<div>
								<button onClick={handleCartIncrease} className='border rounded-sm text-gray-900 font-bold text-xl w-10 my-0 h-10 hover:bg-gray-500 hover:text-white'>+</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col items-center justify-between '>
			<div onClick={()=>handleCartDeleteItem(productId._id)} className='flex justify-center items-center border w-10 h-10 hover:bg-slate-600 hover:text-white cursor-pointer rounded-full transition ease-out duration-900 '>
					<TrashIcon className="w-6 h-6"></TrashIcon>
				</div>
				<div><h1 className='font-semibold text-md'>{price} <span className='font-bold text-md'>AED</span> </h1></div>
			</div>

		</div>
	);
};

export default SingleCart;