import React from 'react';
import { FadeLoader } from 'react-spinners';
import {  CSSProperties } from "react";

const override: CSSProperties = {
	display: "block",
	margin: "0 auto",
	borderColor: "red",
  };


const Loader = () => {

	return (
		<div style={{zIndex:"15",opacity:"0.6"}} className="w-full h-screen bg-gray-800 flex justify-center items-center top-1/2 left-1/2 bottom-1/2 right-1/2 mx-auto">
			<FadeLoader
			className='index z-20'
			color={"#fff"}
			loading={true}
			cssOverride={override}
			size={200}
			aria-label="Loading Spinner"
			data-testid="loader"
		  
			/>
		</div>
	);
};

export default Loader;