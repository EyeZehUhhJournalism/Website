import './App.css';
import './assets/bootstrap.css'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Home from './pages/Home/Home'
import Journalism from './pages/Journalism/Journalism'
import Podcasts from './pages/Podcasts/Podcasts'
import Voiceover from './pages/Voiceover/Voiceover'


import Twitter from './assets/twitter.svg'
import Instagram from './assets/instagram.svg'
import Youtube from './assets/youtube.svg'
import Twitch from './assets/twitch.svg'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Navbar className="navbar-dark navbar-fixed-top" expand="lg" sticky="top">
          <Navbar.Brand href="home">Isaiah</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="journalism">Journalism</Nav.Link>
              <Nav.Link href="podcasts">Podcasts and Video Essays</Nav.Link>
              <Nav.Link href="voiceover">Voiceover Work</Nav.Link>
            </Nav>
            <Nav className="Icons">
              <div className="Icon">
                <Nav.Link href="https://www.Twitter.com/EyeZehUhh">
                  <img src={Twitter} width="20" height="20" alt="Twitter" />
                </Nav.Link>
              </div>
              <div className="Icon">
                <Nav.Link href="https://www.instagram.com/eyezehuhh/">
                  <img src={Instagram} width="25" height="25" alt="Instagram" />
                </Nav.Link>
              </div>
              <div className="Icon">
                <Nav.Link href="https://www.youtube.com/channel/UC_2iU1Y9AWP12FddDpfbnmg">
                  <img src={Youtube} width="25" height="25" alt="Youtube" />
                </Nav.Link>
              </div>
              <div className="Icon">
                <Nav.Link href="https://www.twitch.tv/eyezehuhh">
                  <img src={Twitch} width="18" height="18" alt="Twitch" />
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/journalism">
            <Journalism />
          </Route>
          <Route path="/podcasts">
            <Podcasts />
          </Route>
          <Route path="/voiceover">
            <Voiceover />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}
