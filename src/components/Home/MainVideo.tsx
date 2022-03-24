import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

type MainMovie={
  content:{
    [keyof:string]:string
  },
  setVideo:any;
}
const MainVideo = (props:MainMovie) => {
  
  return (
      <div style={{backgroundColor:"rgba(128, 128, 128, 0.329)"}}>
        <img src={props.content.img} style={{ maxHeight:"90vh",width:"100vw"}}></img>
        <div className="pb-3 px-5" style={{position:"absolute",top:"40%",left:"70%",color:"black",
      backgroundColor:"rgba(245, 245, 220, 0.4)"}}>
          סרט
          <h1 style={{fontSize:"60px"}}>{props.content.name}</h1>
          <Link to={`/watch/${props.content.name.replaceAll(' ','')}`}><Button variant="white" className="bg-white text-dark ms-4" 
          onClick={()=>props.setVideo(props.content.trailer)}>
            <i className="bi bi-play-fill">הפעל</i>
          </Button></Link>
          <Button variant="dark"><i className="bi bi-info-circle"> מידע נוסף</i></Button>
        </div>
      </div>
  )
}

export default MainVideo