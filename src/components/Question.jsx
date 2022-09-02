import { useState } from "react"
import Likedpost from "./Likepost"


let Question = function (props) {
const [showAnswer, setShowAnswer] = useState(false)

let show = function () {
  setShowAnswer(!showAnswer)  

}
  return ( 
    <div className="question"> 
      <h2>{props.FAQ.question}</h2>
      <h3 className={!showAnswer && "hidden"}>{props.FAQ.answer}</h3>
      <button onClick={() => {show()}}>{showAnswer ? "Dölj svar" : "Visa svar"}</button>
      <Likedpost show={showAnswer}/>
    </div>
  )
}

export default Question; 