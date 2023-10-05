import React from 'react';
import { Container, Typography } from '@mui/material';

const Main = () => {
  return (
    <div class="main-container">
      <Container maxWidth='lg'>
        <div class="section-container">
          <img className='cell-1' src={require('../assets/images/section1-image.jpg')}></img>
          <div className='cell-2'>
            <h3>About Us</h3><p>
              At Abel Labs, a dynamic startup, we specialize in test automation services, offering efficient and cost-effective solutions for your product testing needs. Why go through the complexity of hiring expert engineers and developing additional sub-products just to test your main offering? Avoid the risks associated with creating a subpar framework with limitations after months of laborious work. Instead, rely on our expertise.
            </p>
            <p>We provide ready-made solutions that empower even entry-level engineers to seamlessly test and automate their test cases.</p>
          </div>
        </div>
        <div class="section-container">
          <div className='cell-2 even-2'>
            <h3>Our Services</h3>
            <ul>
              <li>Are you a startup without automation? We can kickstart your automation efforts, automating test cases directly without the need for time-consuming framework development.</li>
              <li>Struggling with complex manual tests? We specialize in automating them.</li>
              <li>Dealing with an unstable framework and resorting to manual testing? Let us analyze your situation and provide an optimal solution for the future.</li>
              <li>Have multiple frameworks across teams and seeking to unify and eliminate duplication? Our analysis and strategic guidance can set the path forward.</li>
            </ul>
            </div>
          <img className='cell-1 even-1' src={require('../assets/images/section2-image.jpg')}></img>
        </div>
        <div class="section-container">
          <img className='cell-1' src={require('../assets/images/section3-image.jpg')}></img>
          <div className='cell-2'>
            <h3>Area of Expertise</h3><p>At Abel Labs, our specialization encompasses a wide spectrum of testing domains, ensuring comprehensive coverage for your testing needs. Our expertise extends to various areas, including:
              <ul>
                <li>Web Application Testing</li>
                <li>API Testing</li>
                <li>Mobile Testing</li>
                <li>Hardware Testing (e.g., Network/Storage switches/routers)</li>
                <li>Windows/Linux Application Testing</li>
              </ul>
            </p>
          </div>
        </div>
        <div class="section-container">
          <div className='cell-2 even-2'>
            <h3>Our approach</h3><p>Our work approach offers flexibility. We can handle the entire process, delivering a functional mini-automation for your product. Alternatively, we provide software and guidance to empower your engineers. Our pricing is straightforward: $10,000 for one month (160 hours), inclusive of training and one year of support.</p>
            <p>
              Should you opt for continued automation, the monthly flat fee remains $10,000. Plus, we offer a money-back guarantee—if we don't deliver, you won't be charged.</p>
            <p>
              We are passionate about helping startups succeed, and we are open to considering both equity and cash in exchange for the services we provide.</p>
          </div>
          <img className='cell-1 even-1' src={require('../assets/images/section4-image.jpg')}></img>
        </div>

      </Container>
    </div>

  );
};

export default Main;
