import React, { useState, useEffect } from "react";
import CardTemplate from "../components/CardTemplate";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function HomePage(props) {
  const[museums, setMuseums] = useState();
  const[free, setFree] = useState();
  const[parks, setParks] = useState();
  const[concerts, setConcerts] = useState();
  const[tours, setTours] = useState();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  //fetch data
  useEffect(() => {
    async function getMuseums() {
      setLoading(true);
      try {
        let response = await fetch("/api/events/Museums & Art Institutions");
        let data = await response.json();
        setMuseums(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching all museum events", error);
        setError(true);
      }
    }
    async function getParks() {
      setLoading(true);
      try {
        let response = await fetch("/api/events/Parks & Public Spaces");
        let data = await response.json();
        setParks(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching all park events", error);
        setError(true);
      }
    }
    async function getConcerts() {
      setLoading(true);
      try {
        let response = await fetch("/api/events/Concerts & Shows");
        let data = await response.json();
        setConcerts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching all concert events", error);
        setError(true);
      }
    }
    async function getFree() {
      setLoading(true);
      try {
        let response = await fetch("/api/events/Free Events");
        let data = await response.json();
        setFree(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching all free events", error);
        setError(true);
      }
    }
    async function getTours() {
      setLoading(true);
      try {
        let response = await fetch("/api/events/Attractions & Tours");
        let data = await response.json();
        setTours(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching all tour events", error);
        setError(true);
      }
    }
    getMuseums();
    getParks();
    getConcerts();
    getFree();
    getTours();
    return () => {
      // clean up function
    };
  }, []);

  return (
    <div>
      
     
      {/* <h1>What to See in NYC</h1> */}
      <Container>
        
        <h3 className="locations-place">MUSEUMS and ART INSTITUTIONS</h3>
        {museums && (
          <div>
          {museums.map((event) => (
            <CardTemplate key={event.id} props={event} loggedIn={false}/>
          ))
          }
        </div>
        )}
        <br/>
        <h3 className="locations-place">PARKS and PUBLIC SPACES</h3>
        {parks && (
          <div>
          {parks.map((event) => (
            <CardTemplate key={event.id} props={event} loggedIn={false}/>
          ))
          }
        </div>
        )}
        <br />
        <h3 className="locations-place">SHOWS and CONCERTS</h3>
        {concerts && (
          <div>
          {concerts.map((event) => (
            <CardTemplate key={event.id} props={event} loggedIn={false}/>
          ))
          }
        </div>
        )}
        <br />
        <h3 className="locations-place">FREE EVENTS</h3>
        
        
        {free && (
          <div>
      
          {free.map((event) => (
            <CardTemplate key={event.id} props={event} loggedIn={false}/>
          ))
          }
        </div>
        )}

        <br />
        <h3 className="locations-place">ATTRACTIONS and TOURS</h3>
        {tours && (
          <div>
          {tours.map((event) => (
            <CardTemplate key={event.id} props={event} loggedIn={false}/>
          ))
          }
             
        </div>
     
        )}
          
      </Container>
    </div>
  );
}

export default HomePage;