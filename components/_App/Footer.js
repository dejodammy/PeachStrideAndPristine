import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return <>
        <div className="footer-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-footer-widget">
                            <div className="logo">
                                <Link href="/">

                                    <img src="/images/Logo.png" alt="image" />

                                </Link>
                            </div>

                            <p>Your Right Hand For Trusted Business Services</p>

                            <ul className="social">
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100071338197150" className="facebook" target="_blank">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/peachstrides?t=O_MelKh1uwmXEa_yc2Z6-A&s=09" className="twitter" target="_blank">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/peachstridesandpristine/" className="linkedin" target="_blank">
                                        <i className='bx bxl-instagram-alt'></i>
                                    </a>
                                </li>
                                <li>
                                   
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Important Links</h3>
    
                            <ul className="quick-links">
                                <li>
                                    <Link href="/about-2">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portfolio-2">
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services-3">
                                        Services
                                    </Link>
                                </li>
                               
                                <li>
                                    <Link href="/contact-1">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portfolio-2">
                                    Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/team-1">
                                        The team
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Featured Services</h3>
    
                            <ul className="quick-links">
                                <li>
                                   
                                       Human Resource Outsorcing
                                   
                                </li>
                                <li>
                                   
                                      
                                   
                                </li>
                                <li>
                                   
                                       Experimental Marketing
                                   
                                </li>
                               
                                <li>
                                   
                                        Digital Marketing
                                   
                                </li>
                                <li>
                                   
                                   Merchandise Supply
                                  
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Information</h3>

                            <ul className="footer-contact-info">
                                <li>
                                    <i className="flaticon-call"></i>
                                    <span>Phone</span>
                                    <a href="tel:882569756">09028565203</a>
                                </li>
                                <li>
                                    <i className="flaticon-email-1"></i>
                                    <span>Email</span>
                                    <a href="mailto:info@peachstridesandpristine.com">info@peachstridesandpristine.com</a>
                                </li>
                                <li>
                                    <i className="flaticon-pin"></i>
                                    <span>Address</span>
                                    <a href="https://maps.app.goo.gl/kjrUTNGkKHzna9mP6" target="_blank">Second floor: 5 Moshalashi Street, Apata, somolu, Lagos</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="copyright-area">
            <div className="container">
                <div className="copyright-area-content">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>
                                Copyright &copy; {currentYear} DEJO 
                            </p>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default Footer;