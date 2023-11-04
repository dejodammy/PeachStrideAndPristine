import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const AboutContent = () => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return <>
        <div className="about-area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-image-warp image-three">
                            
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-content warp">
                            <span>About Us</span>
                            <h3>We drive stronger results through smart engagement and deep audience insights.</h3>
                            <div className="bar"></div>
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

                                 

                          
                           
                           
                            
                            <div className="about-btn">
                                <Link href="/about-1" className="default-btn">
                                    
                                        Learn More
                                    
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

        {/* If you want to change the video need to update videoID */}
        <ModalVideo 
            channel='youtube' 
            isOpen={!isOpen} 
            videoId='bk7McNUjWgw' 
            onClose={() => setIsOpen(!isOpen)} 
        />
    </>;
}

export default AboutContent;