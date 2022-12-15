import React from 'react';
import FeatureSingleProduct from './FeatureSingleProduct';

const FeaturedProduct = () => {
    return (
        <div>
            <div className="section-title flex justify-center mt-10">
                <h1 className='capitalize font-semibold text-2xl text-gray-700'>Featured Products</h1>
                <div className="divider"></div>
            </div>
            <div className="product-section ">
                <FeatureSingleProduct></FeatureSingleProduct>
                <FeatureSingleProduct></FeatureSingleProduct>
                <FeatureSingleProduct></FeatureSingleProduct>
                <FeatureSingleProduct></FeatureSingleProduct>
            </div>
        </div>
    );
};

export default FeaturedProduct;