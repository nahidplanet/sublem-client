import React from 'react';

const SaveCartSingle = ({ product }) => {
	const { price, productId, quantity } = product;
	const { name, productImage, category, type } = product.productId;
	return (
		<tr>
			<th>
				<label>
					<input type="checkbox" className="checkbox" />
				</label>
			</th>
			<td>
				<div className="flex items-center space-x-3">
					<div className="avatar w-10 h-10">
						<img className='' src={`http://localhost:5000/images/product/${productImage[0].productImagePath}`} alt=" " />
					</div>
					<div>
						<div className="font-bold">{name}</div>
					</div>
				</div>
			</td>
			<td>
				{quantity}
			</td>
			<td>{price}</td>
			<th>
				<button className="btn btn-ghost btn-xs">{price*quantity}</button>
			</th>
		</tr>
	);
};

export default SaveCartSingle;