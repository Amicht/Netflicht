import { Card } from "react-bootstrap"
import { Link } from "react-router-dom";
import GroupButtons from "./GroupButtons"

type cardItem={
    movieData:{
      [keyof:string]:string
    }
    setVideo:any;
}

const MovieCard = (props:cardItem) => {
  return (
    <div className="col pb-5">
        <Card className="movie-card">
          <Link to={'/watch/'+props.movieData.name.replaceAll(' ','')}>
            <Card.Img variant="top" src={props.movieData.img} 
            onClick={()=>props.setVideo(props.movieData.trailer)}/>
          </Link>
        <Card.Body className="movie-body">
            <p>{props.movieData.name}</p>
            <GroupButtons movieName={props.movieData.name} setVideo={props.setVideo} movieData={props.movieData}/>
        </Card.Body>
        </Card>
    </div>
  )
}

export default MovieCard