import React from 'react';
import { baseUrl } from '../../../urlConfig';

const userOrderModalSingleRow = ({ x }) => {

	return (
		<table className='text-center text-gray-900'>
			<tr className='border-b'>
				<img src={`${baseUrl}/${x?.productId?.productImage[0].productImagePath}`} alt={x?.productId?.name} />
			</tr>
			<tr className='border-b'>
				<thead><th className='p-5'>Product Name</th></thead>
				<td >{x?.productId?.name}</td>
			</tr>
			<tr className='border-b'>
				<thead><th className='p-5'>Category</th></thead>
				<td >{x?.productId?.category}</td>
			</tr>
			<tr className='border-b'>
				<thead><th className='p-5'>Type</th></thead>
				<td >{x?.productId?.type}</td>
			</tr>
			<tr className='border-b'>
				<thead><th className='p-5'>Price</th></thead>
				<td >{x?.productId?.price}</td>
			</tr>
		</table>
	);
};

export default userOrderModalSingleRow;