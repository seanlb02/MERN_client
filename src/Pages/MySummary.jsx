//  this is for the logged in user's summary 


import {React, useState, useEffect} from 'react'
import { getMonthScores } from '../API services (fetch functions)/scoreServices';
import { CheckTokenExpiration } from '../API services (fetch functions)/TokenServices';
import { LineChart, Line, CartesianGrid, XAxis, YAxis,PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { getTodaysTag} from '../API services (fetch functions)/tagsServices';
import { Container, Row, Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup'




export default function UserSummary() {
    const [todaysTag, setTodaysTag] = useState([])
    const [emotionsTag, setEmotionsTag] = useState([])
    
    useEffect(() => {
        CheckTokenExpiration();
        getMonthScores().then((data) => {setScoresArray(data)})
        getTodaysTag().then((data) => {setTodaysTag(data)})

    },[])

    todaysTag.map((item) => {
        item.tags.map(tag => {
            return emotionsTag.push(tag)
        })
       
    })



    // console.log(emotionsTag)
    // const emotional_tags = ["joy", "anger", "joy", "joy", "anger","sad"]
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



    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#00BB30'];

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
    // const userscores = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 600, pv: 2400, amt: 2400},{name: 'Page B', uv: 800, pv: 2400, amt: 2400}]
    const [scoresArray, setScoresArray] = useState("");
    console.log(scoresArray)
    return(
        <>

    <Container>
        <Row>
            <Col><h3>Here's a summary of your mental wellbeing of late</h3></Col>
        </Row>
        <Row>
            <Col sm={6}>
                <PieChart width={600} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        
                        ))}
                    </Pie>
            </PieChart>
            </Col>
            <Col sm={6}>
                   <h5 className='mt-5'>Daily emotions</h5>
                   <ListGroup>
                        <ListGroup.Item style={{color:"#0088FE"}}>Joy</ListGroup.Item>
                        <ListGroup.Item style={{color: "#00C49F"}}>Happy</ListGroup.Item>
                        <ListGroup.Item style={{color: "#FFBB28"}}>Sad</ListGroup.Item>
                        <ListGroup.Item style={{color: "#00BB30"}}>Angry</ListGroup.Item>
                    </ListGroup>
            </Col>
        </Row>
        <Row>
            <Col>
            <LineChart width={700} height={400} data={scoresArray} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <Line type="monotone" dataKey="score" stroke="#8884d8" />
        
                <XAxis  tick={false}/>
                <YAxis type="number" domain={[10,50]}/>
            </LineChart>
            </Col>
        </Row>
    </Container>
 
    <h4 className="content-align-center mt-5">Your wellbeing scores over the past 30 days</h4>
 
  </>
    )
}