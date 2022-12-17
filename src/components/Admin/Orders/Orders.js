import axios from 'axios';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useQuery } from 'react-query';
import axiosInst from '../../axios';
import Loader from '../../Shared/Loader';
import OrderSingleRow from './OrderSingleRow';
import OrderUpdateModal from './OrderUpdateModal';

const Orders = () => {
	const [modalData, setModalData] = useState(null);

	const [deleteItem, setDeleteItem] = useState(null);
	const [updateItem, setUpdateItem] = useState(null);

	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const getFacts = () => {
		const res = axiosInst.get(`/receive-all-order?limit=${limit}&page=${page}`).then((res) => res)
		return res;
	};
	// 
	const { data, isLoading, refetch } = useQuery(['receiveAllOrder', limit, page], getFacts);
	const orders = data?.data?.orders;
	// console.log("ssssssssssssssss", ?.orders);
	if (isLoading) {
		return <Loader></Loader>
	}
	const handleDelete = (item) => {
		setDeleteItem(item)
	}
	const handleUpdate = (item) => {
		setUpdateItem(item)

	}
	const handlePageClick = (data) => {
		setPage(data.selected + 1);

	}

	return (
		<>

			{
				updateItem && <OrderUpdateModal updateItem={updateItem} setUpdateItem={setUpdateItem} refetch={refetch}></OrderUpdateModal>
			}
			<div>
				<input type="checkbox" id="orderAdminModel" className="modal-toggle" />
				<div className="modal modal-bottom sm:modal-middle">
					<div className="modal-box">
						<h3 className="font-bold text-lg">Are you sure to delete!</h3>
						<p className="py-4">Name: {modalData}</p>
						<div className="modal-action">
							<label htmlFor="orderAdminModel" className="btn">Yay!</label>
						</div>
					</div>
				</div>
			</div>
			<div className="overflow-x-auto  ">
				<table className="table table-compact w-full ">
					{/* <!-- head --> */}
					<thead>
						<tr>
							<th>
								Number
							</th>
							<th>Image</th>
							<th>Name</th>
							<th>ID</th>
							<th>Category</th>
							<th>Code</th>
							<th>Price</th>
							<th>action</th>
						</tr>
					</thead>
					<tbody className=' text-white'>
						{
							orders?.orders.map((item, index) => <OrderSingleRow key={item._id} page={page} limit={limit} index={index} item={item} handleUpdate={handleUpdate} handleDelete={handleDelete}></OrderSingleRow>)
						}

					</tbody>
					{/* <!-- foot --> */}
					<tfoot className='bg-gray-800'>
					</tfoot>
				</table>
			</div>
			<div className={`${data?.data?.data?.products.length < 1 ? 'hidden' : 'block'}`}  >
				<div className="paginationContainer block bg-gray-50 px-3 py-1 rounded-sm">
					<ReactPaginate className='flex justify-center items-center text-gray-800 font-semibold gap-5'
						breakLabel="..."
						nextLabel="next >"
						onPageChange={handlePageClick}
						pageRangeDisplayed={3}
						pageCount={data?.data?.data?.totalPage}
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

export default Orders;