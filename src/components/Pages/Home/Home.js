import React from 'react';
import Categories from './Categories';
import MainSlider from './MainSlider';
import ProductSlider from './ProductSlider';

const Home = () => {
    return (
        <>
            <div>
                <MainSlider></MainSlider>
                <ProductSlider></ProductSlider>
                <Categories></Categories>
            </div>
        </>
    );
};

export default Home;