import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import TestimonialStyleTwo from '../components/Common/TestimonialStyleTwo';

const Testimonials = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="Testimonials" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Testimonials" 
                BGImage="item-bg1" 
            />

            <div className="ptb-100">
                <TestimonialStyleTwo />
            </div>
	  
			

			<Footer />
		</>
    )
}

export default Testimonials;