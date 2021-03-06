import './Articles.css'

import { articleList } from '../assets/journalism/articleList';

import { Card, CardDeck, Container } from 'react-bootstrap';




const Articles = () => {
  return (
    <Container>
      <CardDeck>

        {articleList.map(article =>


          <Card className="box">
            <a href={article.link}>
              <Card.Img variant="top" src={article.image} fluid />
              <Card.Body>
                <Card.Title>
                  {article.title}
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