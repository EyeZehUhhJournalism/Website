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
                        <h1>I Produce Things and Put Them on the Internet</h1>
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
                <h1 className="header">
                    About Me
                </h1>
                <p>
                    Hello! I am a Chicago -born journalist. I'm never satisfied with being proficient at only one thing so I've expanded my stat sheet into the  realm of producing video essays, podcasting and voice over.
Along with being a staff reporter and opinions editor for four years, I also have design experience in InDesign, Photoshop, and Premier Pro.                 </p>
                <h1 className="header">
                    My Gear
                </h1>
                <p>
                    Audio-Technica AT2020 Cardioid Condenser Studio Microphone | Focusrite SCARLETT SOLO 3rd Gen 192kHz Audio Interface | Fujifilm X-T100 Mirrorless Digital Camera | Elgato Key Light Professional Studio LED
                </p>

            </div>
        </>
    );
}

export default Home;