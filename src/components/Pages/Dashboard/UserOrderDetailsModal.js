import React from 'react';
import LastStepOfMOdalShowDetails from './LastStepOfMOdalShowDetails';

const UserOrderDetailsModal = ({ orderDetails, setOrderDetails }) => {
	
	return (
		<>
			{/* The button to open modal */}
			{/* <label " className="btn">open modal</label> */}

			{/* Put this part before </body> tag */}
			<input type="checkbox" id="userOrderHistory" className="modal-toggle" />
			<div className="modal modal-bottom sm:modal-middle z-30 rounded-none">
				<div className="modal-box bg-white border rounded-none">
					<label htmlFor="userOrderHistory" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
					<h1 className='text-center mb-5 text-4xl capitalize'>Order Information</h1>
					{
						orderDetails?.map((x,i) =><LastStepOfMOdalShowDetails key={i} x={x}></LastStepOfMOdalShowDetails>)
					}
				</div>
			</div>
		</>
	);
};

export default UserOrderDetailsModal;

