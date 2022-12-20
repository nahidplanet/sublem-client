import axios from 'axios';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import axiosInst from '../../axios';
import Loader from '../../Shared/Loader';
import OrderSingleRow from './OrderSingleRow';
import OrderStatusModal from './OrderStatusModal';
import OrderUpdateModal from './OrderUpdateModal';
import ShowOrderItemsModal from './ShowOrderItemsModal';

const Orders = () => {
	const [modalData, setModalData] = useState(null);

	const [deleteItem, setDeleteItem] = useState(null);
	const [updateItem, setUpdateItem] = useState(null);
	const [orderItems, setOrderItems] = useState(null);
	const [orderStatus, setOrderStatus] = useState(null);

	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(9);
	const getFacts = () => {
		const res = axiosInst.get(`/receive-all-order?limit=${limit}&page=${page}`).then((res) => res)
		return res;
	};
	const { data, isLoading, refetch } = useQuery(['receiveAllOrder', limit, page], getFacts);
	const orders = data?.data?.orders?.orders;
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
	const handelShowProduct = (orders) => {
		setOrderItems(orders)
	}
	const handleOrderStatus = (item) => {
		setOrderStatus(item)
	}
	const handleDeleteOrder = (id) => {
		fetch(`http://localhost:5000/api/v1/receive-all-order/${id}`,{
			method:"DELETE",
			headers:{
				"content-type":"application/json"
			}
		})
		.then(res=>res.json())
		.then(data=>{
			if (data.status) {
				refetch();
				toast.success(data.message)
			}
		})
	}

	return (
		<>
			{
				orderStatus && <OrderStatusModal refetch={refetch} orderStatus={orderStatus} setOrderStatus={setOrderStatus} ></OrderStatusModal>
			}
			{
				orderItems && <ShowOrderItemsModal orderItems={orderItems} setOrderItems={setOrderItems} refetch={refetch}></ShowOrderItemsModal>

			}
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
			<div className="overflow-x-auto ">
				<table border="1" className="table text-start  table-compact w-full ">
					{/* <!-- head --> */}
					<thead>
						<tr>
							<th>Serial</th>
							<th>User ID</th>
							<th>Full Name</th>
							<th>User Name</th>
							<th>Status</th>
							<th>Email</th>
							<th>Phone Number</th>
							<th>Address One</th>
							<th>Address Two (Optional)</th>
							<th>Product Details</th>
							<th>Delete Order</th>

						</tr>
					</thead>
					<tbody className=' text-white'>

						{
							orders?.map((item, index) => <OrderSingleRow
								key={item._id}
								page={page}
								limit={limit}
								index={index}
								item={item}
								handleUpdate={handleUpdate}
								handleDelete={handleDelete}
								handelShowProduct={handelShowProduct}
								handleOrderStatus={handleOrderStatus}
								handleDeleteOrder={handleDeleteOrder}
							></OrderSingleRow>)
						}

					</tbody>
					{/* <!-- foot --> */}
					<tfoot className='bg-gray-800'>
					</tfoot>
				</table>
			</div>
			{
				orders.length < 1 && <p className='text-3xl font-bold text-red-400 text-center my-20 w-full'> No Order Found</p>
			}
			<div className={`${data?.data?.data?.products.length < 1 ? 'hidden' : 'block'}`}  >
				<div className="paginationContainer block bg-gray-50 px-3 py-1 rounded-sm">
					<ReactPaginate className='flex my-10 justify-center items-center text-gray-800 font-semibold gap-5'
						breakLabel="..."
						nextLabel="next >"
						onPageChange={handlePageClick}
						pageRangeDisplayed={3}
						pageCount={data?.data?.orders?.totalPage}
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