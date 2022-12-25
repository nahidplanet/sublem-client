import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebaseAuth/firebase.init';
import useLoadWishlist from '../../../hooks/useLoadWishlist';
import Loader from '../../Shared/Loader';
import PageTitle from '../../Shared/PageTitle';
import WishListSingle from './WishListSingle';

const WishList = () => {
	const [user] = useAuthState(auth)
	const [userinfo, isLoading, refetch] = useLoadWishlist(user);
	
	if (isLoading) {
		<Loader></Loader>
	}
	
	const handleWishlistDeleteItem = (id) => {
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
			<PageTitle title={"Wishlist"}></PageTitle>
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
				{
					
						userinfo?.wishlist?.length < 1 && <p className='text-3xl font-bold text-red-400 text-center my-20 w-full'> Your wishlist is blank</p>
					
				}
			</div>
		</div>
	);
};

export default WishList;