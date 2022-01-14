import React from 'react';
import { Carousel } from 'react-bootstrap';
import './carousel.css'
import blog1 from '../../images/blog-1.jpeg'
import blog2 from '../../images/blog-2.jpg'
import blog3 from '../../images/blog-3.jpg'

const MyCarousel = () => {
    return (
        <div>            
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100  carousel"
                        src={blog1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  carousel"
                        src={blog2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  carousel"
                        src={blog3}
                        alt="Third slide"
                    />
                </Carousel.Item>
             


            </Carousel>
        </div>
    );
};

export default MyCarousel;