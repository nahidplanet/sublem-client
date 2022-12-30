import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  useLocation, useNavigate } from 'react-router';
import auth from '../../firebaseAuth/firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loader from './Loader';

function RequireAdmin({ children }) {
	const [user, loading] = useAuthState(auth);
	const [admin,adminLoading] = useAdmin(user);
	const navigate = useNavigate()



	// let location = useLocation();
	if ( loading || adminLoading) {
		return <Loader></Loader>
	}

	if (!user || !admin) {
		
		return navigate("/login")
	}

	return children;
}

export default RequireAdmin;


