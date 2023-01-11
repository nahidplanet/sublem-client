import React from 'react';
import { Link } from 'react-router-dom';

const SaveCartSingle = ({ product }) => {
	const { price, productId, quantity } = product;
	const { name, productImage, category, type } = product.productId;

	let pathIs = false;
	if (productImage[0].productImagePath?.includes("http")) {
		pathIs = true;
	} else {
		pathIs = false;
	}

	return (
		<tr>
			
			<td>
				<div className="flex items-center space-x-3">
					<div className="avatar w-10 h-10 ml-3">
						{
						pathIs ? <img  src={`${productImage[0].productImagePath}`} alt={name} />
							: <img  src={`http://localhost:5000/images/product/${productImage[0].productImagePath}`} alt={name} />
					}
					</div>
				</div>
			</td>
			<td>
			{name}
			</td>
			<td>{price}</td>
			<th>
				<td>{price*quantity}</td>
			</th>
			<th>
				<td  ><Link  to={'/cart'} className="btn btn-ghost btn-xs bg-blue-400">Order Now</Link></td>
			</th>
			
		</tr>
	);
};

export default SaveCartSingle;