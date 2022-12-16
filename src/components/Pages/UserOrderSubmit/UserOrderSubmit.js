import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import OrderCompletedModal from './OrderCompletedModal';

const UserOrderSubmit = () => {
	const navigate = useNavigate()
	const [modalOpen,setModalOpen] = useState(false);
	const handleOrder = () => {
		fetch(`http://localhost:5000/api/v1/order-submitted`, {
			method: "POST",
			headers: {
				'authorization': `Bearer ${localStorage.getItem('activeToken')}`,
				'content-type': 'application/json'
			},
			// body: JSON.stringify(products)

		}).then(res => res.json()).then(data => {
			if (data.status) {
				toast(data.message)
				setModalOpen(true);
			}
		})
		console.log(modalOpen);
	}
	return (
		<div>
			{modalOpen && <OrderCompletedModal setModalOpen={setModalOpen}></OrderCompletedModal>}
			<div className='flex justify-center lg:items-center items-start mt-5 lg:mt-0 w-full h-screen bg-gray-50'>
				<div className="card w-96 bg-white border shadow-xl">
					<div className="card-body">
						<h2 className="card-title text-gray-800">Order page</h2>
						<p className='text-gray-800'>If a dog chews shoes whose shoes does he choose?</p>
						<div className="card-actions justify-end">
							<button onClick={handleOrder} className="btn btn-primary">Order Now</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserOrderSubmit;