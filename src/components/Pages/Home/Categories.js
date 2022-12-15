import React from 'react';
import ArabicCategory from './ArabicCategory';
import HomeCategory from './HomeCategory';
import HomeServices from './HomeServices';
import OfficeCategory from './OfficeCategory';

const Categories = () => {
	return (
		<div>
			<ArabicCategory></ArabicCategory>
            <OfficeCategory></OfficeCategory>
            <HomeCategory></HomeCategory>
            <HomeServices></HomeServices>
		</div>
	);
};

export default Categories;