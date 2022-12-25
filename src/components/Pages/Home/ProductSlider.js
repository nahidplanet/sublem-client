
import React from "react";
import { useQuery } from "react-query";
import Slider from "react-slick";
import axiosInst from "../../axios";
import SliderSingleProduct from "./SliderSingleProduct";

const ProductSlider = () => {
	const getFacts = () => {
		const res = axiosInst.get(`/product?category=service`).then((response) => {
			return response
		})
		return res;
	};
	const { data, isLoading } = useQuery(['ServiceSlider'], getFacts);
	var settings = {
		dots: false,
        prevArrow: <></>,
		nextArrow:<></>,
		speed: 800,
		initialSlide: 0,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: "linear",
		responsive: [
			
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: false,
					autoplaySpeed: 2000,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: false,
					autoplaySpeed: 2000,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: false,
					autoplaySpeed: 2000,
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: false,
					autoplaySpeed: 2000,
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
		<div className=" mx-auto mt-14">
			<div className="flex flex-col items-center">
				<h1 className="text-3xl font-bold text-gray-900 capitalize ">Our Service</h1>
				<div className="divider h-[1px] bg-gray-400"></div>
			</div>
			<Slider {...settings} className="mt-3 mb-20">
				
				{
					data?.data?.data?.products?.map(service =>
						<div key={service._id} className=" ">
							<SliderSingleProduct  key={service._id}  data={service}></SliderSingleProduct>
						</div>
					)
				}
			</Slider>
		</div>
	
	);
};

export default ProductSlider;



