import React from 'react';
import About from './About';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Contact from './Contact';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;