import {Card, Button, InputGroup, Form} from 'react-bootstrap'




export default function Friends() {
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

