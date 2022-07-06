import Carousel from 'react-bootstrap/Carousel';
import React from 'react'

export default function Component3() {
    return (
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://rukminim1.flixcart.com/flap/1688/280/image/e24fd6590c474415.jpg?q=50"
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://rukminim1.flixcart.com/flap/1688/280/image/e32b1888b2864a98.jpg?q=50"
              alt="Second slide"
            />
    
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://rukminim1.flixcart.com/flap/1688/280/image/e24fd6590c474415.jpg?q=50"
              alt="Third slide"
            />
    
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}
