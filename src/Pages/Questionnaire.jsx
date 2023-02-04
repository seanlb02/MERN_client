import React, {useState} from 'react'
import {addScore} from "../API services (fetch functions)/scoreServices"

const Questionnaire = () => {
    const questions = [
        {question: "Lately, how often have you felt tired out of no good reason?",
        choices: ["1", "2", "3", "4", "5"]}, 
        {question: "Lately, how often have you felt nervous?",
        choices: ["1", "2", "3", "4", "5"]},
        {question: "Lately, how often have you felt so nervous that nothing could calm you down?",
        choices: ["1", "2", "3", "4", "5"]},
        {question: "Lately, how often have you felt hopeless?",
        choices: ["1", "2", "3", "4", "5"]},
        {question: "Lately, how often have you felt restless?",
        choices: ["1", "2", "3", "4", "5"]},
        {question: "Lately, how often have you felt so restless you could not sit still?",
        choices: ["1", "2", "3", "4", "5"]},
        {question: "Lately, how often have you felt depressed?",
        choices: ["1", "2", "3", "4", "5"]},
        {question: "Lately, how often have you felt that everything was an effort?",
        choices: ["1", "2", "3", "4", "5"]},
        {question: "Lately, how often have you felt so sad that nothing could cheer you up?",
        choices: ["1", "2", "3", "4", "5"]},
        {question: "Lately, how often have you felt worthless?",
        choices: ["1", "2", "3", "4", "5"]}
      ]
      const [showResults, setShowResults] = useState(false);
      // const[finalScore, setFinalScore] = useState("");
      const [selections, setSelections] = useState([Object.keys(questions).map(x => [])]);
      const [warning, setWarning] = useState("")


      let values = Object.values(selections)
      let message = " "
      let score = 0
      values.forEach(val => (score += val))
      
      let count = 0

      if (score <= 10){
        message = "Your result is Normal."
      }else if (score <=20){
        message = "Your result is Low"
      }else if(score <= 30){
        message = "Your result is Moderate."
      }else if(score <= 40){
        message = "Your result is high"
      }else if(score <= 50){
        message = "Your result is very high. You need some medication."
      }else{
        message = ""
      }
    
      const submitHandler = (event) => {
        console.log("selection")
        console.log( selections);
        // console.log(score)
        event.preventDefault();
        countScores(count)
        // setShowResults(true)
        addScore(score)
        // setFinalScore(score)
        // console.log(finalScore)
 

      };
      const handleChange = (selection, index) => {
        let tempState = {...selections}
        tempState[index] = selection
        setSelections(tempState);
      };
    
      const countScores= (count) =>{
        if(count === 10){
          setShowResults(true)
        }else{
          setShowResults(false)
          setWarning("Please answer all questions")
        }
      }
        for(let key in selections) {
          ++count
      
        }
        console.log("count")
        console.log(count)
  

      const restartGame = () => {
        
        setShowResults(false);
        setSelections([Object.keys(questions).map(x => [])])
      };
    
      // const [score, setScore] = useState("")
    
    
      return (
        <div style={{textAlign: "center"}}>
          
            <h1 style ={{color: "#6486DD" }}>
              My Weekly Check-Up
            </h1>
            
            {showResults? (
            <div>
                <h2>Score is {score} </h2>
                <h3>{message}</h3>
                <button onClick={() => restartGame()}>Test Again</button>
            </div>
            ):(
          
          <div> 
          <ol >
            {questions.map((item, index) => {
              return (
                <>
                  
                    <h3 className="mb-4">{item.question}</h3>
                    <form className="choices">
                      <div className="d-flex justify-content-center gap-5">
                        <label>
                          <h5>None of the time</h5>
                          <input
                            type="radio"
                            name="choice"
                            value={item.choices[0]}
                            checked={selections[index] === 1}
                            onChange={() => handleChange(1, index)}
                          />
                        </label>
                      
                        <label>
                        <h5>A little of the time</h5>
                          <input
                            type="radio"
                            name="choice"
                            value={item.choices[1]}
                            checked={selections[index] === 2}
                            onChange={() => handleChange(2, index)}
                          />                        
                        </label>
                      
                        <label>
                        <h5>Some of the time</h5>
                          <input
                            type="radio"
                            name="choice"
                            value={item.choices[2]}
                            checked={selections[index] === 3}
                            onChange={() => handleChange(3, index)}
                          />                         
                        </label>
                      
                        <label>
                        <h5>Most of the time</h5>
                          <input
                            type="radio"
                            name="choice"
                            value={item.choices[3]}
                            checked={selections[index] === 4}
                            onChange={() => handleChange(4, index)}
                          />                         
                        </label>
                      
                        <label>
                        <h5>All of the time</h5>
                          <input
                            type="radio"
                            name="choice"
                            value={item.choices[4]}
                            checked={selections[index] === 5}
                            onChange={() => handleChange(5, index)}
                          />                        
                        </label>
                      </div>
                    </form>
                </>
              );
            })}
          </ol>
          <div ><h4 style={{color:"red"}}><strong>{warning}</strong></h4></div>
          <div className="button_container">
            <button className="btn mb-5" style={{background: "#6486DD"}}onClick={submitHandler}>
              <span style={{color: "#fff"}}>Submit</span>
            </button>
          </div>
          </div>
          )}

        </div>
      );
}

export default Questionnaire