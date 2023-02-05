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

      <Container>
        <Row className= "px-4 my-5">
          <Col sm={7}>
            <Image
              src="src/assets/Opening_image.jpg"
              fluid
              width= "700px"

            />
          </Col>
          <Col sm={{ span: 4, offset: 1 }} className="py-3 d-flex justify-content-center align-items-center">
            <div>
              <h2 id="welch2">A Journal For All Your Mood</h2>
              <p class="mt-4">Serene is a journal to help you keep track and reflect
                upon all your mental wellbeing throughout the day, week, month and year.
              </p>
              <Button className="round">
                Start Journey
              </Button>
            </div>

          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="px-4 my-5">
          <Col sm={7} className="my-4">
            <Image
              src="src/assets/myjournal.png"
              fluid
              id="welcimg"
            />
          </Col>
          <Col sm={{span:4, offset: 1}}>
            <Image src= "src/assets/journallogo.png"
            width="250px"
            fluid
            />
            <h2 id="welch2">Put your emotions down</h2>
            <p className="mt-2 text-align-left">Track your emotions throughout the day by creating entries
             and selecting emotion tags along with it.</p>

          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="px-4 my-5">
          <Col sm={7} className="my-4">
            <Image
              src="src/assets/mysummary.png"
              fluid
              id="welcimg"
            />
          </Col>
          <Col sm={{ span: 4, offset: 1 }}>
            <Image src="src/assets/reflectlogo.png"
              width="250px"
              fluid
            />
            <h2 id="welch2">Reflect</h2>
            <p className="mt-2">We understand the importance of reflection.
            Find the personalized daily summary of your moods in the summary page
            to look back at your emotions throughout the day.

            </p>

          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="px-4 my-5">
          <Col sm={7} className="my-4">
            <Image
              src="src/assets/mygraph.png"
              fluid
              id="welcimg"

            />
          </Col>
          <Col sm={{ span: 4, offset: 1 }}>
            <Image src="src/assets/checkuplogo.png"
              width="250px"
              fluid
            />
            <h2 id="welch2">Weekly Checkup</h2>
            <p className="mt-2">We value your mental health.
            Complete our check-in assessment each week to make sure that
            you're on top of your mental health condition and understand what kind
            of support you might need right now.
            </p>

          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="px-4 my-5">
          <Col sm={7} className="my-4">
            <Image
              src="src/assets/friendgraph.png"
              fluid
              id="welcimg"
            />
          </Col>
          <Col sm={{ span: 4, offset: 1 }}>
            <Image src="src/assets/cheer.png"
              width="250px"
              fluid
            />
            <h2 id="welch2">Share</h2>
            <p className="mt-2">You're not alone.Share your daily and monthly summary with your
            friends and trusted supports and keep track of each other progress.
            </p>

          </Col>
        </Row>
      </Container>


    </>
  )
}
