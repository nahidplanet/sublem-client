import React from 'react';
const ProductSingleRow = ({ handleDelete, handleUpdate, item, index, page, limit, handleUpdateFreeProduct }) => {
	

	let pathIs = false;
	if (item.productImage[0].productImagePath.includes("http")) {
		pathIs = true;
	} else {
		pathIs = false;
	}

	const num = (page - 1) * parseInt(limit);
	return (
		<tr>
			<td><p>{1 + num + index++}</p></td>
			<td>
				<div className="flex items-center space-x-3">
					<div className="avatar">
						<div className="mask mask-squircle w-12 h-12">
							{
								pathIs ? <img src={`${item.productImage[0].productImagePath}`} alt={item.name} />
									: <img src={`http://localhost:5000/images/product/${item.productImage[0].productImagePath}`} alt={item.name} />
							}
						</div>
					</div>
				</div>
			</td>
			<td>{`${item?.name.slice(0, 20)} . . .`}</td>
			<td>{item?._id}</td>
			<td>{item?.category}</td>
			<td>{item?.type}</td>
			<td>{item?.code}</td>
			<td>{item?.price}</td>
			<th className=''>
				{/* <button htmlFor="updateProduct" className="btn btn-ghost btn-xs bg-blue-400 mr-3">update</button> */}
				<label onClick={() => handleDelete(item)} htmlFor="ProductDeleteModal" className="btn btn-ghost btn-xs bg-red-500">delete</label>
				<label onClick={() => handleUpdate(item)} htmlFor="productUpdate" className="btn btn-ghost btn-xs bg-sky-500 ml-5">Update</label>
			</th>
			<th>

				{item?.status === "free" ? <label htmlFor='updateFreeModal' onClick={() => handleUpdateFreeProduct(item)} className="btn btn-ghost btn-xs bg-green-500">{item?.status}</label> : <td>{item.status}</td>}
			</th>
		</tr>
	);
};

export default ProductSingleRow;