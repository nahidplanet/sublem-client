import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import auth from '../../../firebaseAuth/firebase.init';
import useLoadCart from '../../../hooks/useLoadCart';
import Loader from '../../Shared/Loader';
import SaveCartSingle from './SaveCartSingle';

const SaveCart = () => {
	const [user] = useAuthState(auth);
	const navigate = useNavigate()
	const [catProduct, totalProduct, totalPrice, isLoading, refetch] = useLoadCart()

	const products = catProduct?.cartItems;
	if (isLoading) {
		<Loader></Loader>
	}
	if (!products) {
		// navigate('/login');

	}
	return (
		<div>
			<div className="overflow-x-auto w-full">
				<table className="table table-compact w-full">
					<thead>
						<tr>
							<th>
								<label>
									<input type="checkbox" className="checkbox" />
								</label>
							</th>
							<th>Product Image</th>
							<th>Product Name</th>
							<th>Quantity</th>
							<th>Price</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{
							products?.map(item => <SaveCartSingle key={item._id} product={item}></SaveCartSingle>)
						}
					</tbody>

					<tfoot>

					</tfoot>

				</table>
			</div>
		</div>
	);
};

export default SaveCart;