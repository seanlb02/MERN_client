import { useParams } from "react-router-dom"
import {React, useState, useEffect} from 'react'
import { getMonthScores, getUserMonthScore } from '../API services (fetch functions)/scoreServices';
import { CheckTokenExpiration } from '../API services (fetch functions)/tokenServices';
import { LineChart, Line, CartesianGrid, XAxis, YAxis,PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { getTodaysTag, getUserDayTags} from '../API services (fetch functions)/tagsServices';
import { Container, Row, Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup'
import { validateTracker } from "../API services (fetch functions)/friendServices";
import '../App.css'










export default function TrackedSummary() {

    const [todaysTag, setTodaysTag] = useState([])
    const [emotionsTag, setEmotionsTag] = useState([])
    const { username } = useParams()
    const [invalid, setInvalid] = useState(true)

    useEffect(() => {
        {validateTracker(username).then(res => {
            if (res.length > 0) {
               setInvalid(false)
            }
        })}

        CheckTokenExpiration();
        getUserMonthScore(username).then((data) => {setScoresArray(data)})
        getUserDayTags(username).then((data) => {setTodaysTag(data)})

    },[])

    todaysTag.map((item) => {
        item.tags.map(tag => {
            return emotionsTag.push(tag)
        })

    })

    let countJoy = 0
    let countAnger = 0
    let countSad = 0
    let countInterest = 0
    let countSurprise = 0
    let countDisgust = 0
    let countContempt = 0
    let countFear = 0
    let countShame = 0
    let countShyness = 0
    let countGuilt = 0
    let countHostility = 0

    emotionsTag.map((tag) => {
        if (tag === "Joy") {
            return countJoy += 1
        } else if (tag === "Anger") {
            return countAnger += 1
        } else if (tag === "Interest") {
            return countInterest += 1
        } else if (tag === "Surprise") {
            return countSurprise += 1
        } else if (tag === "Disgust") {
            return countDisgust += 1
        } else if (tag === "Contempt") {
            return countContempt += 1
        } else if (tag === "Fear") {
            return countFear += 1
        } else if (tag === "Shame") {
            return countShame += 1
        } else if (tag === "Shyness") {
            return countShyness += 1
        } else if (tag === "Guilt") {
            return countGuilt += 1
        } else if (tag === "Self-hostility") {
            return countHostility += 1
        } else {
            return countSad += 1
        }
    })

    console.log(countJoy, countAnger, countSad)

    const data = [
        { name: 'Joy', value: countJoy },
        { name: 'Anger', value: countAnger },
        { name: 'Interest', value: countInterest },
        { name: 'Surprise', value: countSurprise },
        { name: 'Disgust', value: countDisgust },
        { name: 'Contempt', value: countContempt },
        { name: 'Fear', value: countFear },
        { name: 'Shame', value: countShame },
        { name: 'Shyness', value: countShyness },
        { name: 'Guilt', value: countGuilt },
        { name: 'Self-hostility', value: countHostility },
        { name: 'Sadness', value: countSad }

    ]



    const COLORS = ['#8F99EA', '#E88B8C', '#EFA58D', '#7EC6E7','#F9AE5E','#CFD65B','#A1D2CF','#00939D','#CEC4DE','#F9C6CB','#FFF16C','#DEE0C4'];
    const styled = {
        listStyleType: 'none'
    }
    const emotionbutton={
        height: "15px",
        width: "15px",
        backgroundColor: "red",
        marginRight: "10px"
    }

    const RADIAN = Math.PI / 180;
    // const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
};

    const [scoresArray, setScoresArray] = useState("");
    //    console.log(scoresArray.reverse())
    console.log(scoresArray)
    return (
        <>

            <Container>
                <Row>
                    <Col><h2 style={{ color: "#8F99EA" }} className="mt-5"><strong>Here's a summary of your Mental Wellbeing of late</strong></h2></Col>
                </Row>
                <Row className="mt-5 mb-5 text-align-left">
                    <Col lg={2} ><h4 >Daily Moods</h4></Col>
                </Row>
                <Row style={{ marginBottom: "150px" }}>
                    <Col lg={7} style={{ backgroundColor: "#F9FAFD" }}>

                        <div className='mt-5 d-flex justify-content-center align-items-center'>

                            <div className="d-flex justify-content-center align-items-center mr-2 ml-1">
                                <div className="emotionButton mr-2" style={{ backgroundColor: "#8F99EA" }}></div>
                                <div>Joy</div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center mr-2 ml-1">
                                <div className="emotionButton mr-2" style={{ backgroundColor: "#E88B8C" }}></div>
                                <div>Anger</div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center mr-2 ml-1">
                                <div className="emotionButton mr-2" style={{ backgroundColor: "#EFA58D" }}></div>
                                <div>Interest</div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center mr-2 ml-1">
                                <div className="emotionButton mr-2" style={{ backgroundColor: "#7EC6E7" }}></div>
                                <div>Surprise</div>
                            </div>
                        </div>


                        <div className='mt-1 d-flex justify-content-center align-items-center'>
                            <div className="d-flex justify-content-center align-items-center mr-2 ml-1">
                                <div className="emotionButton mr-2" style={{ backgroundColor: "#F9AE5E" }}></div>
                                <div>Sadness</div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center mr-2 ml-1">
                                <div className="emotionButton mr-2" style={{ backgroundColor: "#CFD65B" }}></div>
                                <div>Disgust</div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center mr-2 ml-1">
                                <div className="emotionButton mr-2" style={{ backgroundColor: "#A1D2CF" }}></div>
                                <div>Contempt</div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center mr-2 ml-1">
                                <div className="emotionButton mr-2" style={{ backgroundColor: "#00939D" }}></div>
                                <div>Fear</div>
                            </div>
                        </div>

                        <div className='mt-1 d-flex justify-content-center align-items-center'>
                            <div className="d-flex justify-content-center align-items-center mr-2 ml-1">
                                <div className="emotionButton mr-2" style={{ backgroundColor: "#CEC4DE" }}></div>
                                <div>Shame</div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center mr-2 ml-1">
                                <div className="emotionButton mr-2" style={{ backgroundColor: "#F9C6CB" }}></div>
                                <div>Shyness</div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center mr-2 ml-1">
                                <div className="emotionButton mr-2" style={{ backgroundColor: "#FFF16C" }}></div>
                                <div>Guilt</div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center mr-2 ml-1">
                                <div className="emotionButton mr-2" style={{ backgroundColor: "#DEE0C4" }}></div>
                                <div>Self-hostility</div>
                            </div>
                        </div>




                        <PieChart width={300} height={300} style={{ margin: "0 auto" }} className="d-flex justify-content-center align-items-center ">
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={120}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (

                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />

                                ))}
                            </Pie>
                        </PieChart>


                    </Col>
                    <Col lg={5} className=' d-flex align-items-center justify-content-center' >
                        <div>
                            <h3 className='mt-5' style={{ color: "#8F99EA" }}><strong>Your Moods Today</strong></h3>
                            <p >Let's have a look at you moods throughout today. Take a moment to reflect your day.</p>
                            <p>This chart will help you to understand that how significantly these emotions can affect you feelings,thinking process and interaction with others.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5 mb-5 text-align-left">
                    <Col lg={3} ><h4 >Monthly Wellbeing</h4></Col>
                </Row>
                <Row style={{ marginBottom: "100px" }}>
                    <Col lg={7} style={{ backgroundColor: "#F9FAFD" }} className="pt-5">

                        <LineChart width={500} height={400} data={scoresArray} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <Line type="monotone" dataKey="score" stroke="#8884d8" />

                            <XAxis label={{ value: 'The Last 30 days', angle: 0, position: 'center' }} tick={false} />
                            <YAxis type="number" domain={[10, 50]} label={{ value: 'Scores', angle: -90, position: 'insideLeft' }} />
                        </LineChart>
                    </Col>
                    <Col lg={5} className=' d-flex align-items-center justify-content-center ' >
                        <div>
                            <h3 className='mt-5' style={{ color: "#8F99EA" }}><strong>Your wellbeing through the last month</strong></h3>
                            <p>Life can be full of ups and downs. While this graph may help you to understand your recent states over the period of time. Have a look how this month has been for you.</p>
                            <p>This graph defines the wellbeing scores that you have recorded over the last 30 days.</p>

                        </div>
                    </Col>
                </Row>

            </Container>



        </>
    )
}



