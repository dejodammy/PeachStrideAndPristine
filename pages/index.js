import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import AboutContent from '../components/HomeFive/AboutContent';
import ServicesStyleOne from '../components/Common/ServicesStyleOne';
import OurProjectStyleTwo from '../components/Common/OurProjectStyleTwo';
import Testimonials from '../components/Common/Testimonials';
import Partners from '../components/Common/Partners';
import Footer from '../components/_App/Footer';
import JobVacancy from '../components/Common/JobVacancy';

const Index2 = () => {
    return (
        <>
            <Navbar />

            <MainBanner />

            <AboutContent />

            <ServicesStyleOne />

            <OurProjectStyleTwo />

            <Testimonials />

            <JobVacancy/>

            <Partners />
            
            <Footer />
        </>
    )
}

export default Index2;