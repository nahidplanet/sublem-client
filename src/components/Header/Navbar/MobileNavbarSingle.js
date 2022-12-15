import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileNavbarSingle = ({ data }) => {
	const [open, setOpen] = useState(false);
	const handleNavbar = () => setOpen(!open);
	return (
		<div onClick={handleNavbar} className={`lg:hidden border text-gray-900  collapse collapse-plus ${open ? 'collapse-open' : 'collapse-close'}`}>
			<div className="collapse-title text-xl font-medium">
				<Link to={`/${data.route}`}>
					<p className='capitalize text-gray-900 font-semibold mt-2 ml-5'>{data.category}</p>
				</Link>
			</div>
			<div className="collapse-content ml-5">
				{
					data?.routes?.map((route, index) =>
						<Link to={`/${data.route}/${route.route}`} key={index} className='flex hover:shadow-sm gap-5 py-2 justify-between px-3 items-center hover:bg-gray-100'>
							<p className='capitalize text-gray-700 font-normal' >{route.name} </p>
							<span><ArrowLongRightIcon className='w-4 h-4 text-gray-700 ml-2'></ArrowLongRightIcon></span>
						</Link>
					)
				}
			</div>
		</div>
	);
};

export default MobileNavbarSingle;