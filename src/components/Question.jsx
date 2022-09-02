import { useState } from "react"
import Likedpost from "./Likepost"


let Question = function (props) {
const [showAnswer, setShowAnswer] = useState(false)
const [liked, setLiked] = useState(false)

let show = function () {
  setShowAnswer(!showAnswer)  
}

let changeLiked = () => {
  setLiked(!liked)
}
  return ( 
    <div className="question"> 
      <h2>{props.FAQ.question}</h2>
      <h3 className={!showAnswer && "hidden"}>{props.FAQ.answer}</h3>
      <button onClick={() => {show()}}>{showAnswer ? "Dölj svar" : "Visa svar"}</button>
      
      <div className={!showAnswer && "hidden"}>
      <button onClick={() => {changeLiked()}} className={liked && "hidden"} >Gilla svaret</button>
      <Likedpost show={showAnswer} liked={liked}/>
      </div>
    </div>
  )
}

export default Question; 