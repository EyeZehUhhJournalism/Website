import './Home.css';

import Carousel from 'react-bootstrap/Carousel';

import home1 from "../assets/thumbnail_image1.png";
import home2 from "../assets/thumbnail_image2.png";
import home3 from "../assets/cool.jpeg";

function Home() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <div className="overflow">
                    <img
                        className="d-block w-100"
                        src={home1}
                        alt="First slide"
                    />
                </div>
                <div className="image1caption">
                    <h1>Your Production Swiss Army Knife</h1>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="overflow">
                    <img
                        className="d-block w-100"
                        src={home2}
                        alt="Second slide"
                    />
                </div>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="overflow">
                    <img
                        className="d-block w-100"
                        src={home3}
                        alt="Third slide"
                    />
                </div>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Home;