import React, { useState, useEffect } from "react";
import CardTemplate from "../components/CardTemplate";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      <h1>What to See in NYC</h1>
      <Container>
        <h3>MUSEUMS and ART INSTITUTIONS</h3>
        {museums && (
          <div>
          {museums.map((event) => (
            <CardTemplate key={event.id} {...event}/>
          ))
          }
        </div>
        )}
        <br/>
        <h3>PARKS and PUBLIC SPACES</h3>
        {parks && (
          <div>
          {parks.map((event) => (
            <CardTemplate key={event.id} {...event}/>
          ))
          }
        </div>
        )}
        <br />
        <h3>SHOWS and CONCERTS</h3>
        {concerts && (
          <div>
          {concerts.map((event) => (
            <CardTemplate key={event.id} {...event}/>
          ))
          }
        </div>
        )}
        <br />
        <h3>FREE EVENTS</h3>
        {free && (
          <div>
          {free.map((event) => (
            <CardTemplate key={event.id} {...event}/>
          ))
          }
        </div>
        )}
        <br />
        <h3>ATTRACTIONS and TOURS</h3>
        {tours && (
          <div>
          {tours.map((event) => (
            <CardTemplate key={event.id} {...event}/>
          ))
          }
        </div>
        )}
      </Container>
    </div>
  );
}

export default HomePage;