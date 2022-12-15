import React, { useState } from 'react';



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
			<div className="collapse-content">
				{
					data?.routes?.map((item, index) => <div key={index}>
						{item?.name}
					</div>)
				}
			</div>
		</div>
	);
};

export default FooterListMobile;