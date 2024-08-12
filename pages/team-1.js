import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';


const TeamOne = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="Professionals Behind It All" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="The Team" 
                BGImage="item-bg1" 
            />

            <div className="team-area pt-100 pb-70">
                <div className="container-fluid">
                    <div className="section-title">
                        <span>Team Member</span>
                        <h2>Our Expert Team</h2>
                        <div className="bar"></div>
                    </div>
                    
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team">
                                <div className="image">
                                    <img src="/images/team/team-1.jpg" alt="image" />
                                
                                  

                                    <div className="content">
                                        <h3>Olalekan Oladejo</h3>
                                        <span>MD/CEO</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team">
                                <div className="image">
                                    <img src="/images/team/team-2.jpg" alt="image" />
                                    
                                    <div className="content">
                                        <h3>Adeyemo Toyin</h3>
                                        <span>Executive Director</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team">
                                <div className="image">
                                    <img src="/images/team/team-3.jpg" alt="image" />
                                
                                    
                                    <div className="content">
                                        <h3>Osoname Anthony-Aliu</h3>
                                        <span>Field Events and People Coordinator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team">
                                <div className="image">
                                    <img src="/images/team/team-4.jpg" alt="image" />
                                
                                    
                                    <div className="content">
                                        <h3>Ayomide Lawal</h3>
                                        <span>People & Culture</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team">
                                <div className="image">
                                    <img src="/images/team/team-5.jpg" alt="image" />
                                
                                    
                                    <div className="content">
                                        <h3>Tejumojesu Oluremi</h3>
                                        <span>Partner Resource </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team">
                                <div className="image">
                                    <img src="/images/team/team-6.jpg" alt="image" />
                                
                                    
                                    <div className="content">
                                        <h3>Ebikake Ubah</h3>
                                        <span>Partner Resource</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team">
                                <div className="image">
                                    <img src="/images/team/team-7.jpg" alt="image" />
                                
                                    
                                    <div className="content">
                                        <h3>Bisola Soyemi</h3>
                                        <span>Payroll and Benefits Administrator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team">
                                <div className="image">
                                    <img src="/images/team/team-8.jpg" alt="image" />
                                
                                    
                                    <div className="content">
                                        <h3>Eniola Aisha</h3>
                                        <span>Partner Resource</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	  
			

			<Footer />
		</>
    )
}

export default TeamOne;