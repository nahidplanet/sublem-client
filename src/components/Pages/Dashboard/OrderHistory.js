import React from 'react';
import { useState } from 'react';
import useOrder from '../../../hooks/useOrder';
import Loader from '../../Shared/Loader';
import PageTitle from '../../Shared/PageTitle';
import OrderSingle from './OrderSingle';
import UserOrderDetailsModal from './UserOrderDetailsModal';



const OrderHistory = () => {
	const localUser = localStorage.getItem("Auth_credentials")
	const user = JSON.parse(localUser)
	const [firstStep,isLoading, refetch] = useOrder(user)
const [orderDetails,setOrderDetails] = useState(null)
	if (isLoading) {
		return <Loader></Loader>
	}
	const handleViewDetails = (viewDetails) =>{
		setOrderDetails(viewDetails)
	}
	return (
		<>
		<PageTitle title={"Order History"}></PageTitle>
		{
			orderDetails && <UserOrderDetailsModal orderDetails={orderDetails} setOrderDetails={setOrderDetails}></UserOrderDetailsModal>
		}
		<div>
			<div className="overflow-x-auto w-full">
				<table className="table table-compact w-full">
					<thead>
						<tr>
							<th>
								Serial 
							</th>
							
							<th>Status</th>
							<th>Show Details</th>
						</tr>
					</thead>
					<tbody>
						{
							firstStep?.map((singleOrder, index) => <OrderSingle 
							key={singleOrder._id} 
							index={index} 
							singleOrder={singleOrder}
							handleViewDetails={handleViewDetails}
							 ></OrderSingle>)
						}
					</tbody>

					<tfoot>

					</tfoot>

				</table>
			</div>
		</div>
		</>
	);
};

export default OrderHistory;