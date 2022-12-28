import React, { useState } from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import auth from '../../../firebaseAuth/firebase.init';
import CustomAdminLink from '../../Shared/CustomAdminLink';
import Loader from '../../Shared/Loader';

const MobileHeader = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [signOut, signOutLoading] = useSignOut(auth);
	const navigate = useNavigate();
	if (signOutLoading) {
		return <Loader></Loader>
	}
	const handleLogOut = () => {
		signOut()
		localStorage.removeItem("activeToken")
		navigate('/login')
	}
	return (
		<header className="w-full bg-sidebar  sm:hidden bg-slate-800">
			<div className="flex items-center justify-between px-5 py-5 ">
				<CustomAdminLink to="/developer" className="text-white text-2xl font-semibold uppercase hover:text-gray-300">sublem</CustomAdminLink>
				<p onClick={() => setIsOpen(!isOpen)} className="cursor-pointer text-white text-3xl hover:text-gray-400">
					{isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars "></i>}
				</p>
			</div>

			{/* <!-- Dropdown Nav --> */}
			<nav className={`${isOpen ? 'block' : 'hidden'} 'flex flex-col pt-4 hidden'`} >
				<CustomAdminLink to={"/developer"} className="flex items-center  text-white py-2 pl-4 nav-item">
					<i className="fas fa-tachometer-alt mr-3"></i>
					Dashboard
				</CustomAdminLink>
				<CustomAdminLink to={"add-product"} className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
					<i className="fas fa-dumpster-fire mr-3"></i>
					Add Product
				</CustomAdminLink>
				<CustomAdminLink to={"add-product-bb"} className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
					<i className="fas fa-dumpster-fire mr-3"></i>
					Add Product BB
				</CustomAdminLink>
				<CustomAdminLink to={"all-product"} className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">

					<i className="fas fa-layer-group mr-3"></i>
					All Product
				</CustomAdminLink>
				<CustomAdminLink to={"all-order"} className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
					<i className="fas fa-list mr-3"></i>
					All Order
				</CustomAdminLink>
				<CustomAdminLink to={"all-user"} className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
					<i className="fas fa-users mr-3"></i>
					All Users
				</CustomAdminLink>
				<CustomAdminLink to={"add-slider"} className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
					<i className="fas fa-fan mr-3"></i>
					Add Slider
				</CustomAdminLink>
				<CustomAdminLink to={"links"} className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
					<i className="fas fa-fan mr-3"></i>
					Add Link
				</CustomAdminLink>

				<div className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
					<button onClick={handleLogOut} className=" py-0 my-0 block link no-underline text-white opacity-75 hover:opacity-100 nav-item">

						<i className="fa-regular fa-fan mr-3"></i>
						Sign Out
					</button>
				</div>
			</nav>
		</header >
	);
};

export default MobileHeader;