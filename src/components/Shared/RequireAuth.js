import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router';
import auth from '../../firebaseAuth/firebase.init';
import Loader from './Loader';

function RequireAuth({ children }) {
	const [user, loading] = useAuthState(auth);
const navigate = useNavigate()
	// let location = useLocation();
	if ( loading) {
		return <Loader></Loader>
	}
	if (!user) {
		
		// return <Navigate to="/login" state={{ from: location }} replace />;
		return navigate("/login")
	}

	return children;
}

export default RequireAuth;