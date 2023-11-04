import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 200,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-next'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 2
        },
        1024: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
};

const TeamMember = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="team-area pb-100">
            <div className="container-fluid">
                <div className="section-title">
                    <span>Team Member</span>
                    <h2>Our Expert Team</h2>
                    <div className="bar"></div>
                </div>
                
                {display ? <OwlCarousel 
                    className="team-slider owl-carousel owl-theme"
                    {...options}
                >
                    <div className="single-team">
                        <div className="image">
                            <img src="/images/team/team-1.jpg" alt="image" />
                        
                            <ul className="social">
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" target="_blank">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                            </ul>

                            <div className="content">
                                <h3>Oladejo Olalekan</h3>
                                <span>MD/CEO</span>
                            </div>
                        </div>
                    </div>

                    <div className="single-team">
                        <div className="image">
                            <img src="/images/team/team-2.jpg" alt="image" />
                        
                            <ul className="social">
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" target="_blank">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                            </ul>

                            <div className="content">
                                <h3>Adeyemo Toyin</h3>
                                <span>Executive Director</span>
                            </div>
                        </div>
                    </div>

                    <div className="single-team">
                        <div className="image">
                            <img src="/images/team/team-3.jpg" alt="image" />
                        
                            <ul className="social">
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" target="_blank">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                            </ul>

                            <div className="content">
                                <h3>Osoname Anthony-Aliu</h3>
                                <span>Field Events and People Coordinator</span>
                            </div>
                        </div>
                    </div>

                    <div className="single-team">
                        <div className="image">
                            <img src="/images/team/team-4.jpg" alt="image" />
                        
                            <ul className="social">
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" target="_blank">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                            </ul>

                            <div className="content">
                                <h3>Ayomide Lawal</h3>
                                <span>People and Culture</span>
                            </div>
                        </div>
                    </div>

                    <div className="single-team">
                        <div className="image">
                            <img src="/images/team/team-5.jpg" alt="image" />
                        
                            <ul className="social">
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" target="_blank">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                            </ul>

                            <div className="content">
                                <h3>Tejumojesu Oluremi</h3>
                                <span>Partner Resource</span>
                            </div>
                        </div>
                    </div>

                    <div className="single-team">
                        <div className="image">
                            <img src="/images/team/team-6.jpg" alt="image" />
                        
                            <ul className="social">
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" target="_blank">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                            </ul>

                            <div className="content">
                                <h3>Ebikake Ubah</h3>
                                <span>Partner Resource</span>
                            </div>
                        </div>
                    </div>

                    <div className="single-team">
                        <div className="image">
                            <img src="/images/team/team-7.jpg" alt="image" />
                        
                            <ul className="social">
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" target="_blank">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                            </ul>

                            <div className="content">
                                <h3>Bisola Soyemi</h3>
                                <span>Payroll and Benefits Administrator</span>
                            </div>
                        </div>
                    </div>

                    <div className="single-team">
                        <div className="image">
                            <img src="/images/team/team-8.jpg" alt="image" />
                        
                            <ul className="social">
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" target="_blank">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                            </ul>

                            <div className="content">
                                <h3>Ebikake Ubah</h3>
                                <span>Partner Resource</span>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default TeamMember;