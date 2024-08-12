import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import TeamMember from '../components/Common/TeamMember';
import TestimonialStyleThree from '../components/Common/TestimonialStyleThree';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import Partners from '../components/Common/Partners';
import Features from '../components/HomeTwo/Features';

const AboutOne = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="About " 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="About" 
                BGImage="item-bg3" 
            />

            <div className="about-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-image-warp"></div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content warp">
                                <span>About Us</span>
                                <h3>The Peach Stride Story</h3>
                                <div className="bar"></div>
                                <strong> Our story started in 2017, when we were a group of young, vibrant, go-getting experienced Marketers looking for more ways to express ourselves and add value to opportune Client and brands.     </strong>

                            <p><span>The Folkore:</span>Peach Strides is named after different culture's symbolic meaning.</p>
                            <p><span>Meaning of the peach:</span>The Peach symbolizes longevity; we plan to be around for a long time.The Peach symbolizes truth; integrity and commitment is a core pillar on which we are established And in essence the Peach can symbolize youth, virtue and good works; in which we take our Strides.</p>

                            <div className="about-inner-content">
                                <div className="icon">
                                    <i className="flaticon-check"></i>
                                    <span>Our mission </span>
                                    <p>Our mission is to revolutionize business connections. In our dynamic world, success hinges on deep audience insights. Through data-driven decisions, we empower clients for lasting results.</p>
                                </div>
                                 </div> 
                            <div className="about-inner-content">
                                <div className="icon">
                                    <i className="flaticon-check"></i>
                                    <span>Our Vision </span>
                                    <p>Our vision is to lead the marketing and support agency industry through excellence. We prioritize client relationships, innovation, and staying at the forefront of industry trends as we strive to become the best in our field.</p>
                                </div>
                                 </div>

                                 <div className="about-inner-content">
                                <div className="icon">
                                    <i className="flaticon-check"></i>
                                    <span>Our Values </span>
                                    <p>Our unwavering commitment and steadfast integrity form the bedrock of our values. We pledge to consistently deliver on promises and uphold the highest ethical standards in all our endeavors. These principles guide our actions, ensuring trust and excellence in everything we do.</p>
                                </div>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  

            


      
            
            <FunFactsTwo />

            <TeamMember />
                       

            
            
              <div className="pt-10">
                <Partners />
            </div>
            
            <Footer />
		</>
    )
}

export default AboutOne;