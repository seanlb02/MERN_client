import {Card, Button, InputGroup, Form} from 'react-bootstrap'
import {React, useState, useEffect} from 'react'
import { authoriseTracker, listTrackers, listTracking } from '../API services (fetch functions)/friendServices';
import { CheckTokenExpiration } from '../API services (fetch functions)/TokenServices';




export default function Friends() {

    useEffect(() => {   
        CheckTokenExpiration();
    },[]);

// on Mount, we fetch all user tracking and trackers 
    useEffect(() => {   
        listTracking().then((data) => {setTrackingArray(data[0].tracking)})

        listTrackers().then((data) => {setTrackersArray(data[0].trackers)})

    },[]);

// api fetch will put list of users who is tracking the logged in user into this state
    const [trackersArray, setTrackersArray] = useState("")
// api fetch will put list of users who logged in user is tracking into this state
    const [trackingArray, setTrackingArray] = useState("")


    // this is the state for adding/authorising a new tracker
    const [tracker, setTracker] = useState("")

// Jina, all we need to do now is map over the trackersArray and trackingArray and display each username 
// one list/group/section for trackers, and one section below for tracking

// the 'tracking' usernames will have a link that takes the user to their summary e.g. 'serene.com/summary/:username'

const onSubmit = function(e) {
    e.preventdefault();
    authoriseTracker(tracker);

}

  return (
    <>
        <InputGroup className="mb-3">
            <Form.Control
                placeholder="Search"
                aria-label="Search"
                aria-describedby="baisc-addon2"
            />
            <InputGroup.Text id ="basic-addon2"></InputGroup.Text>
        </InputGroup>


        <Card>
            <Card.Header>John Smith</Card.Header>
            <Card.Body>
                <Card.Title>John Smith's Summary</Card.Title>
                <Card.Text>
                    Sth sth sth
                </Card.Text>
                <Button variant="primary">View Summary</Button>
            </Card.Body>
        </Card>
    </>

  )
}

