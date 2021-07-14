import React,{useState} from 'react'
import "./style.css"

const App =() =>{

    let [score, setScore] = useState(0)
  return(
      <div>
          <h1>Hey this my Counter Application</h1>
          <h1>The value of score is {score}</h1>
          <button onClick={() =>(score>=25)?setScore(0):setScore(score+1)}>Increement</button>
          <button onClick={()=>(score>0)?setScore(score-1):""}>Decreement</button>
          <button onClick={()=>{setScore(0)}}>Reset</button>
      </div>
  )
}

export default App
