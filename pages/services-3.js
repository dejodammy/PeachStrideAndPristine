import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import WeWorkForIndustries from '../components/Common/WeWorkForIndustries';
import DigitalExperience from '../components/Common/DigitalExperience';


const ServicesThree = () => {
    return <>
        <Navbar />

        <PageBanner 
            pageTitle="Services " 
            homePageUrl="/" 
            homePageText="Home" 
            activePageText="Services " 
            BGImage="item-bg1" 
        />


        <DigitalExperience/>
        <WeWorkForIndustries />

        <Footer />
    </>;
}

export default ServicesThree;