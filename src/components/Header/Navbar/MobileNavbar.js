
import React, { useEffect, useState } from 'react';
import FooterMobileMenu from '../../Footer/FooterMobileMenu';
import MobileNavbarSingle from './MobileNavbarSingle';

const MobileNavbar = ({open}) => {
	const [menuData, setMenuData] = useState([]);
	
	useEffect(() => {
		fetch("menuData.json")
			.then(res => res.json())
			.then(data => setMenuData(data))
	}, [])

	return (
		<div className=' text-gray-800'>

		{open && <>
			<FooterMobileMenu></FooterMobileMenu>
		</>}
		
		</div>

	);
};

export default MobileNavbar;