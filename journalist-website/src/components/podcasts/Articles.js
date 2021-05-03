import './Podcasts.css'

import { podcastList } from '../../assets/journalism/articleList';

import { Card, CardDeck, Container } from 'react-bootstrap';




const Podcasts = () => {
  return (
    <Container>
      <CardDeck>

        {podcastList.map(article =>


          <Card className="box">
            <a href={article.link}>
              <Card.Img variant="top" src={podcast.image} fluid />
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

export default Articles;