import React from 'react';

const OrderSingleRow = ({orderHandler}) => {
	return (
		<tr>
			<td><p>1</p></td>
			<td>
				<div className="flex items-center space-x-3">
					<div className="avatar">
						<div className="mask mask-squircle w-12 h-12">
							<img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
						</div>
					</div>
				</div>
			</td>
			<td>
				<p>name</p>
				{/* <span className="badge badge-ghost badge-sm">name</span> */}
			</td>
			<td>id sjkdoijhoioiiopio</td>
			<td>code sjkdoijhoioiiopio</td>
			<td>25000</td>
			<th className=''>
				<button className="btn btn-ghost btn-xs bg-blue-400 mr-3">update</button>
				<label onClick={()=>orderHandler("order btn")} htmlFor="orderAdminModel"  className="btn btn-ghost btn-xs bg-red-500">delete</label>
			</th>
		</tr>
	);
};

export default OrderSingleRow;