
type video={
    trailer:string
}

const PlayVideo = (props:video) =>{
  return (
        <iframe title={props.trailer} src={props.trailer} style={{width:"95vw",height:"95vh"}}>
        </iframe>
  )
}

export default PlayVideo