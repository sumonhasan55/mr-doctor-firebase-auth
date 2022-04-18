import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1  from '../../../images/banner/banner 1.jpg';
import banner2  from '../../../images/banner/banner 2.jpg';
import banner3  from '../../../images/banner/banner 4.jpg';



const Banner = () => {
    return (
        <div>

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>Mr Doctor Services</h1>
      <h5 className='text-warning'>Everything Medical Services You Need in One Place</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption className='text-dark'>
      <h1>Mr Doctor Services</h1>
      <h5 >Everything Medical Services You Need in One Place</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption className='text-danger'>
      <h1>Mr Doctor Services</h1>
      <h5>Everything Medical Services You Need in One Place.</h5>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </div>
    );
};

export default Banner;