import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import {  useLocation, useNavigate } from 'react-router';
import axiosInst from '../axios';
import Loader from '../Shared/Loader';

const RequireAdmin = ({ children }) => {
	
	const navigate = useNavigate();
	const [admin, setAdmin] = useState(false)

	
	const { data, isLoading } = useQuery('checkAdmin', () => fetch(`http://localhost:5000/api/v1/check-admin`, {
		method: "GET",
		headers: {
			"content-type": "application/json",
			"authorization": `Bearer ${localStorage.getItem('activeToken')}`
		},
	}).then(res => res.json())
		.then(data => {

			setAdmin(data.status);
			return data;
		}));

	if (isLoading) {
		return <Loader></Loader>
	}
	if (!admin) {

		navigate('login')
	}

	return children;
};

export default RequireAdmin;