import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import Loader from './Loader';

function RequireAuth({ children }) {
	const [loading, setLoading] = useState(false)
	const [user, setUser] = useState(false)
	const navigate = useNavigate()

	useEffect(() => {
		const user = localStorage.getItem("Auth_credentials")
		const token = localStorage.getItem("activeToken")

		if (user && token) {
			setUser(user)
			setLoading(true)
		}
	}, [])

	if (!loading) {
		return <Loader></Loader>
	}
	if (!user) {
		return navigate("/login")
	}

	return children;
}

export default RequireAuth;


