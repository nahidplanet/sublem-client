import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import auth from '../../../firebaseAuth/firebase.init';
import useLoadWishlist from '../../../hooks/useLoadWishlist';
import Loader from '../../Shared/Loader';
import WishListSingle from './WishListSingle';

const WishList = () => {
	const [user] = useAuthState(auth)
	const navigate = useNavigate()
	const [userinfo, isLoading, refetch] = useLoadWishlist(user);
	const products = userinfo?.wishlist;
	if (isLoading) {
		<Loader></Loader>
	}
	if (!products) {
		navigate('/login');

	}
	const handleWishlistDeleteItem = (id) => {
		// cartDelete(id)
		fetch(`http://localhost:5000/api/v1/product/wishlist/delete/${id}`, {
			method: 'DELETE',
			headers: {
				"authorization": `Bearer ${localStorage.getItem('activeToken')}`
			},
		}).then(response => response.json())
			.then(data => {
				if (!data.status) {
					toast.error("Delete failed")
				} else {
					toast.success("Delete successful");
					refetch()
				}
			})

	}
	return (
		<div>
			<div className="overflow-x-auto w-full">
				<table className="table table-compact w-full">
					<thead>
						<tr>
							<th>

							</th>
							<th>Image</th>
							<th>Name</th>
							<th>Category</th>
							<th>Price</th>
							<th>Show Details</th>
						</tr>
					</thead>
					<tbody>
						{
							userinfo?.wishlist?.map((item, index) => <WishListSingle key={item._id} index={index} product={item} handleWishlistDeleteItem={handleWishlistDeleteItem}></WishListSingle>)
						}
					</tbody>

					<tfoot>

					</tfoot>

				</table>
			</div>
		</div>
	);
};

export default WishList;