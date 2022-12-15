import React from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const useCartIncrease = (id,price) => {


	useEffect(()=>{
		
			const addToCartInfo = { productId:id, price }
			fetch('http://localhost:5000/api/v1/product/cart/user', {
				method: "POST",
				headers: {
					'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
					'content-type': 'application/json'
				},
				body: JSON.stringify(addToCartInfo)
			})
				.then(res => res.json())
				.then(data => {
					if (data.status) {
						toast.success("Product added successful");
						// setReload(true)
					} else {
						toast.error("Product added failed");
					}
				})
		
		
	},[id])
	return ;
};

export default useCartIncrease;