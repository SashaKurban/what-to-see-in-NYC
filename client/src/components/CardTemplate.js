import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import "../card.css"

function CardTemplate({props, loggedIn}) {
  const handleDelete = async function(event){
    event.preventDefault();
    try{
      const url = "/api/events/" + props.id;
      await fetch(url, {method: "DELETE"})
      .then(() => console.log("deleted event "));
    }catch(error){
      console.log(error);
    }
  }

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
    {loggedIn && (
      <div>
        <Button>
          <Link className="updateLink" to="/event-form" state={{eventInfo: props}}>Update</Link>
        </Button>
        <Button onClick={handleDelete}>Delete</Button>
        
      </div>
    )}
    </div>
    
  );
}

export default CardTemplate;