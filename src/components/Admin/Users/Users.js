import React, { useState } from 'react';
import UserSingleRow from './UserSingleRow';

const Users = () => {
	const [modalData, setModalData] = useState(null);

	const userHandler = (data) => {
		setModalData(data);
	}
	return (
		<>
			<div>
				<input type="checkbox" id="userAdminModal" className="modal-toggle" />
				<div className="modal modal-bottom sm:modal-middle">
					<div className="modal-box">
						<h3 className="font-bold text-lg">Are you sure to delete!</h3>
						<p className="py-4">Name: {modalData}</p>
						<div className="modal-action">
							<label htmlFor="userAdminModal" className="btn">Yay!</label>
						</div>
					</div>
				</div>
			</div>
			<div className="overflow-x-auto w-full ">
				<table className="table w-full ">
					{/* <!-- head --> */}
					<thead>
						<tr>
							<th>
								Number
							</th>
							<th>Image</th>
							<th>Name</th>
							<th>ID</th>
							<th>Code</th>
							<th>Price</th>
							<th>action</th>
						</tr>
					</thead>
					<tbody className=' text-white'>

						<UserSingleRow userHandler={userHandler}></UserSingleRow>
					</tbody>
					{/* <!-- foot --> */}
					<tfoot className='bg-gray-800'>
					</tfoot>
				</table>
			</div>
			<div className='flex justify-end'>
				<div className=" flex items-center justify-center">
					<button className=" bg-gray-600 text-white border-r py-2 px-3 font-bold text-sm  cursor-pointer ">1</button>
					<button className=" bg-gray-600 text-white border-r py-2 px-3 font-bold text-sm  cursor-pointer ">2</button>
					<button className=" bg-gray-600 text-white border-r py-2 px-3 font-bold text-sm  cursor-pointer ">3</button>
					<button className=" bg-gray-600 text-white border-r py-2 px-3 font-bold text-sm  cursor-pointer ">4</button>
				</div>
			</div>
		</>
	);
};

export default Users;