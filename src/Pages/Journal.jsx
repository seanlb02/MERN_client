import React, { useId, useState, useRef, useEffect } from 'react'
import { Overlay, Button, Form, Card, Container } from 'react-bootstrap'
import { getEntries, PostEntry } from '../API services (fetch functions)/entriesServices';
import { CheckTokenExpiration } from '../API services (fetch functions)/TokenServices';

const defaultEvents = [{
  id: 1,
  title: 'Spilled Coffee',
  description: '',
  tags: ["joy", "sad"]
}];

const Journal = () => {
  const [entriesArray, setEntriesArray] = React.useState([])
  useEffect(() => {
    CheckTokenExpiration();
    getEntries().then((data) => { setEntriesArray(data) })
  }, [])

  const [myEvents, setMyEvents] = React.useState(defaultEvents);
  const [title, setTitle] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [emotion, setEmotion] = React.useState([])
  const [showItems, setShowItems] = React.useState(false)


  const reactions = ['joy', 'sad', 'anger', 'happy']

  const newEvent = {
    id: useId(),
    title: title,
    description: description,
    tags: emotion
  }
  const saveEvent = async function (e) {
    e.preventDefault();
    setMyEvents([newEvent]);
    setShow(false)
    setShowItems(true)
    await PostEntry(title, description, emotion)
    window.location.reload();
  }

  const handleEmotion = ((e) => {
    if (e.target.checked) {
      return emotion.push(e.target.value)
    }
  })



console.log(myEvents)
console.log(emotion)

  return (
    <>
      <h1>Journal</h1>
      <Button className="float mb-4" id="addeventbtn"  ref={target} onClick={() => setShow(!show)}>
        <i class="fa fa-plus my-float"></i>
      </Button>


      {entriesArray.map(entry =>
      <Container>
        <Card className="d-flex justify-content-center mb-4">
        <Card.Header id="cardheader"> {entry.title}</Card.Header>
        <Card.Body id="cardbody">{entry.description}</Card.Body>
        <Card.Footer id="cardfooter"> {entry.tags}</Card.Footer>
        </Card>
      </Container>
      )}


      <Overlay target={target.current} show={show} placement="bottom">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              position: 'relative',
              backgroundColor: 'rgba(255, 255, 255)',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              border: '1px solid',
              ...props.style,
            }}
          >
            {/* react popup added */}
            <div className="d-flex align-items-center justify-content-center min-vh-60">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                  <Form.Label>Event Title: </Form.Label>
                  <Form.Control type="text" placeholder="Add a title" onChange={(e) => { setTitle(e.target.value) }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                  <Form.Label>Description: </Form.Label>
                  <Form.Control type="text" onChange={(e) => { setDescription(e.target.value) }} />
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



                <Button className="btn btn-success btn-block btn-lg round mb-2" type="submit" onClick={saveEvent}>
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