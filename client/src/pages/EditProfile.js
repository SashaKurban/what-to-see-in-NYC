import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function EditProfile() {
    return (
        <div>
            <h1>What to See in NYC</h1>
            <h1 className="profileHeader">Edit Your Profile</h1>
            {/* TODO: Create image upload page*/}
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Update your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Update your email" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Bio</Form.Label>
                    <Form.Control type="text" placeholder="Update your bio" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default EditProfile;