
type video={
    trailer:string
}

const PlayVideo = (props:video) =>{
  return (
        <iframe src={props.trailer} style={{width:"95vw",height:"95vh"}}>
        </iframe>
  )
}

export default PlayVideo