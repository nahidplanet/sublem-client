import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useToken = (user) => {
	const [token, setToken] = useState('');
;
	useEffect(() => {
		const email = user?.user?.email;
		const username = user?.user?.displayName;
		if (email && username) {
			axios.post(`http://localhost:5000/api/v1/create-user`, {email,username}).then(res=>{
				console.log(res);
				if (res?.data?.status) {
					console.log(res?.data);
					localStorage.setItem("activeToken", res?.data?.activeToken);
					setToken(res?.data?.activeToken)
				}
			})
			
		}
	}, [user])
	return [token]
};

export default useToken;