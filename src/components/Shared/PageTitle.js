import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({title}) => {
	return (
		<Helmet>
        <title>{title} - Seblem Furniture</title>
      </Helmet>
	);
};

export default PageTitle;