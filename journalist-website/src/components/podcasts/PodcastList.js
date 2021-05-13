import './PodcastList.css'

import { podcastList } from '../../assets/podcasts/podcastList';

import { Card, CardDeck, Container } from 'react-bootstrap';




const PodcastList = () => {
  return (
    <>
    <div className="container-fluid PodcastTop">
      <h1 className="text">
        Podcasts
      </h1>
      <p>
      There are way to many pieces of media to get in to but not enough time to invest in them all. The solution, the Fear of Missing Out Podcast. This podcast is the gateway between pop culture touchstones both popular and niche. In it, I talk to experts and super fans about their favorite things, why they like them, and where newcomers can get started.
      </p>
      </div>
    <Container>
      <CardDeck>

        {podcastList.map(podcast =>


          <Card>
            <a href={podcast.link}>
              <iframe class="podcastVideo" src={podcast.link} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
              <Card.Body>
                <Card.Title>
                  {podcast.title}
                </Card.Title>
              </Card.Body>
            </a>
          </Card>
        )}

      </CardDeck>






    </Container >
    </>
  );
}

export default PodcastList;