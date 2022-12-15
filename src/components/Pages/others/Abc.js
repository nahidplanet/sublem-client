import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loader from "../../Shared/Loader"
import "./styles.css"

const Abc = () => {

	const [sliderImage,setSliderImage] = useState('');

	var baseUrl = `http://localhost:5000/images/product/`;
	const { isLoading, error, data, refetch } = useQuery(
		['singleProduct'], () => axios.get(`http://localhost:5000/api/v1/product/637d0159a73265432069ea13`)
			.then(data => data)
	)
	if (isLoading) {
		return <Loader></Loader>
	}
	const { name, productImage, code, sortDescription, longDescription, regularPrice, newPrice } = data?.data?.data[0];
	const image = productImage[0]?.productImagePath;
	refetch();
const handleClick = (index) =>{
	setSliderImage(productImage[index]?.productImagePath);
}


	return (
		<div className="main">
			{
			sliderImage &&	<img src={baseUrl+sliderImage || image} height="300" width="500" alt=''/>
			}

			<div className='flex_row'>
				{productImage.map((data, i) =>
					<div className="thumbnail" key={i} >
						<img src={baseUrl+data.productImagePath} onClick={() => handleClick(i)} height="70" width="100" alt='' />
					</div>
				)}
			</div>
		</div>
	);
};

export default Abc;


