import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router';
import auth from '../../firebaseAuth/firebase.init';
import Loader from './Loader';

function RequireAuth({ children }) {
	const [user, loading] = useAuthState(auth);

	let location = useLocation();
	if ( loading) {
		return <Loader></Loader>
	}
	if (!user) {
		
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return children;
}

export default RequireAuth;