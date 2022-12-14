import React, { useState } from "react";
import { useLocation } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate } from "react-router-dom";
import "../card.css"


export default function CreateEvent() {
    const location = useLocation();
    const eventInfo = location.state ? location.state.eventInfo : null;
    const [date, setDate] = useState(eventInfo ? eventInfo.date : new Date());
    const [success, setSuccess] = useState(false);
    const[title, setTitle] = useState(eventInfo ? eventInfo.title : "");
    const[description, setDescription] = useState(eventInfo ?  eventInfo.description : "");
    const[price, setPrice] = useState(eventInfo ?  eventInfo.price : "");
    const[link, setLink] = useState(eventInfo ? eventInfo.link : "");
    const[address, setAddress] = useState(eventInfo ?  eventInfo.address : "");
    const[type, setType] = useState('Museums & Art Institutions');

  

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(title + " " + price + " " + link + " " +
            address + " " + description + " " + type + " " + date);
            let response = await fetch("/api/events", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                price: price,
                address: address,
                link: link,
                description: description,
                date: date,
                type: type
            }),
            });
            if (response.ok) {
            setSuccess(true);
            } 
        } catch (error) {
            console.error("Server error while creating new event", error);
        }
    };

    const updateEvent = async (event) => {
        event.preventDefault();
        try {
            console.log(title + " " + price + " " + link + " " +
            address + " " + description + " " + type + " " + date);
            let response = await fetch(`/api/events/${eventInfo.id}`, {
            method: "PUT",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                price: price,
                address: address,
                link: link,
                description: description,
                date: date,
                type: type
            }),
            });
            if (response.ok) {
            setSuccess(true);
            } 
        } catch (error) {
            console.error("Server error while updating event ", error);
        }
    };
    if (success) return <Navigate to="/user-profile" />;

    return (
        <div>
            {eventInfo ? (
                <h2 className = "title">Update Event Information</h2>
            ):
            (<h2 className = "title">Create a New Event</h2>)}
            
            <Form className = "spacing" onSubmit={eventInfo ? updateEvent : handleSubmit}>
                <Form.Group  className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Event Title</Form.Label>
                    <Form.Control  className="smaller-input" type="text" placeholder="Enter event title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label
                    >Select a category</Form.Label>
                    <Form.Select 
                     className="smaller-input"
                    value={type}
                    onChange={(e) => setType(e.target.value)}>
                        <option >Museums & Art Institutions</option>
                        <option>Concerts & Shows</option>
                        <option>Parks & Public Spaces</option>
                        <option>Free Events</option>
                        <option>Attractions & Tours</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmai">
                    <Form.Label>Address</Form.Label>
                    <Form.Control  className="smaller-input" type="text" placeholder="Enter address" 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                     className="smaller-input"
                        type="date"
                        name="date"
                        placeholder="Date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control  className="smaller-input" type="text" placeholder="Enter price" 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Registration Link</Form.Label>
                    <Form.Control  className="smaller-input" type="text" placeholder="Enter a registration link" 
                    value={link}
                    onChange={(e) => setLink(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control  className="smaller-input" type="text" placeholder="Enter a description" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>
                <Button className= "color-button" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}
