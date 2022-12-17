import React from 'react';

const UserSingleRow = ({handleUserDelete, handleUpdate, user, index, page, limit, userHandler }) => {
	const num = (page - 1) * parseInt(limit);
	return (
		<tr>
		<td><p>{1 + num + index++}</p></td>
		{/* <td>
			<div className="flex items-center space-x-3">
				<div className="avatar">
					<div className="mask mask-squircle w-12 h-12">
					{user.productImage[0]?<img src={`http://localhost:5000/images/product/${user?.productImage[0]?.productImagePath}`} alt={user?.name} />:"image"}
					</div>
				</div>
			</div>
		</td> */}
		{/* <td>
			<p>name</p>
			<span className="badge badge-ghost badge-sm">name</span>
		</td> */}
		<td>{user?.fullName}</td>
		<td>{user?.mobileNumber}</td>
		<td>{user?.email}</td>
		<td>{user?.addressOne}</td>
		<td>{user?.addressTwo}</td>
		<th className=''>
			<button className="btn btn-ghost btn-xs bg-blue-400 mr-3">update</button>
			<label onClick={()=>handleUserDelete(user)} htmlFor="userDeleteModal" className="btn btn-ghost btn-xs bg-red-500">delete</label>
		</th>
	</tr>
	);
};

export default UserSingleRow;