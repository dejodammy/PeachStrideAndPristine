import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';

const Contact = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="Contact Us" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Contact Us" 
                BGImage="item-bg4" 
            />

            <ContactInfo />
            <ContactForm/>

			<Footer />
		</>
    )
}

export default Contact;