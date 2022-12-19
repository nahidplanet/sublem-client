
import React, { useEffect, useState } from 'react';
import MobileNavbarSingle from './MobileNavbarSingle';

const MobileNavbar = ({open}) => {
	const [menuData, setMenuData] = useState([]);
	
	useEffect(() => {
		fetch("menuData.json")
			.then(res => res.json())
			.then(data => setMenuData(data))
	}, [])
	return (
		<div>

		{open && <>
			{
				menuData?.map(data => <MobileNavbarSingle key={data.id} data={data} ></MobileNavbarSingle>)
			}
		</>}
		</div>

	);
};

export default MobileNavbar;