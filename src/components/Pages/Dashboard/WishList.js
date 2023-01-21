import React from 'react';
import { toast } from 'react-toastify';
import useLoadWishlist from '../../../hooks/useLoadWishlist';
import { api } from '../../../urlConfig';
import PageTitle from '../../Shared/PageTitle';
import WishListSingle from './WishListSingle';

const WishList = () => {
	const localUser = localStorage.getItem("Auth_credentials")
	const user = JSON.parse(localUser)
	const [userinfo, isLoading, refetch] = useLoadWishlist(user);
	
	
	
	const handleWishlistDeleteItem = (id) => {
		fetch(`${api}/product/wishlist/delete/${id}`, {
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
			<div className="overflow-x-auto w-full ">
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