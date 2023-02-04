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
    let countHappy =0
    emotionsTag.map((tag) =>{
        if (tag === "joy"){
            return countJoy +=1
        }else if(tag === "anger"){
            return countAnger +=1
        }else if(tag === "happy"){
            return countHappy +=1
        }else{
            return countSad +=1
        }
    })

    console.log(countJoy, countAnger, countSad)

    const data = [
        { name: 'joy', value: countJoy },
        { name: 'anger', value: countAnger },
        { name: 'sad', value: countSad },
        { name: 'happy', value: countHappy }
    ]



    const COLORS = ['#8F99EA', '#E88B8C', '#EFA58D', '#7EC6E7'];
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

    {invalid ? <h4 className="text-danger">Not Authorised</h4> :
    
    <Container>
        <Row>
            <Col><h2 style={{color: "#8F99EA"}} className="mt-5"><strong>Here's a summary of <span className="text-warning">{username}&apos;s</span> mental wellbeing of late</strong></h2></Col>
        </Row>
        <Row className="mt-5 mb-5 text-align-left">
            <Col lg={2} ><h4 >Daily Moods</h4></Col>
        </Row>
        <Row style={{marginBottom: "150px"}}>
            <Col lg={7} style={{backgroundColor: "#F9FAFD"}}>

                <div className='mt-5 d-flex justify-content-center align-items-center'>
                    
                        <div className="d-flex justify-content-center align-items-center mr-2 ml-1">
                            <div className="emotionButton mr-2" style={{backgroundColor:"#8F99EA"}}></div>
                            <div>Joy</div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center mr-2 ml-1">
                            <div className="emotionButton mr-2" style={{backgroundColor:"#E88B8C"}}></div>
                            <div>Anger</div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center mr-2 ml-1">
                            <div className="emotionButton mr-2" style={{backgroundColor:"#EFA58D"}}></div>
                            <div>Sad</div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center mr-2 ml-1">
                            <div className="emotionButton mr-2" style={{backgroundColor:"#7EC6E7"}}></div>
                            <div>Happy</div>
                        </div>
                        
                </div>
                <PieChart width={400} height={300} >
                    <Pie
                        data={data}
                        cx="70%"
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
                    <h3 className='mt-5' style={{color: "#8F99EA"}}><strong>Your Moods Today</strong></h3>
                   <p >Let's have a look at you moods throughout today. Looks like you've been feeling joy,anger,sad and happy today. Take a moment to reflect your day.</p>
                   <p>This chart will help you to understand that how significantly these emotions can affect you feelings,thinking process and interaction with others.</p>
                </div>
            </Col>
        </Row>
        <Row className="mt-5 mb-5 text-align-left">
            <Col lg={3} ><h4 >Monthly Wellbeing</h4></Col>
        </Row>
        <Row style={{marginBottom: "100px"}}>
            <Col lg={7} style={{backgroundColor: "#F9FAFD"}} className="pt-5">
            
            <LineChart  width={500} height={400} data={scoresArray} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <Line type="monotone" dataKey="score" stroke="#8884d8" />
        
                <XAxis  label={{ value: 'The Last 30 days', angle: 0, position: 'center' }} tick={false} />
                <YAxis type="number" domain={[10,50]} label={{ value: 'Scores', angle: -90, position: 'insideLeft' }}/>
            </LineChart>
            </Col>
            <Col lg={5} className=' d-flex align-items-center justify-content-center ' >
                <div>
                    <h3 className='mt-5' style={{color: "#8F99EA"}}><strong>Your wellbeing through the last month</strong></h3>
                   <p>Life can be full of ups and downs. While this graph may help you to understand your recent states over the period of time. Have a look how this month has been for you.</p>
                   <p>This graph defines the wellbeing scores that you have recorded over the last 30 days.</p>
 
                </div>
            </Col>
        </Row>

    </Container>

                        }
    </>
    )

}



