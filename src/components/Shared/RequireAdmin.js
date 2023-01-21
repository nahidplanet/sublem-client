import React, { useEffect, useState } from 'react';
import {   useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import useAdmin from '../../hooks/useAdmin';
import Loader from './Loader';

function RequireAdmin({ children }) {
	const localUser = localStorage.getItem("Auth_credentials")
	const user = JSON.parse(localUser)
	const [admin,adminLoading] = useAdmin(user);
	const [loading, setLoading] = useState(false)
	const [users, setUsers] = useState(false)
	const navigate = useNavigate()

	useEffect(() => {
		const user = localStorage.getItem("Auth_credentials")
		const token = localStorage.getItem("activeToken")

		if (user && token) {
			setUsers(user)
			setLoading(true)
		}
	}, [])



	// let location = useLocation();
	if ( !loading || adminLoading) {
		return <Loader></Loader>
	}

	if (!user || !admin || !users) {
		toast.error("Unauthorize access!")
		return navigate("/login")
	}

	return children;
}

export default RequireAdmin;


