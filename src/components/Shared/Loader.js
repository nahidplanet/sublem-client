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
		<div style={{zIndex:"15",opacity:"0.5"}} className='z-10 w-full h-screen flex justify-center items-center bg-slate-400 absolute top-0 left-0 bg-gray-400'>
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