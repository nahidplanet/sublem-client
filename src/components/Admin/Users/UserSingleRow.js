import React from 'react';

const UserSingleRow = ({handleUserDelete, handleUpdate, user, index, page, limit, userHandler }) => {
	const num = (page - 1) * parseInt(limit);
	return (
		<tr>
		<td><p>{1 + num + index++}</p></td>
		<td>{user?.fullName}</td>
		<td>{user?.mobileNumber}</td>
		<td>{user?.email}</td>
		<td>{user?.addressOne}</td>
		<td>{user?.addressTwo}</td>
		<th className=''>
			<button className="btn btn-ghost btn-xs bg-blue-400 mr-3">{user?.role}</button>
			<label onClick={()=>handleUserDelete(user)} htmlFor="userDeleteModal" className="btn btn-ghost btn-xs bg-green-500">Update Role</label>
		</th>
	</tr>
	);
};

export default UserSingleRow;