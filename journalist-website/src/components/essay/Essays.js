import './Essay.css'

import { essayList } from '../../assets/essay/essayList';

import { Card, CardDeck, Container } from 'react-bootstrap';




const EssayList = () => {
  return (
    <Container>
      <CardDeck>

        {essayList.map(essay =>


          <Card>
            <a href={essay.link}>
              <iframe class="video" src={essay.link} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
              <Card.Body>
                <Card.Title>
                  {essay.title}
                </Card.Title>
              </Card.Body>
            </a>
          </Card>
        )}

      </CardDeck>






    </Container >
  );
}

export default EssayList;