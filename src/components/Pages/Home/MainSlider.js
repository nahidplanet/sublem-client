import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import sliderPhoto from '../../../assets/slider/slider-1.jpg'

const MainSlider = () => {
    const getFacts = () => {
		const res = axios.get(`http://localhost:5000/api/v1/slider`).then((res) => {
			return res
		})
		return res;
	};
	const { data, isLoading,refetch } = useQuery(['Slider'], getFacts);
	const slider = data?.data?.slider;
	
    return (
        <div>
            <div className="carousel w-full h-60 lg:h-[425px] ">
                {
                    slider?.map(item=>
                        <div key={item._id} id="slide1" className="carousel-item relative w-full">
                    <img src={item.image} alt='slider' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn rounded-lg bg-transparent hover:bg-transparent text-gray-900 border-none"> ❮</a>
                        <a href="#slide2" className="btn rounded-lg bg-transparent hover:bg-transparent text-gray-900 border-none"> ❯</a>
                    </div>
                </div>
                        )
                }
                
               
            </div>
        </div>
    );
};

export default MainSlider;