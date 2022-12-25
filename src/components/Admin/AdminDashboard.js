import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import DesktopHeader from './AdminHeader/DesktopHeader';
import MobileHeader from './AdminHeader/MobileHeader';
import AdminSidebar from './AdminSidebar/AdminSidebar';

const AdminDashboard = () => {
	const navigate = useNavigate();

	const handleLogOut = () =>{
		localStorage.removeItem('activeToken')
		navigate('/login')

	}
	return (
		<div className="bg-gray-100 font-family-karla flex">

			<AdminSidebar handleLogOut={handleLogOut}></AdminSidebar>

			<div className="w-full flex flex-col h-screen overflow-y-hidden">
				{/* <!-- Desktop Header --> */}
				<DesktopHeader handleLogOut={handleLogOut}></DesktopHeader>

				{/* <!-- Mobile Header & Nav --> */}
				<MobileHeader handleLogOut={handleLogOut}></MobileHeader>

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