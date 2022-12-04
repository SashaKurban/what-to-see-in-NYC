import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardTemplate(props) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.date}</Card.Text>
        <Card.Text>{props.description}</Card.Text>
        {/* <Button variant="primary">{props.eventRegistrationLink}</Button> */}
        <Card.Text>{props.price}</Card.Text>
        <Card.Text>{props.address}</Card.Text>
        <Card.Link href={props.link}>Register</Card.Link>
      </Card.Body>
    </Card>
    </div>
    
  );
}

export default CardTemplate;