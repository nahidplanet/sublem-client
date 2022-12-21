import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileHeader = ({ handleLogOut }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<header className="w-full bg-sidebar  sm:hidden bg-slate-800">
			<div className="flex items-center justify-between px-5 py-5 ">
				<Link to="/developer" className="text-white text-2xl font-semibold uppercase hover:text-gray-300">sublem</Link>
				<p onClick={() => setIsOpen(!isOpen)} className="cursor-pointer text-white text-3xl hover:text-gray-400">
					{isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars "></i>}
				</p>
			</div>

			{/* <!-- Dropdown Nav --> */}
			<nav className={`${isOpen ? 'block' : 'hidden'} 'flex flex-col pt-4 hidden'`} >
				<Link to={"/developer"} href="index.html" className="flex items-center active-nav-link text-white py-2 pl-4 nav-item">
					<i className="fas fa-tachometer-alt mr-3"></i>
					Dashboard
				</Link>
				<Link to={"add-product"} href="blank.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
					<i className="fas fa-dumpster-fire mr-3"></i>
					Add Product
				</Link>
				<Link to={"all-product"} href="tables.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">

					<i className="fas fa-layer-group mr-3"></i>
					All Product
				</Link>
				<Link to={"all-order"} href="forms.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
					<i className="fas fa-list mr-3"></i>
					All Order
				</Link>
				<Link to={"all-user"} href="tabs.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
					<i className="fas fa-users mr-3"></i>
					All Users
				</Link>

				<button onClick={handleLogOut} className="link no-underline flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
					<i className="fas fa-sign-out-alt mr-3"></i>
					Sign Out
				</button>
			</nav>
		</header >
	);
};

export default MobileHeader;