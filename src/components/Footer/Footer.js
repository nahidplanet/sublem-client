import React, { useEffect, useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';
import CustomLink from '../Shared/CutomLink';
import FooterMobileMenu from './FooterMobileMenu';
import FooterSocial from './FooterSocial';
import { api } from '../../urlConfig';
import { toast } from 'react-toastify';

const Footer = () => {

    const [menuData, setMenuData] = useState([]);
    const [socialLink, setSocialLink] = useState(null);

    useEffect(() => {
        fetch(`${api}/social-links`)
            .then(res => res.json())
            .then(data => setSocialLink(data))
    }, [])

    useEffect(() => {
        fetch("menuData.json")
            .then(res => res.json())
            .then(data => setMenuData(data))
    }, [])
    let date = new Date();
    date = date.getFullYear();
    const handleEmailFooter=()=>{
        toast.success("Thanks For Submission")
    }
    return (
        <div className=''>
            {/* footer top  */}

            <div className="bg-gray-300 py-5 flex justify-start items-center gap-10 w-full">
                <div className='flex items-center justify-center w-full'>
                    <div className="hidden lg:block mr-5">
                        <h1 className='text-gray-800 text-bold text-xl'>Sign up to receive updates and exclusive offers by email</h1>
                    </div>
                    <div className='flex justify-start items-center w-full lg:w-80 px-4 lg:px-0'>
                        <input type="text" placeholder="Email Address..." className="text-gray-800 font-semibold input input-bordered border-black  input-md w-full  bg-white border-r-0 rounded rounded-r-none" />
                        <button onClick={handleEmailFooter} className='border w-[40px] mt-[10px] border-l-0 bg-black text-white  border-black rounded rounded-l-none'>
                            <CheckIcon className='w-5 h-[46px] mx-2 ' />
                        </button>
                    </div>
                </div>
            </div>
            <p className='text-gray-700 font-sm md:font-md lg:font-lg text-center py-5'>To see how we process your data view our </p>



            {/* footer  */}


            <div className=' text-gray-800 flex justify-between flex-col lg:flex-row gap-3 w-full'>

                {
                 socialLink && socialLink?.links?.map((item,i) => <FooterSocial item={item} key={i}></FooterSocial>)
                }
                {/* showing in mobile device */}
                <div className='lg:hidden z-10 '>
                    <FooterMobileMenu></FooterMobileMenu>

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
                                    <CustomLink to={"home-category/curtains"} className="capitalize ml-2">Home curtains</CustomLink>
                                </li>
                                <li >
                                    <CustomLink to={"home-category/carpets"} className="capitalize ml-2">Home carpets</CustomLink>
                                </li>
                                <li >
                                    <CustomLink to={"home-category/sofa"} className="capitalize ml-2">Home sofa</CustomLink>
                                </li>
                                <li >
                                    <CustomLink to={"home-category/wallpaper"} className="capitalize ml-2">Home wallpaper</CustomLink>
                                </li>
                                <li >
                                    <CustomLink to={"home-category/bed"} className="capitalize ml-2">Home bed</CustomLink>
                                </li>
                                <li >
                                    <CustomLink to={"home-category/bed_mattress"} className="capitalize ml-2">Home bed mattress</CustomLink>
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
                    </div>
                </div>
                {/* showing in pc device */}
            </div>
            {/* footer bottom */}
            <div className="divider mx-0 h-[1px] bg-gray-400 font-bold my-5"></div>
            <div className=' pb-5 '>
                <div className='flex flex-wrap justify-center sm:justify-between items-center text-sm px-10'>
                    <p className='capitalize text-gray-900'>Copyright &copy; {date} Sublem - Furniture. All Rights Reserved || Abu Dhabi </p>
                    <p className='text-gray-900 text-[5px]'>Developer: <a className='text-orange-400' href="https://linkedin.com/in/nahidplanet" target={'_blank'}>Nahid Hasan</a></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;