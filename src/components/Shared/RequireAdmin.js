import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router';
import auth from '../../firebaseAuth/firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loader from './Loader';

function RequireAdmin({ children }) {
	const [user, loading] = useAuthState(auth);
	const [admin,adminLoading] = useAdmin(user);



	let location = useLocation();
	if ( loading || adminLoading) {
		return <Loader></Loader>
	}

	if (!user || !admin) {
		
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return children;
}

export default RequireAdmin;


