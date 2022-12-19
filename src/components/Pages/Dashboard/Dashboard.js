import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import CustomLink from '../../Shared/CutomLink';


const Dashboard = () => {
	const dashBoardMenuData = [
		{
			id: 1,
			path: "profile",
			name: "Profile"
		},
		{
			id: 2,
			path: "wishlist",
			name: "Wishlist"
		},
		{
			id: 3,
			path: "order-history",
			name: "Order History"
		},
		{
			id: 4,
			path: "save-cart",
			name: "Save Cart"
		},
	]
	return (
		<>

			<div className="drawer drawer-mobile ">
				<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content ">
					{/* <!-- Page content here --> */}
					<label htmlFor="my-drawer-2" className="btn text-gray-900 hover:bg-white border-none bg-white drawer-button lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
						<span className='capitalize ml-3 '>menu</span>
					</label>
					<div className='px-5 py-3 border-t-2'>
						<Outlet></Outlet>
					</div>
				</div>
				<div className="drawer-side">
					<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
					<ul className="menu p-4 w-60 bg-gray-300 text-white">
						{/* <!-- Sidebar content here --> */}
						{
							dashBoardMenuData.map(route => <li className='text-white font-semibold' key={route.id}><CustomLink to={route.path}> {route.name} </CustomLink> </li>)
						}
					</ul>

				</div>
			</div>

		</>
	);
};

export default Dashboard;