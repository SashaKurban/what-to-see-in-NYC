import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function CreateEvent() {
    const [date, setDate] = useState(new Date());

    console.log("DATE", date);
    return (
        <div>
            <h1>What to See in NYC</h1>
            <h2>Create a New Event</h2>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Event Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter event title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter a zip code" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control
                        type="date"
                        name="startdate"
                        placeholder="Start Date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control
                        type="date"
                        name="enddate"
                        placeholder="End Date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="Enter price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Registration Link</Form.Label>
                    <Form.Control type="text" placeholder="Enter a registration link" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter a description" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}
