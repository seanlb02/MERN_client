import React,{useId, useState, useRef, useEffect} from 'react'
import { Overlay } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {getEntries, PostEntry} from '../API services (fetch functions)/entriesServices';
import { CheckTokenExpiration } from '../API services (fetch functions)/TokenServices';

const defaultEvents = [{
    id: 1,
    title: 'Spilled Coffee',
    description: '',
    tags: ["joy","sad"]
}];

const Journal = () => {
    const[entriesArray, setEntriesArray] = React.useState([])
    useEffect(() => {
        CheckTokenExpiration();
        getEntries().then((data) => {setEntriesArray(data)})
    },[])

const [myEvents, setMyEvents] = React.useState(defaultEvents);
const [title, setTitle] = React.useState("")
const [description, setDescription] = React.useState("")
const [show, setShow] = useState(false);
const target = useRef(null);
const [emotion,setEmotion] = React.useState([])
const [showItems, setShowItems] = React.useState(false)


const reactions = ['joy', 'sad', 'anger','happy']

const newEvent = {
    id: useId(),
    title: title,
    description: description,
    tags: emotion
}
const saveEvent = async function(e) {
    e.preventDefault();
    setMyEvents([...myEvents,newEvent]);
    setShow(false)
    setShowItems(true)
    await PostEntry(title, description, emotion)
    window.location.reload();
}

const handleEmotion = ((e) => {
    if(e.target.checked){
        return emotion.push(e.target.value)
    }
})


console.log(myEvents)
  return (
      <>
        <div>Journal</div>
        <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
            Add an event
        </Button>

      
        {entriesArray.map(entry => 
                <div>Title: {entry.title}</div>
            )}
        

        <Overlay target={target.current} show={show} placement="bottom">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(255, 100, 100, 0.85)',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            {/* react popup added */}
            <div className= "d-flex align-items-center justify-content-center min-vh-60">
        <Form>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Event Title: </Form.Label>
        <Form.Control type="text" placeholder="Add a title" onChange={(e) => {setTitle(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Description: </Form.Label>
        <Form.Control type="text" onChange={(e) => {setDescription(e.target.value)}}/>
      </Form.Group>
        <div className="mb-3">Select your emotions:</div>
      <Form.Group className="mb-3" controlId="formBasicDescription">
      {reactions.map(item => (
          
              <Form.Check
              inline
              label={item}
              name={item}
              type="checkbox"
              id={item}
              onChange={handleEmotion}
              value={item}
              />
         
      ))}
      </Form.Group>
     
    
      <Button variant="primary" type="submit" onClick={saveEvent}>
        Add
      </Button>
    </Form>
        </div> 
            {/* /react popup finished */}
          </div>
        )}
        </Overlay>
        {/* popup form */}
        
        </>
    
  )
}

export default Journal