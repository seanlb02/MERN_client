import {React, useEffect} from 'react'
import {Container, Row, Col, Image, Button} from 'react-bootstrap'
import WelcNav from '../Components/welcomeNav'


export default function Home() {

  useEffect(() => {   
    if(localStorage.getItem("tokenKey") != null) {
      window.location.replace('/journal');
    };
},[]);


  return (
    <>
      <WelcNav />
      <Container>
        <Row calssName= "px-4 my-5">
          <Col sm={7}>
            <Image
              src="src/assets/Opening_image.jpg"
              fluid
              className= ""
            />
          </Col>
          <Col sm={5}>
            <h1>A Journal For All Your Mood</h1>
            <p class= "mt-4">Serene is a journal to help you keep track and reflect
              upon all your moods throughout the day, week, month and year.
            </p>
            <Button>
              Start Journey
            </Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row calssName="px-4 my-5">
          <Col sm={7}>
            <Image
              src="src/assets/journalpage.png"
              fluid
              className=""
            />
          </Col>
          <Col sm={5}>
            <Image src= "src/assets/cheer.png"
            fluid
            />
            <h1>Set your mood for the day</h1>
            <p class="mt-4">Write a small note to yourself to start your day right.
            </p>

          </Col>
        </Row>
      </Container>


    </>
  )
}
