import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { CardItem } from 'types';

type CharacterCardProps = {
  key: number;
  character: CardItem;
}

const CharacterCard: React.StatelessComponent<CharacterCardProps> = (props: any) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.character.image} />
      <Card.Body>
        <Card.Title> {props.character.name} </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
          </Card.Text>
        <Button variant="primary">Delete</Button>
        <Button variant="primary">Update</Button>
      </Card.Body>
    </Card>
  );
};

export default CharacterCard;
