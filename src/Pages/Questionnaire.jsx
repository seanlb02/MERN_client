import React, {useState} from 'react'


const Questionnaire = () => {
    const questions = [
        {question: "About how often did you feel tired out of no good reason?",
        choices: ["1", "2", "3", "4", "5"]}, 
        {question: "About how often did you feel nervous?",
        choices: ["1", "2", "3", "4", "5"]},
        {question: "About how often did you feel so nervous that nothing could calm you down?",
        choices: ["1", "2", "3", "4", "5"]},
        {question: "About how often did you feel hopeless?",
        choices: ["1", "2", "3", "4", "5"]},
        {question: "About how often did you feel restless?",
        choices: ["1", "2", "3", "4", "5"]},
        {question: "About how often did you feel so restless you could not sit still?",
        choices: ["1", "2", "3", "4", "5"]},
        {question: "About how often did you feel depressed?",
        choices: ["1", "2", "3", "4", "5"]},
        {question: "About how often did you feel that everything was an effort?",
        choices: ["1", "2", "3", "4", "5"]},
        {question: "About how often did you feel so sad that nothing could cheer you up?",
        choices: ["1", "2", "3", "4", "5"]},
        {question: "About how often did you feel worthless?",
        choices: ["1", "2", "3", "4", "5"]}
      ]
      const [showResults, setShowResults] = useState(false);
      // const[finalScore, setFinalScore] = useState("");
      const [selections, setSelections] = useState([Object.keys(questions).map(x => [])]);
      
      let values = Object.values(selections)
      let message = " "
      let score = 0
      values.forEach(val => (score += val))
      
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
        console.log(selections);
        // console.log(score)
        event.preventDefault();
        setShowResults(true)
      
        // setFinalScore(score)
        // console.log(finalScore)
 

      };
      const handleChange = (selection, index) => {
        let tempState = {...selections}
        tempState[index] = selection
        setSelections(tempState);
      };
    
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
                  
                    <h3>{item.question}</h3>
                    <form className="choices">
                      <div>
                        <label>
                          <input
                            type="radio"
                            name="choice"
                            value={item.choices[0]}
                            checked={selections[index] === 1}
                            onChange={() => handleChange(1, index)}
                          />
                          <span>None of the time</span>
                        </label>
                      
                        <label>
                          <input
                            type="radio"
                            name="choice"
                            value={item.choices[1]}
                            checked={selections[index] === 2}
                            onChange={() => handleChange(2, index)}
                          />
                          <span>A little of the time</span>
                        </label>
                      
                        <label>
                          <input
                            type="radio"
                            name="choice"
                            value={item.choices[2]}
                            checked={selections[index] === 3}
                            onChange={() => handleChange(3, index)}
                          />
                          <span>Some of the time</span>
                        </label>
                      
                        <label>
                          <input
                            type="radio"
                            name="choice"
                            value={item.choices[3]}
                            checked={selections[index] === 4}
                            onChange={() => handleChange(4, index)}
                          />
                          <span>Most of the time</span>
                        </label>
                      
                        <label>
                          <input
                            type="radio"
                            name="choice"
                            value={item.choices[4]}
                            checked={selections[index] === 5}
                            onChange={() => handleChange(5, index)}
                          />
                          <span>All of the time</span>
                        </label>
                      </div>
                    </form>
                </>
              );
            })}
          </ol>
          <div className="button_container">
            <button className="btn" onClick={submitHandler}>
              <span>Submit</span>
            </button>
          </div>
          </div>
          )}
    
        </div>
      );
}

export default Questionnaire