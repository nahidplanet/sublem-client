
import React from "react";
import Slider from "react-slick";
import SingleProduct from "../ProductCategory/SingleProduct";
import FeatureSingleProduct from "./FeatureSingleProduct";

const ProductSlider = () => {
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
				breakpoint: 1536,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
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
				<h1 className="text-2xl font-semibold text-gray-900 capitalize ">Featured Products</h1>
				<div className="divider h-[1px] bg-gray-400"></div> 
			</div>
			<Slider {...settings} className="mt-3 mb-20">
			
				<div className=" ">
					<FeatureSingleProduct></FeatureSingleProduct>
				</div>
				<div className=" ">
					<FeatureSingleProduct></FeatureSingleProduct>
				</div>
				<div className=" ">
					<FeatureSingleProduct></FeatureSingleProduct>
				</div>
				<div className=" ">
					<FeatureSingleProduct></FeatureSingleProduct>
				</div>
				<div className=" ">
					<FeatureSingleProduct></FeatureSingleProduct>
				</div>
				<div className=" ">
					<FeatureSingleProduct></FeatureSingleProduct>
				</div>




			</Slider>
		</div>
	);
};

export default ProductSlider;



