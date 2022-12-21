import React from 'react';
import Slider from "react-slick";
import { ArrowUturnLeftIcon, TruckIcon } from '@heroicons/react/24/solid'

const HeaderBottom = () => {
   
    var settings = {
        dots: false,
        nextArrow: <></>,
        prevArrow: <></>,
        speed: 500,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    autoplaySpeed: 2000,
                }
            }
        ]
    };
    return (
        <div id='headerBottomSliderButton' className="bg-gray-400 lg:h-12 p-3 w-full">
            <Slider {...settings} className="">
                <div>
                    <div className="text-white text-xs sm:text-xs md:text-sm flex items-center justify-center gap-5 lg:gap-8">
                        <span><TruckIcon className='w-6 h-6 text-white'></TruckIcon></span>
                        <p>Free Delivery and Fixing With No Minimum Spend*</p>
                    </div>
                </div>
                <div>
                    <div className="text-white text-xs sm:text-xs md:text-sm flex items-center justify-center gap-5 lg:gap-8">
                        <span><ArrowUturnLeftIcon className='w-6 h-6 text-white'></ArrowUturnLeftIcon></span>
                        <p>Free Delivery and Fixing With No Minimum Spend*</p>
                    </div>
                </div>
                <div>
                    <div className="text-white text-xs sm:text-xs md:text-sm flex items-center justify-center gap-5 lg:gap-8">
                        <span><TruckIcon className='w-6 h-6 text-white'></TruckIcon></span>
                        <p>Free Delivery and Fixing With No Minimum Spend*</p>
                    </div>
                </div>
                <div>
                    <div className="text-white text-xs sm:text-xs md:text-sm flex items-center justify-center gap-5 lg:gap-8">
                        <span><TruckIcon className='w-6 h-6 text-white'></TruckIcon></span>
                        <p>Free Delivery and Fixing With No Minimum Spend*</p>
                    </div>
                </div>



            </Slider>
        </div>
    );
};

export default HeaderBottom;





