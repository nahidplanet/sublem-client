
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import ProductSingleRow from './ProductSingleRow';
import axios from '../../axios';
import Loader from '../../Shared/Loader';
import DeleteModal from './DeleteModal';
import UpdateModal from './UpdateModal';
import ReactPaginate from 'react-paginate';
import './AllProducts.css'
import AllFreeUpdate from './AllFreeUpdate';



const AllProducts = () => {


	const [deleteItem, setDeleteItem] = useState(null);
	const [updateItem, setUpdateItem] = useState(null);
	const [updateFree, setUpdateFree] = useState(null);

	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(9);
	const getFacts = () => {
		const res = axios.get(`/product?limit=${limit}&page=${page}`).then((response) => {
			return response
		})
		return res;
	};
	const { data, isLoading, refetch } = useQuery(['AllProducts', limit, page], getFacts);
	
	const products = data?.data?.data;
	// if (isLoading) {
	// 	return <Loader></Loader>
	// }
	const handleDelete = (item) => {
		setDeleteItem(item)
	}
	const handleUpdate = (item) => {
		setUpdateItem(item)

	}
	const handlePageClick = (data) => {
		setPage(data.selected + 1);

	}
	const handleUpdateFreeProduct = (free) => {
		setUpdateFree(free);

	}
	return (
		<>
			{
				updateFree && <AllFreeUpdate updateFree={updateFree} setUpdateFree={setUpdateFree} refetch={refetch}></AllFreeUpdate>
			}
			{
				deleteItem && <DeleteModal deleteItem={deleteItem} setDeleteItem={setDeleteItem} refetch={refetch}></DeleteModal>
			}
			{
				updateItem && <UpdateModal updateItem={updateItem} setUpdateItem={setUpdateItem} refetch={refetch}></UpdateModal>
			}
			<div >
				<input type="checkbox" id="updateProduct" className="modal-toggle" />
				<div className="modal modal-bottom sm:modal-middle">
					<div className="modal-box bg-gray-200 text-gray-900 border shadow-lg">
						<h3 className="font-bold text-lg">Are you sure to updet !</h3>
						<p className="py-4">Name: updae</p>
						<div className="modal-action">
							<label htmlFor="updateProduct" className="btn bg-red-500 hover:bg-red-600 border-none text-white">Agree!</label>
						</div>
					</div>
				</div>
			</div>
			<div className="overflow-x-auto ">
				<table className="table table-compact w-full bg-white ">
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
							<th>type</th>
							<th>Code</th>
							<th>Price</th>
							<th>Action</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody className=' text-white'>
						{
							products?.products?.reverse()?.map((item, index) =>
								<ProductSingleRow 
								key={item._id}
								 page={page} 
								 limit={limit}
								  index={index}
								   item={item} handleUpdate={handleUpdate}
								    handleDelete={handleDelete}
									handleUpdateFreeProduct={handleUpdateFreeProduct}
									></ProductSingleRow>
							)
						}

					</tbody>
					{/* <!-- foot --> */}
					<tfoot className='bg-gray-800'>
					</tfoot>
				</table>
			</div>
			{
				products?.products?.length < 1 && <p className='text-3xl font-bold text-red-400 text-center my-20 w-full'> No Product Found</p>
			}
			<div className='flex justify-end mt-5'>
				<div className="flex items-center justify-center  h-6">
					<ReactPaginate
						breakLabel="..."
						nextLabel="next >"
						onPageChange={handlePageClick}
						pageRangeDisplayed={3}
						pageCount={products?.totalPage}
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

export default AllProducts;