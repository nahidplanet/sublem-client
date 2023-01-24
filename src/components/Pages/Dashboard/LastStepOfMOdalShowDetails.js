import React from 'react';
import { baseUrl } from '../../../urlConfig';

const LastStepOfMOdalShowDetails = ({ i, x }) => {
	const images = x?.productId;
	let pathIs = false;
	if (images?.productImage[0].productImagePath?.includes("http")) {
		pathIs = true;
	} else {
		pathIs = false;
	}
	return (
		<div className='text-center text-gray-900 z-100'>
			<h1 className='text-xl text-center capitalize font-semibold my-3'>Order History</h1>
			<div className='border-b w-full'>
				{
					pathIs ? <img src={`${images?.productImage[0].productImagePath}`} alt={images?.name} />
						: <img src={`${baseUrl}/${images?.productImage[0].productImagePath}`} alt={images?.name} />
				}
			</div>
			<div className='border-b flex justify-between items-center'>
				<div className='py-3'>Product Name</div>
				<div >{x?.productId?.name}</div>
			</div >
			<div className='border-b flex justify-between items-center'>
				<div className='py-3'>Category</div>
				<div >{x?.productId?.category}</div>
			</div >
			<div className='border-b flex justify-between items-center'>
				<div className='py-3'>Type</div>
				<div >{x?.productId?.type}</div>
			</div >
			<div className='border-b flex justify-between items-center'>
				<div className='py-3'>Price</div>
				<div >{x?.productId?.price}</div>
			</div >

		</div>
	);
};

export default LastStepOfMOdalShowDetails;