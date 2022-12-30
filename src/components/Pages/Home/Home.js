import React from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebaseAuth/firebase.init';
import useLoadCart from '../../../hooks/useLoadCart';

import PageTitle from '../../Shared/PageTitle';
import Categories from './Categories';
import MainSlider from './MainSlider';
import ProductSlider from './ProductSlider';

const Home = () => {
    const [user] = useAuthState(auth)
	const [catProduct, totalProduct, totalPrice, isLoading, refetch] =  useLoadCart()

	useEffect(() => {
        if (user?.emailVerified) {
            
            refetch()
        }
	}, [user])
   
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