//  this is for the logged in user's summary 

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import {React, useState, useEffect} from 'react'
import { getMonthScores } from '../API services (fetch functions)/scoreServices';
import { CheckTokenExpiration } from '../API services (fetch functions)/TokenServices';



export default function UserSummary() {

    
    useEffect(() => {
        CheckTokenExpiration();
        getMonthScores().then((data) => {setScoresArray(data)})

    },[])

    

    const userscores = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 600, pv: 2400, amt: 2400},{name: 'Page B', uv: 800, pv: 2400, amt: 2400}]
    const [scoresArray, setScoresArray] = useState("");
    const [categories, setCategoriesArray] = useState([{name: 'Balanced',name: 'Monitor', name: 'Seek advice'  }]);

    return(
        <>
    <div>
        <h3>Here's a summary of your mental wellbeing of late</h3>
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