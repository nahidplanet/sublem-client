
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Slider from 'react-slick';
import Loader from '../../Shared/Loader';

const MainSlider = () => {
    const getFacts = () => {
        const res = axios.get(`http://localhost:5000/api/v1/slider`).then((res) => {
            return res
        })
        return res;
    };
    const { data, isLoading } = useQuery(['Slider'], getFacts);
    const slider = data?.data?.slider;
if (isLoading) {
    return <Loader></Loader>
}

    var settings = {
        dots: false,
        nextArrow: <></>,
        prevArrow: <></>,
        speed: 500,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        cssEase: "linear",
        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
                    autoplaySpeed: 2500,
                }
            }
        ]
    };
    return (
        
        <div >
            <Slider {...settings} className="">
            {
                    slider?.map((item,index) =>
                        <div key={item._id} id={"slider"+index} className="h-64 lg:h-[425px]  carousel-item relative w-full">
                            <img style={{backgroundSize:"cover"}} src={item.image} alt='slider' className="w-full h-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                               </div>
                        </div>
                    )
                }
            </Slider>
        </div>
    );
};

export default MainSlider;