import { useState } from "react";


let Liked = function (props) {
  const [liked, setLiked] = useState(false)
  
  let changeLiked = () => {
    setLiked(!liked)
  }

  return(
    <>
    <div className={!props.show && "hidden"}>
    <button onClick={() => {changeLiked()}} className={liked && "hidden"} >Gilla svaret</button>
    <h3 className={!liked && "hidden"}>Du har gillat svaret</h3>
    </div>
    </>
  )
}

export default Liked;