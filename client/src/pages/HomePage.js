import React, { useState, useEffect } from "react";
import CardTemplate from "../components/CardTemplate";
import Container from 'react-bootstrap/Container';

function HomePage(props) {
  const[museums, setMuseums] = useState();
  const[free, setFree] = useState();
  const[parks, setParks] = useState();
  const[concerts, setConcerts] = useState();
  const[tours, setTours] = useState();

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

  return (
    <div>
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