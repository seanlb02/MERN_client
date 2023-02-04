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
          <Col sm={8}>
            <Image
              src="src/assets/Opening_image.jpg"
              fluid
              width= "700px"

            />
          </Col>
          <Col sm={4} className="py-3">
            <h2 id="welch2">A Journal For All Your Mood</h2>
            <p class= "mt-4">Serene is a journal to help you keep track and reflect
              upon all your mental wellbeing throughout the day, week, month and year.
            </p>
            <Button className="round">
              Start Journey
            </Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="px-4 my-5">
          <Col sm={8} className="my-4">
            <Image
              src="src/assets/myjournal.png"
              fluid
              id="welcimg"
            />
          </Col>
          <Col sm={4}>
            <Image src= "src/assets/journallogo.png"
            width="250px"
            fluid
            />
            <h2 id="welch2">Put your emotions down</h2>
            <p className="mt-2">Track your emotions throughout the day by adding
            journals and selecting up to 12 emotion tags along with it.</p>

          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="px-4 my-5">
          <Col sm={8} className="my-4">
            <Image
              src="src/assets/mysummary.png"
              fluid
              id="welcimg"
            />
          </Col>
          <Col sm={4}>
            <Image src="src/assets/reflectlogo.png"
              width="250px"
              fluid
            />
            <h2 id="welch2">Reflect</h2>
            <p className="mt-2">Get daily summary of your mood.
            </p>

          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="px-4 my-5">
          <Col sm={8} className="my-4">
            <Image
              src="src/assets/mygraph.png"
              fluid
              id="welcimg"

            />
          </Col>
          <Col sm={4}>
            <Image src="src/assets/checkuplogo.png"
              width="250px"
              fluid
            />
            <h2 id="welch2">Weekly Checkup</h2>
            <p className="mt-2">Complete weekly questionnaire to track your mental health
            </p>

          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="px-4 my-5">
          <Col sm={8} className="my-4">
            <Image
              src="src/assets/friendgraph.png"
              fluid
              id="welcimg"
            />
          </Col>
          <Col sm={4}>
            <Image src="src/assets/cheer.png"
              width="250px"
              fluid
            />
            <h2 id="welch2">Share</h2>
            <p className="mt-2">Share your mental health summary with your friends
            </p>

          </Col>
        </Row>
      </Container>


    </>
  )
}
