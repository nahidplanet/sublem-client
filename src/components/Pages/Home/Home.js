import React from 'react';

import PageTitle from '../../Shared/PageTitle';
import Categories from './Categories';
import MainSlider from './MainSlider';
import ProductSlider from './ProductSlider';

const Home = () => {

   
    return (
        <>
            <div>
                <PageTitle title="home"> </PageTitle>
                <MainSlider></MainSlider>
                <ProductSlider></ProductSlider>
                <Categories></Categories>
            </div>
        </>
    );
};

export default Home;