import React from 'react';
import Link from 'next/link';

const ServicesStyleOne = () => {
  return (
    <div className="services-area bg-fff5ee pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span>Services we provided</span>
          <h2>Our Digital Marketing Services</h2>
          <div className="bar"></div>
        </div>

        <div className="services-grid">
          {/* Service 1 */}
          <div className="single-services">
            <div className="image">
              <Link href="/services-3">
                <img src="/images/services/services-2.png" alt="image" />
              </Link>
            </div>
            <h3>
              <Link href="/services-3">Labour Services</Link>
            </h3>
            <p>Peach Strides and Pristines, a top marketing firm, excels in HR Outsourcing, managing recruitment, and retention. This streamlines operations, enabling core focus on marketing success.</p>

            <Link href="/services-3" className="services-btn">
              Read More<i className="bx bx-chevrons-right"></i>
            </Link>
          </div>

          {/* Service 2 */}
          <div className="single-services">
            <div className="image">
              <Link href="/services-3">
                <img src="/images/services/services-3.png" alt="image" />
              </Link>
            </div>
            <h3>
              <Link href="/services-3">Exprimental Marketing</Link>
            </h3>
            <p>Peach Strides and Pristines excels in experimental marketing, crafting immersive, data-driven campaigns that push boundaries, inspire engagement, and deliver unparalleled results, elevating your brand's presence and customer loyalty.</p>

            <Link href="/services-3" className="services-btn">
              Read More<i className="bx bx-chevrons-right"></i>
            </Link>
          </div>

          {/* Service 3 */}
          <div className="single-services">
            <div className="image">
              <Link href="/services-3">
                <img src="/images/services/services-4.png" alt="image" />
              </Link>
            </div>
            <h3>
              <Link href="/services-3">Digital Marketing</Link>
            </h3>
            <p>Our digital marketing prowess combines cutting-edge tools, data-driven strategies, and precision targeting, delivering measurable ROI and driving substantial business growth, ensuring your brand thrives in the dynamic digital landscape.</p>

            <Link href="/services-3" className="services-btn">
              Read More<i className="bx bx-chevrons-right"></i>
            </Link>
          </div>

          {/* Service 4 */}
          <div className="single-services">
            <div className="image">
              <Link href="/services-3">
                <img src="/images/services/services-5.png" alt="image" />
              </Link>
            </div>
            <h3>
              <Link href="/services-3">COMMERCE</Link>
            </h3>
            <p>With a strong sourcing expertise, we provide high-quality corporate gifts and merchandise, ensuring cost-effectiveness and timely delivery, elevating brand recognition, and nurturing enduring client relationships, making your business stand out with thoughtful gestures.</p>

            <Link href="/services-3" className="services-btn">
              Read More<i className="bx bx-chevrons-right"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="default-shape">
        <div className="shape1">
          <img src="/images/default-shape/default-shape1.png" alt="image" />
        </div>
        <div className="shape2">
          <img src="/images/default-shape/default-shape2.png" alt="image" />
        </div>
        <div className="shape3">
          <img src="/images/default-shape/default-shape3.png" alt="image" />
        </div>
        <div className="shape4">
          <img src="/images/default-shape/default-shape4.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default ServicesStyleOne;
