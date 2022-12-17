import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axiosInst from '../../axios';

const OrderStatusModal = ({ orderStatus, setOrderStatus,refetch}) => {
	console.log(orderStatus);
	const [status,setStatus] =useState("");


	const handleUpdateOrderStatus = (e) => {
		e.preventDefault();
		// fetch(`http://localhost:5000/api/v1/order-submitted?id${orderStatus._id}&status=${status}`,{
		// 	p
		// })
		axiosInst.put(`/order-submitted?id=${orderStatus._id}&status=${status}`).then(res=>{
			if(res?.data?.status){
				refetch();
				toast.success(" Status Updated !");
				setOrderStatus(null);
			}
		})
	}
	return (
		<>
			<input type="checkbox" id="OrderStatus" className="modal-toggle" />
			<div className="modal modal-bottom sm:modal-middle">
				<div className="modal-box bg-white border">
				<label htmlFor="OrderStatus" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

					<h3 className="font-bold text-center text-xl mb-5 text-gray-900">Update Status</h3>
					<div className='flex justify-center items-center'>
					<form onSubmit={handleUpdateOrderStatus}>
					<select onChange={(e)=>setStatus(e.target.value)}   className="select bg-white text-gray-900 select-bordered w-full max-w-xs">
						<option className='p-2 text-md' value={"pending"}>pending</option>
						<option className='p-2 text-md' value={"accepted"}>accepted</option>
						<option className='p-2 text-md' value={"delivered"}>delivered</option>
						<option className='p-2 text-md' value={"cancel"}>cancel</option>
					</select>
					<input className='btn btn-primary' type="submit" value="Saved" />
					</form>
					</div>
					
				</div>
			</div>
		</>
	);
};

export default OrderStatusModal;


