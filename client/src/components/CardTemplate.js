import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../card.css"

function CardTemplate(props) {
  return (
    <div className="cardStyle">
      <Card style={{ width: '18rem' }}>
      <Card.Body className="lowerCard">
        <Card.Title>Title: {props.title}</Card.Title>
        <Card.Text>Date: {props.date}</Card.Text>
        <Card.Text>Description: {props.description}</Card.Text>
        {/* <Button variant="primary">{props.eventRegistrationLink}</Button> */}
        <Card.Text>Price: ${props.price}</Card.Text>
        <Card.Text>Address: {props.address}</Card.Text>
        <Card.Link href={props.link} target="_blank" className="link-color">Register</Card.Link>
      </Card.Body>
    </Card>
    </div>
    
  );
}

export default CardTemplate;