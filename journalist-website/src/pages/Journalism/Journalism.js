import './Journalism.css';

import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns'

import Godzilla from "../../assets/journalism/GodzillaKingKong.png";
import Chan from "../../assets/journalism/chan.png";
import Snyder from "../../assets/journalism/snyder.png";

function Journalism() {
    return (
        <CardColumns>
            <a href="https://columbiachronicle.com/review-godzilla-vs-kong-a-kaiju-sized-rematch-60-years-in-the-making">
                <Card>
                    <Card.Img variant="top" src={Godzilla} />
                    <Card.Body>
                        <Card.Title>Review: ‘Godzilla vs. Kong’—a kaiju-sized rematch 60 years in the making</Card.Title>
                    </Card.Body>
                </Card>
            </a>
                        <a href="https://columbiachronicle.com/qa-papa-chan-and-grandma-marina-create-social-media-time-capsule-with-drawings-for-my-grandchildren">
                <Card>
                    <Card.Img variant="top" src={Chan} />
                    <Card.Body>
                        <Card.Title>Q&A: Papa Chan and Grandma Marina create social media time capsule with ‘Drawings for my Grandchildren’</Card.Title>
                    </Card.Body>
                </Card>
            </a>
            <a href="https://columbiachronicle.com/review-justice-league-bigger-longer-and-snyder-cut">
                <Card>
                    <Card.Img variant="top" src={Snyder} />
                    <Card.Body>
                        <Card.Title>Review: Justice League: Bigger, longer and Snyder Cut</Card.Title>
                    </Card.Body>
                </Card>
            </a>
            <a href="https://columbiachronicle.com/review-justice-league-bigger-longer-and-snyder-cut">
                <Card>
                    <Card.Img variant="top" src={Snyder} />
                    <Card.Body>
                        <Card.Title>Review: Justice League: Bigger, longer and Snyder Cut</Card.Title>
                    </Card.Body>
                </Card>
            </a>
            <a href="https://columbiachronicle.com/review-justice-league-bigger-longer-and-snyder-cut">
                <Card>
                    <Card.Img variant="top" src={Snyder} />
                    <Card.Body>
                        <Card.Title>Review: Justice League: Bigger, longer and Snyder Cut</Card.Title>
                    </Card.Body>
                </Card>
            </a>
            <a href="https://columbiachronicle.com/review-justice-league-bigger-longer-and-snyder-cut">
                <Card>
                    <Card.Img variant="top" src={Snyder} />
                    <Card.Body>
                        <Card.Title>Review: Justice League: Bigger, longer and Snyder Cut</Card.Title>
                    </Card.Body>
                </Card>
            </a>
 <a href="https://columbiachronicle.com/review-justice-league-bigger-longer-and-snyder-cut">
                <Card>
                    <Card.Img variant="top" src={Snyder} />
                    <Card.Body>
                        <Card.Title>Review: Justice League: Bigger, longer and Snyder Cut</Card.Title>
                    </Card.Body>
                </Card>
            </a>


        </CardColumns>
    );
}

export default Journalism;