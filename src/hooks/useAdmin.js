import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { json } from 'react-router';

const useAdmin = (user) => {
	const [admin,setAdmin] = useState(false);
	const [adminLoading,setAdminLoading] = useState(true);


	useEffect(()=>{
		const email = user?.email;
		if (email) {
			fetch('http://localhost:5000/api/v1/admin-login',{
				method:"GET",
				headers:{
					'authorization': `Bearer ${localStorage.getItem('activeToken')}`
				}
			}).then(res => res.json() )
			.then(data=>{
				setAdmin(data?.admin);
				setAdminLoading(false);
			})
		}
	},[user])
	return [admin,adminLoading]
};

export default useAdmin;