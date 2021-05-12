import './PodcastList.css'

import { podcastList } from '../../assets/podcasts/podcastList';

import { Card, CardDeck, Container } from 'react-bootstrap';




const PodcastList = () => {
  return (
    <Container>
      <CardDeck>

        {podcastList.map(podcast =>


          <Card>
            <a href={podcast.link}>
              <iframe class="video" src={podcast.link} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
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
  );
}

export default PodcastList;