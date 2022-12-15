import React from 'react';
import { toast } from 'react-toastify';
import axiosInst from '../../axios';

const DeleteModal = ({deleteItem,setDeleteItem,refetch}) => {
	const handleDeleteProduct = () =>{
		const url = `http://localhost:5000/api/v1/product/${deleteItem._id}`;
		axiosInst.delete(url).then(res=>{
			if (!res.data.status) {
				toast.error("Product delete failed")
			} else {
				toast.success("Product delete successful");
				refetch();
				setDeleteItem(null)
			}
		}).catch(err=>toast.error(err?.response?.data?.message))
	}
	return (
		<div >
				<input type="checkbox" id="ProductDeleteModal" className="modal-toggle" />
				<div className="modal   modal-bottom sm:modal-middle">
					<div className="modal-box bg-gray-200 text-gray-900 border shadow-lg">
						<h3 className="font-bold text-lg">Are you sure to delete!</h3>
						<p >{deleteItem._id} </p>
						<p >{deleteItem.name} </p>

						<div className='flex gap-10 justify-end items-center'>
							<table>
								<tbody>
									<tr>
										<td>
											<button onClick={handleDeleteProduct} className='btn bg-red-500  hover:bg-red-600 border-none btn-warning text-white'  >Delete</button>
										</td>
										<td>
											<div className="modal-action ">
												<label htmlFor="ProductDeleteModal" className="btn mt-2 ml-5 bg-green-500 hover:bg-green-600 border-none btn-warning text-white">Cancel!</label>
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

export default DeleteModal;