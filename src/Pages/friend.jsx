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



    const onSubmit = async function(e) {
    e.preventDefault()
    authoriseTracker(tracker)
    .then(res => {
        // if fetch response has an error code, issue an alert pop-up
            if (!res.ok){
                setError("Oops, looks like that user does not exist, or they are already tracking you")
            }
            
        }).then(() => {window.location.reload()})
    

}



  return (
    <>
       
        <Card className="mx-4 d-flex justify-content-center">
            <Card.Header>Trackers</Card.Header>
            <Card.Body>
               
                <Card.Text className="d-flex flex-wrap gap-2 justify-content-center">
                   
                    {trackersArray.map(tracker => <a className="text-white text-decoration-none" href={`/summary/${tracker.user}`}><div className="border border-success p-1 px-3  bg-success bg-gradient rounded-pill">{tracker.user}</div></a>)}
                </Card.Text>
                <Form.Group className=" mb-4 mt-4 d-flex flex-column justify-content-center">
                        <div>{error}</div>

                        <input type="text" className="form-control d-flex col-6 mx-auto justify-content-center" id="Inputtracker" name="username" onChange={(e) => { setTracker(e.target.value) }} placeholder="Enter username"></input>
                    </Form.Group>
                <Button onClick={onSubmit} variant="primary">Authorise Tracker</Button>
            </Card.Body>
        </Card>

        <Card className="mx-4 mt-4 d-flex justify-content-center">
            <Card.Header>Tracking</Card.Header>
            <Card.Body>
               
                <Card.Text>
                {trackingArray.map(tracked => <div>{tracked.user}</div>)}
                </Card.Text>
              
            </Card.Body>
        </Card>
    </>

  )
}

