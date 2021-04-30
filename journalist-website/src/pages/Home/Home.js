import './Home.css';

import Carousel from 'react-bootstrap/Carousel';

import home1 from "../../assets/thumbnail_image1.png";
import home2 from "../../assets/thumbnail_image2.png";
import home3 from "../../assets/cool.jpeg";

function Home() {
    return (
        <>
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
                    <div className="image2caption">
                        <h1>Placeholder Text Here</h1>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="overflow">
                        <img
                            className="d-block w-100"
                            src={home3}
                            alt="Third slide"
                        />
                    </div>
                    <div className="image3caption">
                        <h1>A Content Creator Triple Threat</h1>
                    </div>
                </Carousel.Item>
            </Carousel>
            <div className="HomeAbout container-fluid">
                <h1>
                    About Me
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel eros donec ac odio tempor orci dapibus ultrices. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Enim neque volutpat ac tincidunt vitae semper quis lectus. Commodo viverra maecenas accumsan lacus vel. Non enim praesent elementum facilisis leo vel fringilla. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra.
                </p>
            </div>
        </>
    );
}

export default Home;