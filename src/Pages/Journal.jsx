import React, { useId, useState, useRef, useEffect } from 'react'
import { Overlay, Button, Form, Card, Container, Badge } from 'react-bootstrap'
import { getEntries, PostEntry } from '../API services (fetch functions)/entriesServices';
import { editMemo } from '../API services (fetch functions)/userServices';
import { CheckTokenExpiration } from '../API services (fetch functions)/tokenServices';
import { getUserData } from '../API services (fetch functions)/userServices';
import '../App.css'

const defaultEvents = [{
  id: 1,
  title: 'Spilled Coffee',
  description: '',
  tags: ["joy", "sad"]
}];

const Journal = () => {
  const [dataArray, setDataArray] = React.useState([])
  const [entriesArray, setEntriesArray] = React.useState([])

  useEffect(() => {
    CheckTokenExpiration();
    getUserData().then((data) => {setDataArray(data) })
    getEntries().then((data) => { setEntriesArray(data) })
  }, [])

  const [myEvents, setMyEvents] = React.useState(defaultEvents);
  const [title, setTitle] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [emotion, setEmotion] = React.useState([])
  const [showItems, setShowItems] = React.useState(false)


  const reactions = ['Joy', 'Interest', 'Surprise', 'Sadness', 'Anger', 'Disgust','Contempt','Fear', 'Shame','Shyness','Guilt','Self-hostility']

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

const memo = dataArray.map(el=>el.memo)
const [newMemo, setNewMemo] = useState("");


// submitting a new memo to the database
const onMemoSubmit = async function (e) {
    e.preventDefault();
    await editMemo(newMemo);
    window.location.reload();



}

console.log(myEvents)
console.log(emotion)

  return (
    <>
      <Container className="d-flex mb-5 flex-column justify-content-center">
      <h1 className="mt-5 mb-4 text-left">Hey {dataArray.map(el=>el.username)}!</h1>
        <form>
        <Card >

            <Card.Body className="d-flex text-left">

              <textarea className="overflow-wrap-break-word"id="textarea" placeholder={memo} rows="4" cols="80" onChange={(e) => setNewMemo(e.target.value)}></textarea>

            </Card.Body>


        </Card>
        <button className="btn btn-primary btn-md round mt-2 float-left" onClick={onMemoSubmit}>Update memo</button>
        </form>
      </Container>
      <Button className="btn btn-primary btn-md round mb-3"   ref={target} onClick={() => setShow(!show)}>
        Add New Entry  <i class="fa fa-plus my-float"></i>
      </Button>


      {entriesArray.map((entry, i) =>
      <Container>
        <Card className="d-flex justify-content-center mb-4">
        <Card.Header id="cardheader"> <h3>{entry.title}</h3></Card.Header>
        <Card.Body id="cardbody" className="">{entry.text}</Card.Body>
        <Card.Footer id="cardfooter" className="d-flex p-0"> <h4>{entry.tags.map(el => <Badge id= "badge" className="m-1"><div> {el}</div></Badge>)}</h4></Card.Footer>
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