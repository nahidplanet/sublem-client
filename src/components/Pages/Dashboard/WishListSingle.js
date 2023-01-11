import React from 'react';
import { useNavigate } from 'react-router';

const WishListSingle = ({ product, index, handleWishlistDeleteItem }) => {
	const navigate = useNavigate()
	const handleHomeCategoryProductDetails = (id) => {
		navigate(`/home-category/${id}`);
	}


	const { _id, name, productImage, category, price } = product.productId;
	let pathIs = false;
	if (productImage[0].productImagePath?.includes("http")) {
		pathIs = true;
	} else {
		pathIs = false;
	}
	return (
		<tr >
			<th>
				<p>{1 + index++}</p>
			</th>
			<td>
				<div className="flex items-center space-x-3">
					<div className="avatar w-10 h-10">
						{
							pathIs ? <img src={`${productImage[0].productImagePath}`} alt={name} />
								: <img src={`http://localhost:5000/images/product/${productImage[0].productImagePath}`} alt={name} />
						}
					</div>
					<div>
						<div className="font-bold">{name}</div>
					</div>
				</div>
			</td>
			<td>
				{category}
			</td>
			<td>{price}</td>
			<th>
				<td onClick={() => handleHomeCategoryProductDetails(_id)}>
					<button className="btn  btn-xs bg-gray-500 text-white">details</button>
				</td>
			</th>
			<th>
				<td onClick={() => handleWishlistDeleteItem(_id)}>
					<button className="btn  btn-xs bg-red-500 text-white">delete</button>
				</td>
			</th>
		</tr>
	);
};

export default WishListSingle;