import React from 'react';

const OrderCompletedModal = ({setModalOpen}) => {
	return (
		<>
			<input type="checkbox" onClick={()=>setModalOpen(false)} id="orderComplete" className="modal-toggle" />

			<div className="modal modal-bottom sm:modal-middle">
				<div className="modal-box">
					<h3 className="font-bold text-lg">Thanks for Place your order</h3>
					<p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
					<div className="modal-action flex justify-between items-center">
						<button className="btn btn-sm bg-white text-sm text-gray-800 font-normal rounded-sm shadow-sm border">Home</button>
						<button className="btn btn-sm bg-white text-sm text-gray-800 font-normal rounded-sm shadow-sm border">Profile</button>
						<label htmlFor="orderComplete" className="btn mt-2 ml-5 bg-green-500 hover:bg-green-600 border-none btn-warning text-white">Cancel!</label>

					</div>
				</div>
			</div>
		</>
	);
};

export default OrderCompletedModal;