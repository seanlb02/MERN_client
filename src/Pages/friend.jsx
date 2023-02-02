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
    const [trackersArray, setTrackersArray] = useState([])
// api fetch will put list of users who logged in user is tracking into this state
    const [trackingArray, setTrackingArray] = useState([])


    // this is the state for adding/authorising a new tracker
    const [tracker, setTracker] = useState("")
    const [error, setError] = useState("")

// Jina, all we need to do now is map over the trackersArray and trackingArray and display each username 
// one list/group/section for trackers, and one section below for tracking

// the 'tracking' usernames will have a link that takes the user to their summary e.g. 'serene.com/summary/:username'

    const onSubmit = function(e) {
    e.preventDefault()
    authoriseTracker(tracker)
    .then(res => {
        // if fetch response has an error code, issue an alert pop-up
            if (!res.ok){
                setError("Oops, looks like that user does not exist")
        }});

}

    const renderTrackers = function () {
        trackersArray.map(tracker => {<a href={`/summary/${tracker.user}`}>{tracker.user}</a>})
    }

  return (
    <>
       
        <Card>
            <Card.Header>Trackers</Card.Header>
            <Card.Body>
               
                <Card.Text>
                    {renderTrackers()}
                    {trackersArray.map(tracker => <a href={`/summary/${tracker.user}`}><div>{tracker.user}</div></a>)}
                </Card.Text>
                <Form.Group className="mb-4">
                        <div>{error}</div>
                        <input type="text" className="form-control" id="Inputtracker" name="username" onChange={(e) => { setTracker(e.target.value) }} placeholder="Enter username"></input>
                    </Form.Group>
                <Button onClick={onSubmit} variant="primary">Authorise Tracker</Button>
            </Card.Body>
        </Card>
        <Card>
            <Card.Header>Tracking</Card.Header>
            <Card.Body>
               
                <Card.Text>
                    
                </Card.Text>
              
            </Card.Body>
        </Card>
    </>

  )
}

