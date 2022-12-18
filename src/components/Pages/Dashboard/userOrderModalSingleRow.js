import React from 'react';

const userOrderModalSingleRow = ({ x }) => {

	const { name, category, type, price, code, productImage, color, discount } = x?.productId;
	return (
		<table className='text-center text-gray-900'>
			<tr className='border-b'>
				<img src={`http://localhost:5000/images/product/${x?.productId?.productImage[0].productImagePath}`} alt={x?.productId?.name} />
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
			{/* <tr className='border-b'>
									<thead><th className='p-5'>Quantity</th></thead>
									<td >{quantity}</td>
								</tr>
								<tr className='border-b'>
									<thead><th className='p-5'>Total Price</th></thead>
									<td >{total}</td>
								</tr> */}
		</table>
	);
};

export default userOrderModalSingleRow;