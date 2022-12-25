import React from 'react';

const OrderSingle = ({index ,singleOrder,handleViewDetails}) => {

	
	const{orderStatus}  = singleOrder;

	let style = "bg-green-600";
	if (orderStatus === "pending") {
		style = "bg-green-600"
	}
	if (orderStatus === "cancel") {
		style = "bg-red-500"
	}
	if (orderStatus === "delivered") {
		style = "bg-gray-400"
	}
	if (orderStatus === "accepted") {
		style = "bg-yellow-500"
	}
	return (
		<tr >
			<th>
				<p>{1+index++}</p>
			</th>
			<td><button className={`${style} btn btn-ghost btn-xs my-0`}>{orderStatus}</button></td>
			
			<td onClick={()=>handleViewDetails(singleOrder?.orderItems)}><label htmlFor="userOrderHistory" className='btn bg-blue-500 btn-ghost btn-xs'>Show details</label></td>
			
		</tr>
	);
};

export default OrderSingle;