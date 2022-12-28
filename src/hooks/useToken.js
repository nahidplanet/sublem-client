import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { api } from '../urlConfig';

const useToken = (user) => {
	const [token, setToken] = useState('');
	;
	useEffect(() => {
		const email = user?.email;
		const username = user?.displayName;
		if (email && username) {
			axios.post(`${api}/create-user`, { email, username }).then(res => {
				if (res?.data?.status) {
					localStorage.setItem("activeToken", res?.data?.activeToken);
					setToken(res?.data?.activeToken)
				}
			})

		}
	}, [user])
	return [token]
};

export default useToken;