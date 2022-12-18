import React from 'react';
import userOrderModalSingleRow from './userOrderModalSingleRow';

const UserOrderDetailsModal = ({ orderDetails, setOrderDetails }) => {
	
	return (
		<>
			{/* The button to open modal */}
			{/* <label " className="btn">open modal</label> */}

			{/* Put this part before </body> tag */}
			<input type="checkbox" id="userOrderHistory" className="modal-toggle" />
			<div className="modal modal-bottom sm:modal-middle z-30">
				<div className="modal-box  bg-white border">
					<label htmlFor="userOrderHistory" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
					<h1 className='text-center mb-5 text-4xl capitalize'>Profile Info</h1>
					{
						orderDetails?.map((x,i) =>
							<div key={i} className='text-center text-gray-900'>
								<h1 className='text-xl text-center capitalize font-semibold my-3'> product {1+(i++)}</h1>
								<div className='border-b w-full'>
									<img className='mx-auto' src={`http://localhost:5000/images/product/${x?.productId?.productImage[0].productImagePath}`} alt={x?.productId?.name} />
								</div>
								<div className='border-b flex justify-between items-center'>
									<div className='py-3'>Product Name</div>
									<div >{x?.productId?.name}</div>
								</div >
								<div className='border-b flex justify-between items-center'>
									<div className='py-3'>Category</div>
									<div >{x?.productId?.category}</div>
								</div >
								<div className='border-b flex justify-between items-center'>
									<div className='py-3'>Type</div>
									<div >{x?.productId?.type}</div>
								</div >
								<div className='border-b flex justify-between items-center'>
									<div className='py-3'>Price</div>
									<div >{x?.productId?.price}</div>
								</div >
								
							</div>
						)
					}
				</div>
			</div>
		</>
	);
};

export default UserOrderDetailsModal;

