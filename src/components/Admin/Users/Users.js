import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useQuery } from 'react-query';
import axiosInst from '../../axios';
import Loader from '../../Shared/Loader';
import UserDeleteModal from './UserDeleteModal';
import UserSingleRow from './UserSingleRow';
import UserToAdminModal from './UserToAdminModal';

const Users = () => {
	const [modalData, setModalData] = useState(null);

	const [deleteUser, setDeleteUser] = useState(null);

	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const getFacts = () => {
		const res = axiosInst.get(`/all-users?limit=${limit}&page=${page}`).then(res => res);
		return res;
	};
	const { data, isLoading, refetch } = useQuery(['allUsers', limit, page], getFacts);
	const users = data?.data?.users?.users;
	// console.log(users);
	if (isLoading) {
		return <Loader></Loader>
	}
	const handleUserDelete = (user) => {
		setDeleteUser(user)
	}
	
	const handlePageClick = (data) => {
		setPage(data.selected + 1);

	}

	const UserToAdminModal = (data) => {
		setModalData(data);
	}
	return (
		<>
		{
				deleteUser && <UserDeleteModal deleteUser={deleteUser} setDeleteUser={setDeleteUser} refetch={refetch}></UserDeleteModal>
			}
			{
				// updateItem && <UserToAdminModal handleUserDelete={handleUserDelete} setUpdateItem={setUpdateItem} refetch={refetch}></UserToAdminModal>
			}
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
			<div className="overflow-x-auto  ">
				<table className="table table-compact w-full">
					{/* <!-- head --> */}
					<thead>
						<tr>
							<th>
								Number
							</th>
							<th>Full Name</th>
							<th>Mobile</th>
							<th>Email</th>
							<th>Address 1</th>
							<th>Address 2</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody className=' text-white'>
						{
							users?.map((user,index) => <UserSingleRow key={user._id} page={page} limit={limit} index={index}  user={user} handleUserDelete={handleUserDelete} UserToAdminModal={UserToAdminModal}></UserSingleRow>)
						}

					</tbody>
					{/* <!-- foot --> */}
					<tfoot className='bg-gray-800'>
					</tfoot>
				</table>
			</div>
			<div className='flex justify-end mt-5'>
				<div className="flex items-center justify-center  h-6">
					<ReactPaginate
						breakLabel="..."
						nextLabel="next >"
						onPageChange={handlePageClick}
						pageRangeDisplayed={3}
						pageCount={data?.data?.users?.totalPage}
						previousLabel="< previous"
						marginPagesDisplayed={2}
						// renderOnZeroPageCount={null}
						activeLinkClassName="active"
						previousLinkClassName="page-num"
						nextLinkClassName="page-num"
						containerClassName="pagination"
						pageLinkClassName='page-num'
					/>

				</div>
			</div>
		</>
	);
};

export default Users;