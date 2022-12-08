import { CommandCompleteMessage } from "pg-protocol/dist/messages";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate } from "react-router-dom";

export default function CreateEvent() {
    const [date, setDate] = useState(new Date());
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const[title, setTitle] = useState();
    const[description, setDescription] = useState();
    const[price, setPrice] = useState();
    const[link, setLink] = useState();
    const[address, setAddress] = useState();
    const[type, setType] = useState();
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
            } else {
            setError(true);
            }
        } catch (error) {
            console.error("Server error while creating new event", error);
            setError(true);
        }
    };

    if (success) return <Navigate to="/user-profile" />;

    return (
        <div>
            <h1>What to See in NYC</h1>
            <h2>Create a New Event</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Event Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter event title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label
                    >Select a category</Form.Label>
                    <Form.Select 
                    value={type}
                    onChange={(e) => setType(e.target.value)}>
                        <option >Museums & Art Institutions</option>
                        <option>Shows & Concerts</option>
                        <option>Parks & Public Spaces</option>
                        <option>Free Events</option>
                        <option>Attractions & Tours</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmai">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter address" 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        type="date"
                        name="date"
                        placeholder="Date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="Enter price" 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Registration Link</Form.Label>
                    <Form.Control type="text" placeholder="Enter a registration link" 
                    value={link}
                    onChange={(e) => setLink(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter a description" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}
