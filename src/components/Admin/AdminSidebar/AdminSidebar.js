import React from 'react';
import CustomAdminLink from '../../Shared/CustomAdminLink';

const AdminSidebar = ({handleLogOut}) => {
	
	return (
		<div className="relative  bg-[#2A303C] h-screen w-64 hidden sm:block shadow-xl">
			<div className="p-6">
				<CustomAdminLink to={"/developer"} href="index.html" className="text-white text-2xl font-semibold uppercase hover:text-gray-300">sublem</CustomAdminLink>
				
			</div>


			<nav className="text-white text-base font-semibold pt-3">
				<CustomAdminLink to={"/developer"} href="index.html" className="flex items-center text-white py-4 pl-6 nav-item">
					<i className="fas fa-tachometer-alt mr-3"></i>
					Dashboard
				</CustomAdminLink>

				<CustomAdminLink to={"add-product"} href="blank.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
					<i className="fas fa-dumpster-fire mr-3"></i>
					Add Product
				</CustomAdminLink>
				<CustomAdminLink to={"add-product-bb"} href="blank.html" className=" text-orange-500 flex items-center opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
					<i className="fas fa-dumpster-fire mr-3"></i>
					Add Product BB
				</CustomAdminLink>

				<CustomAdminLink to={"all-product"} href="tables.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
				
					<i className="fas fa-layer-group mr-3"></i>
					All Product
				</CustomAdminLink>

				<CustomAdminLink to={"all-order"} href="tables.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">

					<i className="fas fa-list mr-3"></i>
					All Order
				</CustomAdminLink>

				<CustomAdminLink to={"all-user"} href="forms.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
					<i className="fas fa-users mr-3"></i>
					All Users
				</CustomAdminLink>
				<CustomAdminLink to={"add-slider"} href="forms.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
					<i className="fas fa-users mr-3"></i>
					Add Slider
				</CustomAdminLink>
				<CustomAdminLink to={"links"} href="forms.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
					<i className="fas fa-users mr-3"></i>
				Link
				</CustomAdminLink>

			</nav>
			<a onClick={handleLogOut}  className="link absolute w-full upgrade-btn bottom-0  text-white no-underline flex items-center justify-center py-4">
				<i className="fas fa-arrow-circle-up mr-3"></i>
				Sign Out
			</a>
		</div>
	);
};

export default AdminSidebar;