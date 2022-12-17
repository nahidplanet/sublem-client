import React from 'react';

const modalTableSingleRow = ({ item, index }) => {
	const { quantity, productId } = item;
	const { name, category, type, price, code, productImage, color, discount } = productId;
	const { productImagePath } = productImage;
	return (
		<tr key={item?._id} index={index} className="bg-white border" >
			<th >{1 + (index++)}</th>
			<td className='border-r'>
				<div className='w-10 h-10 my-2'>
					<img className='w-full h-full' src={`http://localhost:5000/images/product/${productImage[0].productImagePath}`} alt={name} />
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