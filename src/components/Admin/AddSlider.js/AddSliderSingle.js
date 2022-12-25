import React from 'react';

const AddSliderSingle = ({ item,index,handleDeleteData }) => {
	


	const {_id,  name, image } = item;

	
	return (
		<tr >
			<th>
				<p>{1 + index++}</p>
			</th>
			<td>
				{name}
			</td>
			<td>
				<div className="flex items-center space-x-3">
					<div className="avatar w-10 h-10">
					<img src={image} alt={name} />
					</div>
					<div>
						<div className="font-bold">{name}</div>
					</div>
				</div>
			</td>
			
			<td  > <label onClick={()=>handleDeleteData(_id)} className='btn btn-xs btn-ghost bg-red-500'> delete</label> </td>
			
		</tr>
	);
};

export default AddSliderSingle;