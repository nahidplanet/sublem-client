import React from 'react';
import { toast } from 'react-toastify';

const UserDeleteModal = ({deleteUser, setDeleteUser,refetch}) => {
	const handleDeleteUser = () =>{
		const url = `http://localhost:5000/api/v1/all-users/${deleteUser._id}`;
		fetch(url,{
			method:"DELETE"
		}).then(res=>res.json())
		.then(data=>{
			if (!data?.status) {
				toast.error("Delete Failed")
			}else{
				refetch()
				toast.success(data?.message);
				setDeleteUser(null)
			}
		})
	}
	return (
		<div >
				<input type="checkbox" id="userDeleteModal" className="modal-toggle" />
				<div className="modal   modal-bottom sm:modal-middle">
					<div className="modal-box bg-gray-200 text-gray-900 border shadow-lg">
						<h3 className="font-bold text-lg">Are you sure to delete!</h3>
						<p >Id: {deleteUser._id} </p>
						<p >Name: {deleteUser.name} </p>
						<p >Email: {deleteUser.email} </p>
						<p >Phone: {deleteUser.mobileNumber} </p>

						<div className='flex gap-10 justify-end items-center'>
							<table>
								<tbody>
									<tr>
										<td>
											<button onClick={handleDeleteUser} className='btn bg-red-500  hover:bg-red-600 border-none btn-warning text-white'  >Delete</button>
										</td>
										<td>
											<div className="modal-action ">
												<label htmlFor="userDeleteModal" className="btn mt-2 ml-5 bg-green-500 hover:bg-green-600 border-none btn-warning text-white">Cancel!</label>
											</div>
										</td>
									</tr>
								</tbody>
							</table>


						</div>
					</div>
				</div>
			</div>
	);

};

export default UserDeleteModal;