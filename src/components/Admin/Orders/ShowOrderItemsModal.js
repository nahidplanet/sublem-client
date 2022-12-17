import React from 'react';
import ModalTableSingleRow from './ModalTableSingleRow';

const ShowOrderItemsModal = ({ orderItems, setOrderItems }) => {
	console.log(orderItems);
	return (
		<>
			<input type="checkbox" id="showOrderItemsModal" className="modal-toggle" />

			<div className="modal modal-bottom sm:modal-middle ">
				<div className="modal-box lg:min-w-[1000px] bg-white w-full text-gray-900  ">
					<label htmlFor="showOrderItemsModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
					<h3 className="font-bold text-xl mb-10 text-center">Ordered Product </h3>
					<div className="overflow-x-auto w-full ">
						<table className="w-full ">

							<thead className=''>
								<tr className=''>
									<th>Serial</th>
									<th>Image</th>
									<th>Product Name</th>
									<th>Category</th>
									<th>Type</th>
									<th>Code</th>
									<th>Price</th>
									<th>Quantity</th>
									<th>Discount</th>
									<th>Color (Optional)</th>
									<th>Total Price</th>
								</tr>
							</thead>
							<tbody>
								{
									orderItems?.map((item, index) =><ModalTableSingleRow item={item} index={index} ></ModalTableSingleRow  >)
								}

							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};

export default ShowOrderItemsModal;