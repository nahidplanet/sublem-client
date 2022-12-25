
import React from 'react';
import categorys from '../../../assets/category/service/serviceCategorys.jpg';
import cabinets from '../../../assets/category/service/cabinets.jpg';
import gypsum from '../../../assets/category/service/gypsum.jpg';
import painting from '../../../assets/category/service/painting.jpg';
import { Link } from 'react-router-dom';

const HomeServices = () => {


	return (
		<div className='my-20'>
			<div className="flex flex-col items-center mx-auto w-11/12">
				<h1 className="text-3xl font-bold text-gray-900 capitalize ">Our Services</h1>
				<div className="divider mx-0 h-[1px] bg-gray-400 font-bold"></div>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full p-8 gap-10">
				<div className="sm:col-span-2 md:col-span-3 lg:h-[500px]">
					<Link to={"service-category"}>
						<figure className='w-full h-full '>
							<img className='w-full h-full shadow-xl rounded-md' src={categorys} alt="Shoes" />
						</figure>
						
					</Link>
				</div>
				<div className=" h-[200px] p-0 w-full rounded-2xl ">
					<Link to={"/service-category/cabinets"}>
						<figure className='w-full h-full '>
							<img className='w-full h-full shadow-xl rounded-md' src={cabinets} alt="Shoes" />
						</figure>
						<h1 className='text-center  capitalize font-normal text-gray-800 text-xl mt-3'>cabinets design</h1>
					</Link>
				</div>
				<div className=" h-[200px] p-0 w-full rounded-2xl ">
					<Link to={"/service-category/gypsum"}>
						<figure className='w-full h-full '>
							<img className='w-full h-full shadow-xl rounded-md' src={gypsum} alt="Shoes" />
						</figure>
						<h1 className='text-center  capitalize font-normal text-gray-800 text-xl mt-3'>gypsum design</h1>
					</Link>
				</div>
				<div className=" h-[200px] p-0 w-full rounded-2xl ">
					<Link to={"/service-category/painting"}>
						<figure className='w-full h-full '>
							<img className='w-full h-full shadow-xl rounded-md' src={painting} alt="Shoes" />
						</figure>
						<h1 className='text-center  capitalize font-normal text-gray-800 text-xl mt-3 '>Wall-painting</h1>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HomeServices;