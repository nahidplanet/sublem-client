import React from 'react';
import { baseUrl } from '../../../urlConfig';

const modalTableSingleRow = ({ item, index }) => {
	const { quantity, productId } = item;
	const { name, category, type, price, code, productImage, color, discount } = productId;
	
	let pathIs = false;
	if (productImage[0].productImagePath?.includes("http")) {
		pathIs = true;
	} else {
		pathIs = false;
	}
	
	return (
		<tr key={item?._id} index={index} className="bg-white border" >
			<th >{1 + (index++)}</th>
			<td className='border-r'>
				<div className='w-10 h-10 my-2'>
					{
						pathIs ? <img src={`${productImage[0].productImagePath}`} alt={name} />
							: <img className='w-full h-full' src={`${baseUrl}/${productImage[0].productImagePath}`} alt={name} />

					}
				</div>
			</td>
			<td className='border-r p-1 text-gray-800'>{name}</td>
			<td className='border-r p-1 text-gray-800'>{category}</td>
			<td className='border-r p-1 text-gray-800'>{type}</td>
			<td className='border-r p-1 text-gray-800'>{price}</td>
			<td className='border-r p-1 text-gray-800'>{quantity}</td>
			<td className='border-r p-1 text-gray-800'>{discount}</td>
			<td className='border-r p-1 text-gray-800'>{code}</td>
			<td className='border-r p-1 text-gray-800'>{color}</td>
			<td className='border-r p-1 text-gray-800'>{price * quantity}</td>
		</tr>
	);
};

export default modalTableSingleRow;