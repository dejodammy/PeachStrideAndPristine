import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import AboutContent from '../components/HomeFive/AboutContent';
import ServicesStyleOne from '../components/Common/ServicesStyleOne';
import OurProjectStyleTwo from '../components/Common/OurProjectStyleTwo';
import TestimonialStyleThree from '../components/Common/TestimonialStyleThree';
import Partners from '../components/Common/Partners';
import Footer from '../components/_App/Footer';

const Index2 = () => {
    return (
        <>
            <Navbar />

            <MainBanner />

            <AboutContent />

            <ServicesStyleOne />

            <OurProjectStyleTwo />


            <Partners />
            
            <Footer />
        </>
    )
}

export default Index2;