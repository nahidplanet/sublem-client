import React from 'react';

const FooterListMain = ({ data }) => {
	return (
		< div>
			<h4 className='capitalize font-semibold text-gray-700 '>{data.category}</h4>
			{
				data?.routes.map((item,index) =><div key={index}>
						<p>{item.name}</p>
					</div>
				)
			}
		</div>
	);
};

export default FooterListMain;