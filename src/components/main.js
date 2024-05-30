import React from 'react';
import CarouselComponent from './carousel';
import { Container, Typography } from '@mui/material';

const Main = () => {
  return (
    <div className="main-container">
      <Container maxWidth='lg'>
      <div className="section-container">
        <CarouselComponent></CarouselComponent>
      </div>
        <div className="section-container" id="about-us">
          <div className='align-center-1'>
            <img className='cell-1' src={require('../assets/images/section1-image.jpg')}></img>
          </div>
          <div className='cell-2'>
            <h3>About Us</h3><p>
              At Abel Labs, a dynamic startup, we specialize in test automation services, offering efficient and cost-effective solutions for your product testing needs. Why go through the complexity of hiring expert engineers and developing additional sub-products just to test your main offering? Avoid the risks associated with creating a subpar framework with limitations after months of laborious work. Instead, rely on our expertise.
            </p>
            <p>We provide ready-made solutions that empower even entry-level engineers to seamlessly test and automate their test cases.</p>
          </div>
        </div>
        <div className="section-container" id="our-services">
          <div className='cell-2 even-2'>
            <h3>Our Services</h3>
            <ul>
              <li>Are you a startup without automation? We can kickstart your automation efforts, automating test cases directly without the need for time-consuming framework development.</li>
              <li>Struggling with complex manual tests? We specialize in automating them.</li>
              <li>Dealing with an unstable framework and resorting to manual testing? Let us analyze your situation and provide an optimal solution for the future.</li>
              <li>Have multiple frameworks across teams and seeking to unify and eliminate duplication? Our analysis and strategic guidance can set the path forward.</li>
            </ul>
          </div>
          <div className='align-center-1'>
            <img className='cell-1 even-1' src={require('../assets/images/section2-image.jpg')}></img>
          </div>
        </div>
        <div className="section-container" id="area-of-expertise">
          <div className='align-center-1'>
            <img className='cell-1' src={require('../assets/images/section3-image.jpg')}></img>
          </div>
          <div className='cell-2'>
            <h3>Area of Expertise</h3><p>At Abel Labs, our specialization encompasses a wide spectrum of testing domains, ensuring comprehensive coverage for your testing needs. Our expertise extends to various areas, including:</p>
            <ul>
              <li>Web Application Testing</li>
              <li>API Testing</li>
              <li>Mobile Testing</li>
              <li>Hardware Testing (e.g., Network/Storage switches/routers)</li>
              <li>Windows/Linux Application Testing</li>
            </ul>
          </div>
        </div>
        <div className="section-container" id="our-approach">
          <div className='cell-2 even-2'>
            <h3>Our approach</h3>
            <p>
              Our approach prioritizes flexibility, providing comprehensive automation solutions tailored to your needs. We manage the entire process, ensuring a seamless integration of automation into your product. Alternatively, we offer software tools and expert guidance to empower your engineering team.
            </p>
            <p>
              We pride ourselves on transparency. Take advantage of our no-obligation, complimentary pilot project, where we automate your test cases or provide guidance for your team, along with a live demo. If satisfied, you have the option to continue our partnership.
            </p>
            <p>
              Our solution is both cost-effective and efficient. You won't need to hire specialized engineers for test automation—we equip your junior engineers with the necessary skills and tools to handle automation tasks effectively.
            </p>
            <p>
              Our services extend beyond the US; we cater to clients worldwide.
            </p>
            <p>
              Driven by our passion for startup success, we offer flexible payment options, including equity partnerships alongside traditional cash transactions, ensuring alignment with your business goals.
            </p>
          </div>
          <div className='align-center-1'>
            <img className='cell-1 even-1' src={require('../assets/images/section4-image.jpg')}></img>
          </div>
        </div>
      </Container>
    </div>

  );
};

export default Main;
