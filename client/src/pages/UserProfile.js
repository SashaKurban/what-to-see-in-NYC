import React, { useState, useEffect } from "react";
import CardTemplate from "../components/CardTemplate";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProfileCard from "../components/ProfileCard";
import { Navigate } from "react-router-dom";

function UserProfile() {
  const [user, setUser] = useState();
  const [events, setEvents] = useState();
  //fetch data
  useEffect(() => {
    async function getUser() {
      try {
        let response = await fetch("/api/auth/login");
        let data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching all user data", error);
      }
    }
    async function getMyEvents() {
      try {
        let response = await fetch("/api/events/my-events");
        let data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching all user events", error);
      }
    }
    getUser();
    getMyEvents();
    return () => {
      // clean up function
    };
  }, []);
  return (
    <div>
      <h1>What to See in NYC</h1>
      <h1 className="profileHeader">Welcome, User!</h1>
      {/* TODO: Create image upload page*/}
      <Container>
        <Row>
          <Col>
            <Image className="profileImage" src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80" />
          </Col>
          <Col>
            ProfileCard
            {user && (
              <ProfileCard name={user.username} email={user.email} bio={user.bio} />
            )}
          </Col>
          <Col>
            <Row>
              <a href="/create-event">
                <Button variant="outline-primary">Create Event</Button>{' '}
              </a>
            </Row>
            <br />
            <Row>
              <Button variant="outline-primary">View Past Events</Button>{' '}
            </Row>
          </Col>
        </Row>
      </Container>

      <br /> <br />
      <h2 className="profileHeader">Upcoming Events</h2>
      <Container>
        {events && (
          <div>
            {events.map((event) => (
              <CardTemplate key={event.id} {...event} />
            ))
            }
          </div>
        )}
      </Container>

      <br /><br />
    </div>
  );
}

// function displayUpcomingEvents(props) {
//     const events = props.events;
//     const listOfEvents = events.map((event) =>
//         <Col>
//             {/* <CardTemplate eventName="Museum" eventDescription="hello" eventRegistrationLink="#" /> */}
//             <li>{event}</li>
//         </Col>
//     );
//     return (
//         <ul>{listItems}</ul>
//     );
// }

export default UserProfile;