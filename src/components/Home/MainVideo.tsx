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
    <div style={{height:'90vh'}}>
      <div className="d-flex" style={{
        backgroundImage: `url(${props.content.img})`,
        backgroundRepeat: 'no-repeat', width:"100%",height:'100%',
        backgroundSize:'cover',backgroundPosition:'center'}}>
        <div className="pb-3 px-5 mx-3 align-self-center" style={{color:"black",
      backgroundColor:"rgba(245, 245, 220, 0.4)"}}>
          <span className="fw-bold">{props.content.type==="movie"?'סרט':'סדרה'}</span>
          <h1 style={{fontSize:"60px"}}>{props.content.name}</h1>
          <Link to={`/watch/${props.content.name.replaceAll(' ','')}`}>
            <Button variant="white" className="bg-white text-dark ms-4" 
            onClick={()=>props.setVideo(props.content.trailer)}>
              <i className="bi bi-play-fill">הפעל</i>
            </Button></Link>
          <Button variant="dark"><i className="bi bi-info-circle"> מידע נוסף</i></Button>
        </div>
      </div>
    </div>
  )
}

export default MainVideo