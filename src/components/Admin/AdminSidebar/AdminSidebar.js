import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = ({handleLogOut}) => {
	
	return (
		<div className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
			<div className="p-6">
				<Link to={"/developer"} href="index.html" className="text-white text-2xl font-semibold uppercase hover:text-gray-300">sublem</Link>
				
			</div>


			<nav className="text-white text-base font-semibold pt-3">
				<Link to={"/developer"} href="index.html" className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
					<i className="fas fa-tachometer-alt mr-3"></i>
					Dashboard
				</Link>

				<Link to={"add-product"} href="blank.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
					<i className="fas fa-dumpster-fire mr-3"></i>
					Add Product
				</Link>

				<Link to={"all-product"} href="tables.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
				
					<i className="fas fa-layer-group mr-3"></i>
					All Product
				</Link>

				<Link to={"all-order"} href="tables.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">

					<i className="fas fa-list mr-3"></i>
					All Order
				</Link>

				<Link to={"all-user"} href="forms.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
					<i className="fas fa-users mr-3"></i>
					All Users
				</Link>

			</nav>
			<a onClick={handleLogOut}  className="link absolute w-full upgrade-btn bottom-0 active-nav-link text-white no-underline flex items-center justify-center py-4">
				<i className="fas fa-arrow-circle-up mr-3"></i>
				Sign Out
			</a>
		</div>
	);
};

export default AdminSidebar;