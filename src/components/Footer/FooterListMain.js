import React from 'react';
import { Link } from 'react-router-dom';

const FooterListMain = ({ data }) => {
	return (
		< div>
			<h4 className='capitalize font-bold text-lg text-gray-700 '><Link to={`/${data.route}`}>{data.category}</Link></h4>
			{
				data?.routes.map((item,index) =><div key={index}>
						<Link className='text-md capitalize hover:text-gray-500 font-normal' to={`/${data.route}/${item.route}`}>{item.name}</Link>
					</div>
				)
			}
		</div>
	);
};

export default FooterListMain;