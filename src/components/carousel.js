import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const CarouselComponent = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect} pause="hover" wrap={true} interval={300000}>
                <Carousel.Item>
                    <img src={require('../assets/images/abellabs-background.png')} className='d-block w-100 card-overlay' alt='...' />
                    <Carousel.Caption>
                        {/* <p>First slide label</p> */}
                        <p>Whether your organization doesn't have a nightly test or has one that isn't effective, we're here to assist.</p>
                        <p>Let's connect for a chat and explore how we can enhance your testing strategy</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('../assets/images/abellabs-background.png')} className='d-block w-100 card-overlay' alt='...' />
                    <Carousel.Caption>
                        {/* <p>Second slide label</p> */}
                        <p>Have your engineers convinced you that specific tests cannot be automated, leading to a reliance on manual testing?</p>
                        <p>Would you like to take another look to save money and time?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('../assets/images/abellabs-background.png')} className='d-block w-100 card-overlay' alt='...' />
                    <Carousel.Caption>
                        {/* <p>Third slide label</p> */}
                        <p>
                        Are you stuck in a vicious cycle of breaking the test automation every time a change is implemented in your product, leading to days spent resolving test issues?
                        </p>
                        <p>We're here to help you break free from this cycle and enhance your testing experience!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('../assets/images/abellabs-background.png')} className='d-block w-100 card-overlay' alt='...' />
                    <Carousel.Caption>
                        {/* <p>Third slide label</p> */}
                        <p>
                            Are you in search of a testing or test automation solution? Perhaps you're contemplating the hiring of an expert automation engineer?
                        </p>
                        <p>
                            Consider exploring our solution. We provide a complimentary, no-obligation, risk-free pilot project tailored to your product.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('../assets/images/abellabs-background.png')} className='d-block w-100 card-overlay' alt='...' />
                    <Carousel.Caption>
                        {/* <p>Third slide label</p> */}
                        <p>
                            Considering hiring test automation engineers?
                        </p>
                        <p>
                            Have you evaluated potential risks, such as under-delivery or, in the worst case, the engineer quitting and restarting after months of work?
                        </p>
                        <p>
                            We're here to help minimize those risks.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('../assets/images/abellabs-background.png')} className='d-block w-100 card-overlay' alt='...' />
                    <Carousel.Caption>
                        {/* <p>Third slide label</p> */}
                        <p>
                            Is your current test automation framework ineffective or on the verge of collapse?
                        </p>
                        <p>
                            Are you looking to hire experts for a redesign?
                        </p>
                        <p>
                            why not explore our solution? Contact us today for a free, non-obligatory pilot project.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('../assets/images/abellabs-background.png')} className='d-block w-100 card-overlay' alt='...' />
                    <Carousel.Caption>
                        {/* <p>Third slide label</p> */}
                        <p>
                            Ready to empower your test engineers with the right tools for maximum efficiency?
                        </p>
                        <p>
                            Let's embark on a journey together to elevate your testing processes and deliver high-quality products on time!
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('../assets/images/abellabs-background.png')} className='d-block w-100 card-overlay' alt='...' />
                    <Carousel.Caption>
                        {/* <p>Third slide label</p> */}
                        <p>
                            Have you heard about startups with promising ideas that failed because they didn't adequately and timely test their products?
                        </p>
                        <p>
                            Are you currently facing challenges in testing? We're here to assist you.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('../assets/images/abellabs-background.png')} className='d-block w-100 card-overlay' alt='...' />
                    <Carousel.Caption>
                        {/* <p>Third slide label</p> */}
                        <p>
                            Is transparency missing in your test automation process? Do you aspire to democratize test automation, empowering every test engineer?
                        </p>
                        <p>
                            We're here to assist you—let's start a conversation.           
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('../assets/images/abellabs-background.png')} className='d-block w-100 card-overlay' alt='...' />
                    <Carousel.Caption>
                        {/* <p>Third slide label</p> */}
                        <p>
                            Looking to hire an expert test automation engineer to build your automation framework?
                        </p>
                        <p>
                            We've got a ready-made solution. Let's chat!
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('../assets/images/abellabs-background.png')} className='d-block w-100 card-overlay' alt='...' />
                    <Carousel.Caption>
                        {/* <p>Third slide label</p> */}
                        <p>
                            Why develop a sub-product (test framework/tools) to test your main product?
                        </p>
                        <p>
                            For startups: Optimize your limited resources strategically. Stay sharply focused on your core offering.
                        </p>
                        <p>
                            For established companies: While you may not be limited by resources, it's important to avoid unnecessary expenditure.
                        </p>
                        <p>
                            Let us help eliminate the need for sub-product development!
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        </div>
    );
};

export default CarouselComponent;
