import React, { useState } from 'react';
import { Link} from 'react-router-dom';


const DesktopHeader = ({ handleLogOut }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="w-full items-center bg-white  px-6 hidden sm:flex">
			<div className="w-1/2"></div>
			<div className="relative w-1/2 flex justify-end py-2">
				<div onClick={() => setIsOpen(!isOpen)} className="relative z-10 w-12 h-12 cursor-pointer rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
					<img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" alt='' />
				</div>

				<div className={`${isOpen ? "block" : 'hidden'} z-20 absolute w-32 bg-[#1E1E1E] rounded-lg shadow-lg py-2 mt-16`}  >
					<Link to="all-order" className="block px-4 py-2 account-link hover:text-white">New Order</Link>
					<Link to="add-slider" className="block px-4 py-2 account-link hover:text-white">Add Slider</Link>
					<button onClick={handleLogOut} className="link no-underline block py-0 px-4 my-0 account-button hover:text-white"> Sign Out <i className="fas fa-sign-out-alt "></i></button>
				</div>
			</div>
		</div>
	);
};

export default DesktopHeader;