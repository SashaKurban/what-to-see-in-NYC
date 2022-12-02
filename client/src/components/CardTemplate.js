import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardTemplate(props) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.eventName}</Card.Title>
        <Card.Text>
          {props.eventDescription}
        </Card.Text>
        {/* <Button variant="primary">{props.eventRegistrationLink}</Button> */}
        <Card.Link href={props.eventRegistrationLink}>Register</Card.Link>
      </Card.Body>
    </Card>
    </div>
    
  );
}

export default CardTemplate;