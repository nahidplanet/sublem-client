import { ChevronDownIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search/Search';
import Logo from '../Header/Logo/Logo';

const MainMenu = () => {



    return (
        <div className='hidden lg:block h-22 lg:py-2' >
            <div className='flex items-center justify-around h-full bg-white text-black my-2'>
                <div className="w-[190px] h-[62px]">
                   <Logo></Logo>
                </div>
                <div className='flex gap-5'>
                    <div className="dropdown dropdown-hover ">
                        <div className='flex justify-center items-center '>
                            <Link to={"/home-category"}>
                                <label tabIndex={0} className=" m-1 lg:text-lg cursor-pointer capitalize">home furniture</label>
                            </Link>
                            <ChevronDownIcon className='w-4 h-4 ml-1'></ChevronDownIcon>
                        </div>
                        <ul tabIndex={0} className="dropdown-content capitalize menu p-2 bg-white w-52 absolute border-none rounded-none shadow-none">
                            <li >
                                <Link to={"home-category/curtains"}>Home curtains</Link>
                            </li>
                            <li >
                                <Link to={"home-category/carpets"}>Home carpets</Link>
                            </li>
                            <li >
                                <Link to={"home-category/sofa"}>Home sofa</Link>
                            </li>
                            <li >
                                <Link to={"home-category/wallpaper"}>Home wallpaper</Link>
                            </li>
                            <li >
                                <Link to={"home-category/bed"}>Home bed</Link>
                            </li>
                            <li >
                                <Link to={"home-category/bed_mattress"}>Home bed mattress</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-hover ">
                        <div className='flex justify-center items-center '>
                            <Link to={'/office-category'}>
                                <label tabIndex={0} className=" m-1 lg:text-lg cursor-pointer capitalize">office furniture</label>
                            </Link>
                            <ChevronDownIcon className='w-4 h-4 ml-1'></ChevronDownIcon>
                        </div>
                        <ul tabIndex={0} className="dropdown-content capitalize menu p-2 bg-white w-52 absolute border-none rounded-none shadow-none">
                            <li >
                                <Link to={"office-category/curtains"}>Office curtains</Link>
                            </li>
                            <li >
                                <Link to={"office-category/carpets"}>Office carpets</Link>
                            </li>
                            <li >
                                <Link to={"office-category/sofa"}>Office sofa</Link>
                            </li>
                            <li >
                                <Link to={"office-category/wallpaper"}>Office wallpaper</Link>
                            </li>
                           
                        </ul>
                    </div>
                    <div className="dropdown dropdown-hover ">
                        <div className='flex justify-center items-center '>
                            <Link to={'/arabic-category'}>
                                <label tabIndex={0} className=" m-1 lg:text-lg cursor-pointer capitalize">arabian furniture</label>
                            </Link>
                            <ChevronDownIcon className='w-4 h-4 ml-1'></ChevronDownIcon>
                        </div>
                        <ul tabIndex={0} className="dropdown-content capitalize menu p-2 bg-white w-52 absolute border-none rounded-none shadow-none">
                            <li >
                                <Link to={"arabic-category/curtains"}>Arabic curtains</Link>
                            </li>
                            <li >
                                <Link to={"arabic-category/carpets"}>Arabic carpets</Link>
                            </li>
                            <li >
                                <Link to={"arabic-category/sofa"}>Arabic sofa</Link>
                            </li>
                            <li >
                                <Link to={"arabic-category/wallpaper"}>Arabic wallpaper</Link>
                            </li>
                            <li >
                                <Link to={"arabic-category/bed"}>Arabic bed</Link>
                            </li>
                            <li >
                                <Link to={"arabic-category/bed_mattress"}>Arabic bed mattress</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-hover ">
                        <div className='flex justify-center items-center '>
                            <Link to={'/service-category'}>
                                <label tabIndex={0} className=" m-1 lg:text-lg cursor-pointer capitalize">our services</label>
                            </Link>
                            <ChevronDownIcon className='w-4 h-4 ml-1'></ChevronDownIcon>
                        </div>
                        <ul tabIndex={0} className="dropdown-content capitalize menu p-2 bg-white w-52 absolute border-none rounded-none shadow-none">
                            <li >
                                <Link to={"service-category/painting"}>wall-painting</Link>
                            </li>
                            <li >
                                <Link to={"service-category/cabinets"}>cabinets design</Link>
                            </li>
                            <li >
                                <Link to={"service-category/gypsum"}>gypsum design</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <Search></Search>
            </div>
        </div>
    );
};

export default MainMenu;