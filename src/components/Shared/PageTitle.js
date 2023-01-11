import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({ title }) => {
	return (
		<Helmet>
			<meta property="og:title" content="Sublem Furniture || Dubai Furniture" />
			<meta property="og:type" content="article" />
			<meta name="description" content="Looking For The Best Furniture Stores in Dubai? Sublem -The Best Places To Get Luxury Furniture In Dubai" />
			<meta property="og:url" content="https://sublem.com" />
			<meta property="og:image" content="https://i.ibb.co/ysFttp2/20221220-020248-0000.png" />
			<title>{title} - Sublem Furniture</title>
		</Helmet>
	);
};

export default PageTitle;