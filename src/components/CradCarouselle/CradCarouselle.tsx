import { Carousel } from "react-bootstrap"
import MovieCard from "./MovieCard"


type caoselleItems={
    title:string;
    arr:any[];
    setVideo:any
}
const CradCarouselle = (props:caoselleItems) => {
    const myMovies = props.arr;
  return (
    <>
        <h5 className="mt-5">{props.title}</h5>
          <Carousel className="movie-caro">
        {myMovies.map((m,i)=> (i+4)%4===0?
        <Carousel.Item interval={30000} key={i}>
          <div className="d-flex">
            <div className="col"/>
              <MovieCard movieData={myMovies[i]} setVideo={props.setVideo}/>
              {myMovies[i+1]?<MovieCard setVideo={props.setVideo} movieData={myMovies[i+1]}/>:<div className="col"/>}
              {myMovies[i+2]?<MovieCard setVideo={props.setVideo} movieData={myMovies[i+2]}/>:<div className="col"/>}
              {myMovies[i+3]?<MovieCard setVideo={props.setVideo} movieData={myMovies[i+3]}/>:<div className="col"/>}
            <div className="col"/>
          </div>
        </Carousel.Item>:null)}
      </Carousel>
    </>
    
  )
}

export default CradCarouselle