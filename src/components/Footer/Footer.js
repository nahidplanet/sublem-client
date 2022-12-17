import React, { useEffect, useState } from 'react';
import visa from '../../../src/assets/footer/visa.jpg'
import master from '../../../src/assets/footer/master.png'
import { CheckIcon } from '@heroicons/react/24/solid';

// logo 
import facebook from "../../assets/icon/facebook.svg";
import twitter from "../../assets/icon/twitter.svg";
import instagram from "../../assets/icon/instagram.svg";
import youtube from "../../assets/icon/youtube.svg";
import linkedin from "../../assets/icon/linkedin.svg";
import whatsapp from "../../assets/icon/whatsapp.svg";
import FooterListMobile from './FooterListMobile';
import FooterListMain from './FooterListMain';

const Footer = () => {

    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('menuData.json')
            .then(res => res.json())
            .then(data => setList(data))
    }, [])

    let date = new Date();
    date = date.getFullYear();

    return (
        <div className=''>
            {/* footer top  */}


            <div className="bg-gray-300 py-5 flex justify-center items-center gap-10">
                <div className="hidden lg:block">
                    <h1 className='text-gray-800 text-bold text-xl'>Sign up to receive updates and exclusive offers by email</h1>
                </div>
                <div className='flex justify-center items-center w-full lg:w-80 px-4 lg:px-0'>
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
                    {list.map(item => <FooterListMobile key={item.id} data={item}></FooterListMobile>)}
                </div>
                {/* showing in mobile device */}

                {/* showing in pc device */}
                <div className='hidden lg:block lg:w-9/12 '>
                    <div className='grid grid-cols-5'>
                        {list.map(item => <FooterListMain key={item.id} data={item}> </FooterListMain>)}
                    </div>
                </div>
                {/* showing in pc device */}
            </div>












            {/* footer bottom */}
            <div className="divider mx-0 h-[1px] bg-gray-400 font-bold my-5"></div>
            <div className=' pb-5 '>
                <div className='flex flex-wrap justify-center sm:justify-between items-center text-sm'>
                    <p className='capitalize'>© {date} sublem Home Furnishings. All Rights Reserved.</p>
                    <p>eCommerce by NahidPlanet</p>
                </div>
                <div className=' mx-auto my-5'>
                    <div className="flex justify-center items-center">
                        <img className='w-10 h-6' src={visa} alt="visa" />
                        <img className='w-10 h-6' src={master} alt="master" />
                        <img className='w-10 h-6' src={visa} alt="visa" />
                    </div>
                    <p className='text-[10px]  text-center'>Pan Emirates Home Furnishings - Sharjah, UAE</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;