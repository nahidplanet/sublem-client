import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const FooterListMobile = ({data}) => {
	const [open, setOpen] = useState(false);
	const handleFooterList = () => {
		setOpen(!open)
	}
	return (
		<div onClick={handleFooterList} className={`lg:hidden border  collapse collapse-plus ${open? 'collapse-open':'collapse-close'}`}>
			<div className="collapse-title text-xl font-medium">
				<p className='capitalize text-gray-900 font-semibold mt-2 ml-5'>{data.category}</p>
			</div>
			<ul className="collapse-content">
				{
					data?.routes?.map((route, index) => <li key={index} className="ml-7"><Link to={`/${data.route}/${route.route}`} >
						{route?.name}
					</Link></li>)
				}
			</ul>
		</div>
	);
};

export default FooterListMobile;