import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router';
import auth from '../../../firebaseAuth/firebase.init';
import {useCart} from '../../../hooks/useCart';
import useLoadCart from '../../../hooks/useLoadCart';
import axiosInst from '../../axios';
import SaveCartSingle from './SaveCartSingle';

const SaveCart = () => {
	const [user] = useAuthState(auth);
	// const [catProduct, totalProduct, totalPrice, isLoading, refetch] = useCart(user)
	const [catProduct, totalProduct, totalPrice, isLoading, refetch] = useLoadCart()
	// const [catProduct,setCartProducts] = useState([]);

	const [signOut, signOutLoading, signOutError] = useSignOut(auth);
	const navigate = useNavigate()
	

	const products = catProduct?.cartItems;


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
							<th>productImage</th>
							<th>name</th>
							<th>Quantity</th>
							<th>price</th>
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