import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import order from '../../../assets/icon/order-place.svg';
import Loader from '../../Shared/Loader';

const UserOrderSubmit = () => {
	const navigate = useNavigate()
	const [loading,setLoading] = useState(false);

	if (loading) {
		<Loader></Loader>
	}
	const handleOrder = () => {
		setLoading(true)
		fetch(`http://localhost:5000/api/v1/order-submitted`, {
			method: "POST",
			headers: {
				'authorization': `Bearer ${localStorage.getItem('activeToken')}`,
				'content-type': 'application/json'
			},

		}).then(res => res.json()).then(data => {
			if (data.status) {
				setLoading(false)
				toast(data.message)
				navigate('/dashboard/order-history/')
			}
		})
	}
	return (
		<div>
			
			<div className='flex justify-center lg:items-center items-start mt-5 lg:mt-0 w-full h-screen bg-gray-50'>
				<div className="card w-auto bg-white border shadow-xl">
					<div className="card-body items-center justify-center">
						<h2 className="card-title text-gray-800 text-center capitalize text-2xl"> Thank you for place order</h2>
						<p className='text-gray-800 capitalize text-md'>We will contact you very soon</p>
						<div>
							<img src={order} alt="order place" />
						</div>
						<div className="card-actions w-full">
							<button onClick={handleOrder} className="btn btn-primary w-full block">Confirm Order</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserOrderSubmit;