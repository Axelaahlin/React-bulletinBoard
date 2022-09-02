
let Liked = function (props) {
  return(
    
    <div className={!props.show && "hidden"}>
    <h3 className={!props.liked && "hidden"}>Du har gillat svaret</h3>
    </div>
  )
}

export default Liked;