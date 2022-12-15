
import React from 'react';
import sofa from '../../../assets/category/home/sofa.jpg';
import mattress from '../../../assets/category/home/mattress.jpg';
import carpet from '../../../assets/category/home/carpet.jpeg';
import bed from '../../../assets/category/home/carpet.jpg';
import { Link } from 'react-router-dom';

const HomeServices = () => {


	return (
		<div className='my-20'>
			<div className="flex flex-col items-center mx-auto w-11/12">
				<h1 className="text-2xl font-semibold text-gray-900 capitalize ">Our Services</h1>
				<div className="divider mx-0 h-[1px] bg-gray-400 font-bold"></div>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full p-8 gap-10">
				<div className="sm:col-span-2 md:col-span-3 lg:h-[500px]">
					<Link to={"service-category"}>
						<figure className='w-full h-full '>
							<img className='w-full h-full shadow-xl rounded-md' src={bed} alt="Shoes" />
						</figure>
						
					</Link>
				</div>
				<div className=" h-[200px] p-0 w-full rounded-2xl ">
					<Link to={"/service-category/cabinets"}>
						<figure className='w-full h-full '>
							<img className='w-full h-full shadow-xl rounded-md' src={carpet} alt="Shoes" />
						</figure>
						<h1 className='text-center capitalize font-semibold text-gray-800 text-2xl'>cabinets design</h1>
					</Link>
				</div>
				<div className=" h-[200px] p-0 w-full rounded-2xl ">
					<Link to={"/service-category/gypsum"}>
						<figure className='w-full h-full '>
							<img className='w-full h-full shadow-xl rounded-md' src={mattress} alt="Shoes" />
						</figure>
						<h1 className='text-center capitalize font-semibold text-gray-800 text-2xl'>gypsum design</h1>
					</Link>
				</div>
				<div className=" h-[200px] p-0 w-full rounded-2xl ">
					<Link to={"/service-category/painting"}>
						<figure className='w-full h-full '>
							<img className='w-full h-full shadow-xl rounded-md' src={sofa} alt="Shoes" />
						</figure>
						<h1 className='text-center capitalize font-semibold text-gray-800 text-2xl'>Wall-painting</h1>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HomeServices;