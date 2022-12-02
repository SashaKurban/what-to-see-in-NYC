import React from "react";
import CardTemplate from "../components/CardTemplate";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

function UserProfile() {
    return (
        <div>
            <h1>What to See in NYC</h1>
            <h1 className="profileHeader">Welcome, User!</h1>
            {/* TODO: Create image upload page*/}
            <Container>
                <Row>
                    <Col>
                        <Image className="profileImage" src="https://cdn.getyourguide.com/img/location/5729b6e6707a3.jpeg/99.jpg" />
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Organization: Natural Museum of History</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Representative: Jane Doe</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Edit</Card.Link>
                            </Card.Body>
                        </Card>
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
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slideshowImage"
                            src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Event 1</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slideshowImage"
                            src="https://images.unsplash.com/photo-1496889196885-5ddcec5eef4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Event 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slideshowImage"
                            src="https://images.unsplash.com/photo-1564399579883-451a5d44ec08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1037&q=80"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Event 3</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>

            <br /><br />
        </div>
    );
}

function createNewEvent() {

}

export default UserProfile;