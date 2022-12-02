import React from "react";
import CardTemplate from "../components/CardTemplate";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomePage(props) {
  return (
    <div>
      <h1>What to See in NYC</h1>
      <Container>
        <h3>MUSEUMS and ART INSTITUTIONS</h3>
        <Row>
          <Col>
            <CardTemplate eventName="Art Exhibit" eventDescription="Morbi dictum maximus arcu, pretium pellentesque justo rhoncus sit amet. Nullam imperdiet nulla sit amet mauris gravida, in ultrices est iaculis. Donec facilisis mauris et tempus fermentum." eventRegistrationLink="https://www.eventbrite.com/" />
          </Col>

          <Col>
            <CardTemplate eventName="Music Day" eventDescription="Morbi dictum maximus arcu, pretium pellentesque justo rhoncus sit amet. Nullam imperdiet nulla sit amet mauris gravida, in ultrices est iaculis. Donec facilisis mauris et tempus fermentum." eventRegistrationLink="https://www.eventbrite.com/" />
          </Col>

          <Col>
            <CardTemplate eventName="Movie Showing" eventDescription="Morbi dictum maximus arcu, pretium pellentesque justo rhoncus sit amet. Nullam imperdiet nulla sit amet mauris gravida, in ultrices est iaculis. Donec facilisis mauris et tempus fermentum." eventRegistrationLink="https://www.eventbrite.com/" />
          </Col>

        </Row>

        <br/>
        <h3>PARKS and PUBLIC SPACES</h3>

        <Row>
          <Col>
            <CardTemplate eventName="Art Exhibit" eventDescription="Morbi dictum maximus arcu, pretium pellentesque justo rhoncus sit amet. Nullam imperdiet nulla sit amet mauris gravida, in ultrices est iaculis. Donec facilisis mauris et tempus fermentum." eventRegistrationLink="https://www.eventbrite.com/" />
          </Col>

          <Col>
            <CardTemplate eventName="Music Day" eventDescription="Morbi dictum maximus arcu, pretium pellentesque justo rhoncus sit amet. Nullam imperdiet nulla sit amet mauris gravida, in ultrices est iaculis. Donec facilisis mauris et tempus fermentum." eventRegistrationLink="https://www.eventbrite.com/" />
          </Col>

          <Col>
            <CardTemplate eventName="Movie Showing" eventDescription="Morbi dictum maximus arcu, pretium pellentesque justo rhoncus sit amet. Nullam imperdiet nulla sit amet mauris gravida, in ultrices est iaculis. Donec facilisis mauris et tempus fermentum." eventRegistrationLink="https://www.eventbrite.com/" />
          </Col>

        </Row>

        <br />

        <h3>SHOWS and CONCERTS</h3>

        <Row>
          <Col>
            <CardTemplate eventName="Art Exhibit" eventDescription="Morbi dictum maximus arcu, pretium pellentesque justo rhoncus sit amet. Nullam imperdiet nulla sit amet mauris gravida, in ultrices est iaculis. Donec facilisis mauris et tempus fermentum." eventRegistrationLink="https://www.eventbrite.com/" />
          </Col>

          <Col>
            <CardTemplate eventName="Music Day" eventDescription="Morbi dictum maximus arcu, pretium pellentesque justo rhoncus sit amet. Nullam imperdiet nulla sit amet mauris gravida, in ultrices est iaculis. Donec facilisis mauris et tempus fermentum." eventRegistrationLink="https://www.eventbrite.com/" />
          </Col>

          <Col>
            <CardTemplate eventName="Movie Showing" eventDescription="Morbi dictum maximus arcu, pretium pellentesque justo rhoncus sit amet. Nullam imperdiet nulla sit amet mauris gravida, in ultrices est iaculis. Donec facilisis mauris et tempus fermentum." eventRegistrationLink="https://www.eventbrite.com/" />
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default HomePage;