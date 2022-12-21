import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FooterMobileMenu = () => {
	const [home, setHome] = useState(false)
	const [office, setOffice] = useState(false)
	const [arabic, setArabic] = useState(false)
	const [service, setService] = useState(false)
	return (
		<div className='lg:hidden'>
			<div onClick={() => setHome(!home)} className={`lg:hidden border  collapse collapse-plus ${home ? 'collapse-open' : 'collapse-close'}`}>
				<div className="collapse-title text-xl font-medium">
					<Link to={"/home-category"} className='capitalize text-gray-900 font-semibold mt-2 ml-5'>Home</Link>
				</div>
				<ul className="collapse-content">

					<li >
						<Link to={"home-category/curtains"} className="capitalize ml-6 flex items-center justify-between px-5">
							<p > Home curtains</p>
							<p ><ArrowLongRightIcon className='w-4 h-4 text-gray-700 ml-2'></ArrowLongRightIcon></p>
						</Link>
					</li>
					<li >
						<Link to={"home-category/carpets"} className="capitalize ml-6 flex items-center justify-between px-5">
							<p > Home carpets</p>
							<p ><ArrowLongRightIcon className='w-4 h-4 text-gray-700 ml-2'></ArrowLongRightIcon></p>
						</Link>
					</li>
					<li >
						<Link to={"home-category/sofa"} className="capitalize ml-6 flex items-center justify-between px-5">
							<p > Home sofa</p>
							<p ><ArrowLongRightIcon className='w-4 h-4 text-gray-700 ml-2'></ArrowLongRightIcon></p>
						</Link>
					</li>
					<li >
						<Link to={"home-category/wallpaper"} className="capitalize ml-6 flex items-center justify-between px-5">
							<p > Home wallpaper</p>
							<p ><ArrowLongRightIcon className='w-4 h-4 text-gray-700 ml-2'></ArrowLongRightIcon></p>
						</Link>
					</li>
					<li >
						<Link to={"home-category/bed"} className="capitalize ml-6 flex items-center justify-between px-5">
							<p > Home bed</p>
							<p ><ArrowLongRightIcon className='w-4 h-4 text-gray-700 ml-2'></ArrowLongRightIcon></p>
						</Link>
					</li>
					<li >
						<Link to={"home-category/bed_mattress"} className="capitalize ml-6 flex items-center justify-between px-5">
							<p > Home bed mattress</p>
							<p ><ArrowLongRightIcon className='w-4 h-4 text-gray-700 ml-2'></ArrowLongRightIcon></p>
						</Link>
					</li>

				</ul>
			</div>
			<div onClick={() => setOffice(!office)} className={`lg:hidden border  collapse collapse-plus ${office ? 'collapse-open' : 'collapse-close'}`}>
				<div className="collapse-title text-xl font-medium">
					<Link to={"/office-category"} className='capitalize text-gray-900 font-semibold mt-2 ml-5'>Office</Link>
				</div>
				<ul className="collapse-content">

					<ul className="collapse-content">

						<li >
							<Link to={"office-category/curtains"} className="capitalize ml-6 flex items-center justify-between px-5">
								<p > office curtains</p>
								<p ><ArrowLongRightIcon className='w-4 h-4 text-gray-700 ml-2'></ArrowLongRightIcon></p>
							</Link>
						</li>
						<li >
							<Link to={"office-category/carpets"} className="capitalize ml-6 flex items-center justify-between px-5">
								<p > office carpets</p>
								<p ><ArrowLongRightIcon className='w-4 h-4 text-gray-700 ml-2'></ArrowLongRightIcon></p>
							</Link>
						</li>
						<li >
							<Link to={"office-category/sofa"} className="capitalize ml-6 flex items-center justify-between px-5">
								<p > office sofa</p>
								<p ><ArrowLongRightIcon className='w-4 h-4 text-gray-700 ml-2'></ArrowLongRightIcon></p>
							</Link>
						</li>
						<li >
							<Link to={"office-category/wallpaper"} className="capitalize ml-6 flex items-center justify-between px-5">
								<p > office wallpaper</p>
								<p ><ArrowLongRightIcon className='w-4 h-4 text-gray-700 ml-2'></ArrowLongRightIcon></p>
							</Link>
						</li>

					</ul>

				</ul>
			</div>
			<div onClick={() => setArabic(!arabic)} className={`lg:hidden border  collapse collapse-plus ${arabic ? 'collapse-open' : 'collapse-close'}`}>
				<div className="collapse-title text-xl font-medium">
					<Link to={"/arabic-category"} className='capitalize text-gray-900 font-semibold mt-2 ml-5'>Arabic</Link>
				</div>
				<ul className="collapse-content">

					<ul className="collapse-content">

						<li >
							<Link to={"arabic-category/curtains"} className="capitalize ml-6 flex items-center justify-between px-5">
								<p > arabic curtains</p>
								<p ><ArrowLongRightIcon className='w-4 h-4 text-gray-700 ml-2'></ArrowLongRightIcon></p>
							</Link>
						</li>
						<li >
							<Link to={"arabic-category/carpets"} className="capitalize ml-6 flex items-center justify-between px-5">
								<p > arabic carpets</p>
								<p ><ArrowLongRightIcon className='w-4 h-4 text-gray-700 ml-2'></ArrowLongRightIcon></p>
							</Link>
						</li>
						<li >
							<Link to={"arabic-category/sofa"} className="capitalize ml-6 flex items-center justify-between px-5">
								<p > arabic sofa</p>
								<p ><ArrowLongRightIcon className='w-4 h-4 text-gray-700 ml-2'></ArrowLongRightIcon></p>
							</Link>
						</li>
						<li >
							<Link to={"arabic-category/wallpaper"} className="capitalize ml-6 flex items-center justify-between px-5">
								<p > arabic wallpaper</p>
								<p ><ArrowLongRightIcon className='w-4 h-4 text-gray-700 ml-2'></ArrowLongRightIcon></p>
							</Link>
						</li>
						<li >
							<Link to={"arabic-category/bed"} className="capitalize ml-6 flex items-center justify-between px-5">
								<p > arabic bed</p>
								<p ><ArrowLongRightIcon className='w-4 h-4 text-gray-700 ml-2'></ArrowLongRightIcon></p>
							</Link>
						</li>
						<li >
							<Link to={"arabic-category/bed_mattress"} className="capitalize ml-6 flex items-center justify-between px-5">
								<p > arabic bed mattress</p>
								<p ><ArrowLongRightIcon className='w-4 h-4 text-gray-700 ml-2'></ArrowLongRightIcon></p>
							</Link>
						</li>

					</ul>

				</ul>
			</div>
			<div onClick={() => setService(!service)} className={`lg:hidden border  collapse collapse-plus ${service ? 'collapse-open' : 'collapse-close'}`}>
				<div className="collapse-title text-xl font-medium">
					<Link to={"/service-category"} className='capitalize text-gray-900 font-semibold mt-2 ml-5'>Our Service</Link>
				</div>
				<ul className="collapse-content">

					<ul className="collapse-content">

						<li >
							<Link to={"/service-category/painting"} className="capitalize ml-6 flex items-center justify-between px-5">
								<p > Wall painting</p>
								<p ><ArrowLongRightIcon className='w-4 h-4 text-gray-700 ml-2'></ArrowLongRightIcon></p>
							</Link>
						</li>
						<li >
							<Link to={"/service-category/cabinets"} className="capitalize ml-6 flex items-center justify-between px-5">
								<p > Cabinets design</p>
								<p ><ArrowLongRightIcon className='w-4 h-4 text-gray-700 ml-2'></ArrowLongRightIcon></p>
							</Link>
						</li>
						<li >
							<Link to={"/service-category/gypsum"} className="capitalize ml-6 flex items-center justify-between px-5">
								<p > gypsum design</p>
								<p ><ArrowLongRightIcon className='w-4 h-4 text-gray-700 ml-2'></ArrowLongRightIcon></p>
							</Link>
						</li>
						

					</ul>

				</ul>
			</div>
		</div>
	);
};

export default FooterMobileMenu;