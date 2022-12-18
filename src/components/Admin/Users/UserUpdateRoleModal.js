import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const UserUpdateRoleModal = ({ updateRole, setUpdateRole, refetch }) => {

	const [role, setRole] = useState("user")
	const handleMakeAdmin = () => {
		const url = `http://localhost:5000/api/v1/all-users/${updateRole._id}?role=admin`;
		fetch(url, {
			method: "PUT"
		}).then(res => res.json())
			.then(data => {
				if (!data?.status) {
					toast.error("Delete Failed")
				} else {
					refetch()
					toast.success(data?.message);
					setUpdateRole(null)
				}
			})
	}
	const handleMakeUser = () => {
		const url = `http://localhost:5000/api/v1/all-users/${updateRole._id}?role=user`;
		fetch(url, {
			method: "PUT"
		}).then(res => res.json())
			.then(data => {
				if (!data?.status) {
					toast.error("Delete Failed")
				} else {
					refetch()
					toast.success(data?.message);
					setUpdateRole(null)
				}
			})
	}
	return (
		<div >
			<input type="checkbox" id="userDeleteModal" className="modal-toggle" />
			<div className="modal   modal-bottom sm:modal-middle">
				<div className="modal-box bg-gray-200 text-gray-900 border shadow-lg">
					<h3 className="font-bold text-lg">Are you sure to delete!</h3>
					<p >Id: {updateRole._id} </p>
					<p >Name: {updateRole.name} </p>
					<p >Email: {updateRole.email} </p>
					<p >Phone: {updateRole.mobileNumber} </p>

					<div className='flex gap-10 justify-end items-center'>
						<button onClick={handleMakeAdmin} className='btn btn-sm bg-blue-500  hover:bg-red-600 border-none btn-warning text-white'  >Admin</button>
						<button onClick={handleMakeUser} className='btn btn-sm bg-green-500  hover:bg-red-600 border-none btn-warning text-white'  >User</button>

						<div className="modal-action ">
							<label htmlFor="userDeleteModal" className="btn mt-2 ml-5 btn-sm bg-red-500 hover:bg-green-600 border-none btn-warning text-white">Cancel!</label>
						</div>


					</div>
				</div>
			</div>
		</div>
	);

};

export default UserUpdateRoleModal;