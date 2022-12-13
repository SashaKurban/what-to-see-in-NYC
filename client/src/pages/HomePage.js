import React, { useState, useEffect } from "react";
import CardTemplate from "../components/CardTemplate";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomePage(props) {
  const[museums, setMuseums] = useState();
  const[free, setFree] = useState();
  const[parks, setParks] = useState();
  const[concerts, setConcerts] = useState();
  const[tours, setTours] = useState();
  const [date, setDate] = useState(new Date());
  const [sortByDate, setSortByDate] = useState(false);
  const [eventsByDate, setEventsByDate] = useState(null);

  //fetch data
  useEffect(() => {
    async function getMuseums() {
      try {
        let response = await fetch("/api/events/Museums & Art Institutions");
        let data = orderAscendingByDate( await response.json());
        setMuseums(data);
      } catch (error) {
        console.error("Error fetching all museum events", error);
      }
    }
    async function getParks() {
      try {
        let response = await fetch("/api/events/Parks & Public Spaces");
        let data = orderAscendingByDate( await response.json());
        setParks(data);
      } catch (error) {
        console.error("Error fetching all park events", error);
      }
    }
    async function getConcerts() {
      try {
        let response = await fetch("/api/events/Concerts & Shows");
        let data = orderAscendingByDate( await response.json());
        setConcerts(data);
      } catch (error) {
        console.error("Error fetching all concert events", error);
      }
    }
    async function getFree() {
      try {
        let response = await fetch("/api/events/Free Events");
        let data = orderAscendingByDate( await response.json());
        setFree(data);
      } catch (error) {
        console.error("Error fetching all free events", error);
      }
    }
    async function getTours() {
      try {
        let response = await fetch("/api/events/Attractions & Tours");
        let data = orderAscendingByDate( await response.json());
        setTours(data);
      } catch (error) {
        console.error("Error fetching all tour events", error);
      }
    }
    function orderAscendingByDate(data){
      const copyData = []
      .concat(data)
      .sort((a, b) => (a.date > b.date ? 1 : -1));
      return copyData;
    }
    getMuseums();
    getParks();
    getConcerts();
    getFree();
    getTours();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        let response = await fetch(`/api/events/date/${date}`);
        let data = await response.json();
        setEventsByDate(data);
        console.log(eventsByDate);
        setSortByDate(true);
    } catch (error) {
        console.error("Server error while creating new event", error);
    }
  };
  
  const clearFilter = async (event) => {
    event.preventDefault();
    setSortByDate(false);
  }

  return (
    <div>
    <h1 className="main-title">What to See in NYC</h1>
   
        <Form className = "spacing" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
         <Form.Label>Filter By Date</Form.Label> 
          <Form.Control
            className="smaller-input"
              type="date"
              name="date"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>
       <Button className= "color-button-align" type="submit">
          Submit
        </Button>
         <Button onClick={clearFilter} className= "clear-filter-button" type="submit">
          Clear Filter
        </Button>
      </Form>
     
      {sortByDate && (
        <Container>
          <h3 className="locations-place">Events for {date}</h3>
          <div className="event-cards">
            {eventsByDate.map((event) => (
                <CardTemplate key={event.id} props={event} loggedIn={false}/>
            ))
            }
          </div>
      
        </Container>
      )}
      {!sortByDate && (
        <Container>
          <h3 className="locations-place">MUSEUMS and ART INSTITUTIONS</h3>
          {museums && (
            <div className="event-cards">
            {museums.map((event) => (
                <CardTemplate key={event.id} props={event} loggedIn={false}/>
            ))
            }
          </div>
          )}
          <br/>
          <h3 className="locations-place">PARKS and PUBLIC SPACES</h3>
          {parks && (
            <div className="event-cards">
            {parks.map((event) => (
              <CardTemplate key={event.id} props={event} loggedIn={false}/>
            ))
            }
          </div>
          )}
          <br />
          <h3 className="locations-place">SHOWS and CONCERTS</h3>
          {concerts && (
            <div className="event-cards">
            {concerts.map((event) => (
              <CardTemplate key={event.id} props={event} loggedIn={false}/>
            ))
            }
          </div>
          )}
          <br />
          <h3 className="locations-place">FREE EVENTS</h3>
          
          
          {free && (
            <div className="event-cards">
        
            {free.map((event) => (
              <CardTemplate key={event.id} props={event} loggedIn={false}/>
            ))
            }
          </div>
          )}

          <br />
          <h3 className="locations-place">ATTRACTIONS and TOURS</h3>
          {tours && (
            <div className="event-cards">
            {tours.map((event) => (
              <CardTemplate key={event.id} props={event} loggedIn={false}/>
            ))
            }
              
          </div>
          )}
        </Container>
      )}
    </div>
  );
}

export default HomePage;