import Question from "./Question"

let Board = function (props) {
  let data  = props.FAQ
  
  return (
    <main>
      <div className="board">
      <h1>React Bulletin Board</h1>
        {data.map((question) => {
          return(
            <Question FAQ={question}/>
          )
        })
      }
      </div>
    </main>
  )
}

export default Board;