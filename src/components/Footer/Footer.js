import React, { useEffect, useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

// logo 
import facebook from "../../assets/icon/facebook.svg";
import twitter from "../../assets/icon/twitter.svg";
import instagram from "../../assets/icon/instagram.svg";
import youtube from "../../assets/icon/youtube.svg";
import linkedin from "../../assets/icon/linkedin.svg";
import whatsapp from "../../assets/icon/whatsapp.svg";
import FooterListMobile from './FooterListMobile';
import CustomLink from '../Shared/CutomLink';

const Footer = () => {

	const [menuData, setMenuData] = useState([]);
	
	useEffect(() => {
		fetch("menuData.json")
			.then(res => res.json())
			.then(data => setMenuData(data))
	}, [])
    let date = new Date();
    date = date.getFullYear();
    return (
        <div className=''>
            {/* footer top  */}


            <div className="bg-gray-300 py-5 flex justify-start items-center gap-10">
                <div className="hidden lg:block">
                    <h1 className='text-gray-800 text-bold text-xl'>Sign up to receive updates and exclusive offers by email</h1>
                </div>
                <div className='flex justify-start items-center w-full lg:w-80 px-4 lg:px-0'>
                    <input type="text" placeholder="Email Address..." className="font-semibold input input-bordered border-black  input-md w-full  bg-white border-r-0 rounded rounded-r-none" />
                    <button className='border w-[40px] mt-[10px] border-l-0 bg-black text-white  border-black rounded rounded-l-none'>
                        <CheckIcon className='w-5 h-[46px] mx-2 ' />
                    </button>
                </div>
            </div>
            <p className='text-gray-700 font-sm md:font-md lg:font-lg text-center py-5'>To see how we process your data view our </p>



            {/* footer  */}

            <div className=' text-gray-800 flex justify-between flex-col lg:flex-row gap-3 w-full'>
                <div className="grid lg:grid-cols-3 grid-cols-6 lg:w-3/12 p-5 ">
                    <div className='w-10 h-10 rounded-full p-2 hover:bg-gray-200 cursor-pointer  border '>
                        <img className='w-full h-full mx-auto' src={facebook} alt="facebook" />
                    </div>
                    <div className='w-10 h-10 rounded-full p-2 hover:bg-gray-200 cursor-pointer  border '>
                        <img className='w-full h-full mx-auto' src={twitter} alt="facebook" />
                    </div>
                    <div className='w-10 h-10 rounded-full p-2 hover:bg-gray-200 cursor-pointer  border '>
                        <img className='w-full h-full mx-auto' src={youtube} alt="facebook" />
                    </div>

                    <div className='w-10 h-10 rounded-full p-2 hover:bg-gray-200 cursor-pointer  border '>
                        <img className='w-full h-full mx-auto' src={whatsapp} alt="facebook" />
                    </div>
                    <div className='w-10 h-10 rounded-full p-2 hover:bg-gray-200 cursor-pointer  border '>
                        <img className='w-full h-full mx-auto' src={linkedin} alt="facebook" />
                    </div>
                    <div className='w-10 h-10 rounded-full p-2 hover:bg-gray-200 cursor-pointer  border '>
                        <img className='w-full h-full mx-auto' src={instagram} alt="facebook" />
                    </div>
                </div>
                {/* showing in mobile device */}
                <div className='lg:hidden'>
                    {menuData?.map(item => <FooterListMobile key={item.id} data={item}></FooterListMobile>)}
                </div>
                {/* showing in mobile device */}

                {/* showing in pc device */}
                <div className='hidden lg:block lg:w-9/12 '>
                    <div className='grid grid-cols-4'>
                        {/* {list.map(item => <FooterListMain key={item.id} data={item}> </FooterListMain>)} */}
                        <div className=" ">
                                <div className='flex justify-start items-center '>
                                    <CustomLink to={"/home-category"}>
                                        <label className=" m-1 lg:text-xl font-bold cursor-pointer capitalize">home furniture</label>
                                    </CustomLink>

                                </div>
                                <ul className=" capitalize">
                                    <li >
                                        <CustomLink to={"home-category/curtains" } className="capitalize ml-2">Home curtains</CustomLink>
                                    </li>
                                    <li >
                                        <CustomLink to={"home-category/carpets" } className="capitalize ml-2">Home carpets</CustomLink>
                                    </li>
                                    <li >
                                        <CustomLink to={"home-category/sofa" } className="capitalize ml-2">Home sofa</CustomLink>
                                    </li>
                                    <li >
                                        <CustomLink to={"home-category/wallpaper" } className="capitalize ml-2">Home wallpaper</CustomLink>
                                    </li>
                                    <li >
                                        <CustomLink to={"home-category/bed" } className="capitalize ml-2">Home bed</CustomLink>
                                    </li>
                                    <li >
                                        <CustomLink to={"home-category/bed_mattress" } className="capitalize ml-2">Home bed mattress</CustomLink>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className=" ">
                                <div className='flex justify-start items-center '>
                                    <CustomLink to={'/arabic-category'}>
                                        <label className=" m-1 lg:text-xl font-bold cursor-pointer capitalize">arabian furniture</label>
                                    </CustomLink>

                                </div>
                                <ul className=" capitalize">
                                    <li >
                                        <CustomLink to={"arabic-category/curtains"} className="capitalize ml-2">arabic curtains</CustomLink>
                                    </li>
                                    <li >
                                        <CustomLink to={"arabic-category/carpets"} className="capitalize ml-2">arabic carpets</CustomLink>
                                    </li>
                                    <li >
                                        <CustomLink to={"arabic-category/sofa"} className="capitalize ml-2">arabic sofa</CustomLink>
                                    </li>
                                    <li >
                                        <CustomLink to={"arabic-category/wallpaper"} className="capitalize ml-2">arabic wallpaper</CustomLink>
                                    </li>
                                    <li >
                                        <CustomLink to={"arabic-category/bed"} className="capitalize ml-2">arabic bed</CustomLink>
                                    </li>
                                    <li >
                                        <CustomLink to={"arabic-category/bed_mattress"} className="capitalize ml-2">arabic bed mattress</CustomLink>
                                    </li>
                                </ul>
                            </div>
                            <div className=" ">
                                <div className='flex justify-start items-center '>
                                    <CustomLink to={'/office-category'}>
                                        <label className=" m-1 lg:text-xl font-bold cursor-pointer capitalize">office furniture</label>
                                    </CustomLink>

                                </div>
                                <ul className=" capitalize">
                                    <li >
                                        <CustomLink to={"office-category/curtains"} className="capitalize ml-2">Office curtains</CustomLink>
                                    </li>
                                    <li >
                                        <CustomLink to={"office-category/carpets"} className="capitalize ml-2">Office carpets</CustomLink>
                                    </li>
                                    <li >
                                        <CustomLink to={"office-category/sofa"} className="capitalize ml-2">Office sofa</CustomLink>
                                    </li>
                                    <li >
                                        <CustomLink to={"office-category/wallpaper"} className="capitalize ml-2">Office wallpaper</CustomLink>
                                    </li>
                                   
                                </ul>
                            </div>
                            <div className=" ">
                                <div className='flex justify-start items-center '>
                                    <CustomLink to={'/service-category'}>
                                        <label className=" m-1 lg:text-xl font-bold cursor-pointer capitalize">our services</label>
                                    </CustomLink>

                                </div>
                                <ul className=" capitalize">
                                    <li >
                                        <CustomLink to={"service-category/painting"} className="ml-2">wall-painting</CustomLink>
                                    </li>
                                    <li >
                                        <CustomLink to={"service-category/cabinets"} className="ml-2">cabinets design</CustomLink>
                                    </li>
                                    <li >
                                        <CustomLink to={"service-category/gypsum"} className="ml-2">gypsum design</CustomLink>
                                    </li>
                                </ul>
                            </div>
                        {/* {list.map(item => <FooterListMain key={item.id} data={item}> </FooterListMain>)} */}
                    </div>
                </div>
                {/* showing in pc device */}
            </div>
            {/* footer bottom */}
            <div className="divider mx-0 h-[1px] bg-gray-400 font-bold my-5"></div>
            <div className=' pb-5 '>
                <div className='flex flex-wrap justify-center sm:justify-between items-center text-sm px-10'>
                    <p className='capitalize text-gray-900'>© {date} Sublem - Furnishings. All Rights Reserved || Abu Dhabi </p>
                    <p className='text-gray-900'>eCommerce by <a href="https://linkedin.com/in/nahidplanet" target={'_blank'}>Nahid Hasan</a></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;