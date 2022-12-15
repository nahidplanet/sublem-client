
import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';

import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import axiosInst from '../components/axios';
import useLoadCart from './useLoadCart';





const useCart = (user) => {
	// const [reload,setReload] = useState(false)

	// const [catProduct, setCartProducts] = useState([]);
	// const navigate = useNavigate()



	// useEffect(() => {
	// 	fetch('http://localhost:5000/api/v1/product/cart/user', {
	// 		headers: {
	// 			'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
	// 			'content-type': 'application/json'
	// 		}
	// 	})
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			if (!data.status) {
	// 				// ===========
	// 			} else {
	// 				setCartProducts(data?.result)
	// 			}
	// 		})
	// }, [user,add])
};





const cartIncrease = (id, price) => {
	// const addToCartInfo = { productId: id, price }
	// fetch('http://localhost:5000/api/v1/product/cart/user', {
	// 	method: "POST",
	// 	headers: {
	// 		'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
	// 		'content-type': 'application/json'
	// 	},
	// 	body: JSON.stringify(addToCartInfo)
	// })
	// 	.then(res => res.json())
	// 	.then(data => {
	// 		if (data.status) {
	// 			toast.success("Product added successful");
	// 			// refetch
	// 		} else {
	// 			toast.error("Product added failed");
	// 		}
	// 	})
}





const cartDecrease = (id, price) => {
	// const addToCartInfo = { productId: id, price }
	// fetch('http://localhost:5000/api/v1/product/cart/user/decrement', {
	// 	method: "POST",
	// 	headers: {
	// 		'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
	// 		'content-type': 'application/json'
	// 	},
	// 	body: JSON.stringify(addToCartInfo)
	// })
	// 	.then(res => res.json())
	// 	.then(data => {
	// 		if (data.status) {
	// 			toast.success("Product added successful");
	// 			// add.push(1)
	// 		} else {
	// 			toast.error("Product added failed");
	// 		}
	// 	})
}





const cartDelete = async (id) => {
	// fetch(`http://localhost:5000/api/v1/product/cart/delete/${id}`, {
	// 	method: 'DELETE',
	// 	headers: {
	// 		"authorization": `Bearer ${localStorage.getItem('accessToken')}`
	// 	},
	// }).then(response => response.json())
	// 	.then(data => {
	// 		if (!data.status) {
	// 			toast.error("Delete failed")
	// 		} else {
	// 			toast.success("Delete successful");
	// 		}
	// 	})

}








export {
	useCart,
	cartIncrease,
	cartDecrease,
	cartDelete
};