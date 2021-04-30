import React from 'react';
import './Articles.css'

import { articleList } from '../assets/journalism/articleList';

import { Card, Col, CardDeck, Container } from 'react-bootstrap';




const Articles = () => {
  return (
    <Container>
      {articleList.map(article =>
        <CardDeck>
          <Col className="container-fluid mt-4">

            <a href={article.link}>
              <Card className="box">
                <Card.Img variant="top" src={article.image} fluid />
                <Card.Body>
                  <Card.Title>
                    {article.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </CardDeck>
      )}





    </Container>
  );
}

export default Articles;