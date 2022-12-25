import React from 'react';
import { Link } from 'react-router-dom';
import OfficeCategorys from "../../../assets/category/office/officeCategory.jpg"
import sofa from "../../../assets/category/office/officesofa.jpg"
import carpet from "../../../assets/category/office/carpet.jpg"
import wallPainting from "../../../assets/category/office/wall-design.jpg"
import curtains from "../../../assets/category/office/curtains.jpg"

const OfficeCategory = () => {


	return (
		<div className='my-20'>
			<div className="flex flex-col items-center mx-auto w-11/12">
				<h1 className="text-3xl mt-3 font-bold  text-gray-900 capitalize ">Shop by Office</h1>
				<div className="divider mx-0 h-[1px] bg-gray-400 font-bold"></div>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full p-8 gap-10">
				<div className="sm:col-span-2 md:col-span-3 lg:h-[500px]">
					<Link to={"/office-category"}>
						<figure className='w-full h-full '>
							<img className='w-full h-full shadow-xl rounded-md' src={OfficeCategorys} alt="Shoes" />
						</figure>
						
					</Link>
				</div>
				<div className=" h-[200px] p-0 w-full rounded-2xl ">
					<Link to={"/office-category/carpets"}>
						<figure className='w-full h-full '>
							<img className='w-full h-full shadow-xl rounded-md' src={carpet} alt="Shoes" />
						</figure>
						<h1 className='text-center capitalize  text-gray-800 text-xl mt-3 font-normal'>carpet</h1>
					</Link>
				</div>
				<div className=" h-[200px] p-0 w-full rounded-2xl ">
					<Link to={"/office-category/sofa"}>
						<figure className='w-full h-full '>
							<img className='w-full h-full shadow-xl rounded-md' src={sofa} alt="Shoes" />
						</figure>
						<h1 className='text-center capitalize  text-gray-800 text-xl mt-3 font-normal'>sofa</h1>
					</Link>
				</div>
				<div className=" h-[200px] p-0 w-full rounded-2xl ">
					<Link to={"/office-category/curtains"}>
						<figure className='w-full h-full '>
							<img className='w-full h-full shadow-xl rounded-md' src={curtains} alt="Shoes" />
						</figure>
						<h1 className='text-center capitalize  text-gray-800 text-xl mt-3 font-normal'>curtains</h1>
					</Link>
				</div>
				<div className=" h-[200px] p-0 w-full rounded-2xl ">
					<Link to={"/office-category/wallpaper"}>
						<figure className='w-full h-full '>
							<img className='w-full h-full shadow-xl rounded-md' src={wallPainting} alt="Shoes" />
						</figure>
						<h1 className='text-center capitalize  text-gray-800 text-xl mt-3 font-normal'>wallpaper</h1>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default OfficeCategory;