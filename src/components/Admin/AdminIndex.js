
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';



const AdminIndex = () => {
	const [totalProduct, setTotalProduct] = useState(0);
	const [totalOrder, setTotalOrder] = useState(0);
	const [newOrder, setNewOrder] = useState(0);
	const [completed, setCompleted] = useState(0);
	const [totalUser, setTotalUser] = useState(0);
	useEffect(() => {
		fetch("http://localhost:5000/api/v1/product")
			.then(res => res.json())
			.then(data => setTotalProduct(data?.data?.totalProduct))
	}, [])
	useEffect(() => {
		fetch("http://localhost:5000/api/v1/receive-all-order")
			.then(res => res.json())
			.then(data => setTotalOrder(data?.orders?.totalProduct))
	}, [])
	useEffect(() => {
		fetch("http://localhost:5000/api/v1/receive-all-order?orderStatus=pending")
			.then(res => res.json())
			.then(data => setNewOrder(data?.orders?.totalProduct))
	}, [])
	useEffect(() => {
		fetch("http://localhost:5000/api/v1/receive-all-order?orderStatus=delivered")
			.then(res => res.json())
			.then(data => setCompleted(data?.orders?.totalProduct))
	}, [])
	useEffect(() => {
		fetch("http://localhost:5000/api/v1/all-users")
			.then(res => res.json())
			.then(data => setTotalUser(data?.users?.totalUser))
	}, [])
	return (
		<div className='min-h-screen text-gray-900 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12'>
			<div className='bg-green-500 h-96 p-5 rounded-lg shadow-lg border '>
				<h1 className='text-white capitalize font-bold text-3xl md:text-3xl'>Total Product</h1>
				<div className='flex justify-center items-center h-[80%]'>
					<h1 className='capitalize font-bold text-9xl'>{totalProduct}</h1>
				</div>
			</div>
			<div className='bg-red-500 h-96  p-5 rounded-lg shadow-lg border '>
				<h1 className='text-white capitalize font-bold text-3xl'>Total Order</h1>
				<div className='flex justify-center items-center h-[80%]'>

					<h1 className='capitalize font-bold text-9xl'>{totalOrder}</h1>
				</div>
			</div>
			<div className='bg-blue-500 h-96  p-5 rounded-lg shadow-lg border '>
				<h1 className='text-white capitalize font-bold text-3xl'>New Order</h1>
				<div className='flex justify-center items-center h-[80%]'>

					<h1 className='capitalize font-bold text-9xl'>{newOrder}</h1>
				</div>

			</div>
			<div className='bg-orange-500 h-96  p-5 rounded-lg shadow-lg border '>
				<h1 className='text-white capitalize font-bold text-3xl'>Total User</h1>
				<div className='flex justify-center items-center h-[80%]'>

					<h1 className='capitalize font-bold text-9xl'>{totalUser}</h1>
				</div>
			</div>
			<div className='bg-purple-500 h-96  p-5 rounded-lg shadow-lg border '>
				<h1 className='text-white capitalize font-bold text-3xl'>Total Completed Order</h1>
				<div className='flex justify-center items-center h-[80%]'>

					<h1 className='capitalize font-bold text-9xl'>{completed }</h1>
				</div>
			</div>
		</div>
	);
};

export default AdminIndex;