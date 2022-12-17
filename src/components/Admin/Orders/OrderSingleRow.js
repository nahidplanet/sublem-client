import React from 'react';

const OrderSingleRow = ({handelShowProduct,handleOrderStatus, handleDelete, handleUpdate, item, index, page, limit }) => {
	
	const {orderStatus,userId} = item;
	const {_id,email,fullName,mobileNumber,username,addressOne ,addressTwo} = userId;
	const num = (page - 1) * parseInt(limit);
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
	console.log(orderStatus);
	return (
		<tr>
			<td><p>{1 + num + index++}</p></td>
			
			<td>{_id}</td>
			<td>{fullName}</td>
			<td>{username}</td>
			<td><label onClick={()=>handleOrderStatus(item)} htmlFor="OrderStatus" className={`${style} btn py-0 my-0 btn-xs text-white`}>{orderStatus ? orderStatus:"pending"}</label></td>
			<td>{email}</td>
			<td>{mobileNumber}</td>
			<td>{addressOne}</td>
			<td>{addressTwo ? addressTwo :"Null"}</td>
			<td><label onClick={()=>handelShowProduct(item?.orderItems)} htmlFor="showOrderItemsModal" className="btn btn-ghost btn-xs bg-sky-500 ml-5">Show Details</label></td>
			
			
		</tr>
	);
};

export default OrderSingleRow;