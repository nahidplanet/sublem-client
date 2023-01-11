import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import DesktopHeader from './AdminHeader/DesktopHeader';
import MobileHeader from './AdminHeader/MobileHeader';
import AdminSidebar from './AdminSidebar/AdminSidebar';
import { useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebaseAuth/firebase.init';
import Loader from '../Shared/Loader';

const AdminDashboard = () => {
	const navigate = useNavigate();
	const [signOut, signOutLoading] = useSignOut(auth);
	
	if (signOutLoading) {
		return <Loader></Loader>
	}

	const handleLogOut = () => {
		localStorage.removeItem("activeToken")
		signOut()
		navigate('/developer/admin-login')

	}
	return (
		<div className="bg-gray-100 font-family-karla flex">

			<AdminSidebar handleLogOut={handleLogOut}></AdminSidebar>

			<div className="w-full flex flex-col h-screen overflow-y-hidden">
				{/* <!-- Desktop Header --> */}
				<DesktopHeader handleLogOut={handleLogOut}></DesktopHeader>

				{/* <!-- Mobile Header & Nav --> */}
				<MobileHeader ></MobileHeader>

				<div className="w-full overflow-x-hidden border-t flex flex-col">
					<main className="w-full flex-grow p-6">
						<Outlet></Outlet>

					</main>
				</div>

			</div >


		</div >
	);
};

export default AdminDashboard;