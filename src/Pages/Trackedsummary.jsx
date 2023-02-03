import { useParams } from "react-router-dom"

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import {React, useState, useEffect} from 'react'
export default function TrackedSummary() {

const { username } = useParams() 
 
const [scoresArray, setScoresArray] = useState([])

    return (
        <>
    <div>
        <h3 className="mt-4">Mental wellbeing summary of {username}</h3>
    </div>
    <section className="mt-5 ms-4 d-flex flex-wrap gap-4 content-align-center">
    <div className="w-50">
    <LineChart width={700} height={400} data={scoresArray} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <Line type="monotone" dataKey="score" stroke="#8884d8" />
 
        <XAxis  tick={false}/>
 
        <YAxis type="number" domain={[10,50]}/>
    </LineChart>
    </div>
    <h4 className="content-align-center mt-5">Your wellbeing scores over the past 30 days</h4>
    </section>


    </>
    )

}



