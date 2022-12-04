import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProfileCard(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.email}</Card.Text>
                    <Card.Text>{props.bio}</Card.Text>
                    <a href="/edit-profile">
                        <Button variant="outline-primary">Edit Profile</Button>{' '}
                    </a>
                </Card.Body>
            </Card>
        </div>

    );
}


export default ProfileCard;