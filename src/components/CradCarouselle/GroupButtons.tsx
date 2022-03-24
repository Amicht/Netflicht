import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { listContext } from "../../App";
import CardButton from "./CardButton"

type btnData={
  movieData:{
    [keyof:string]:string;
  }
  setVideo:any;
  movieName:string;
}
const GroupButtons = (props:btnData) => {
  const userList:any = useContext(listContext);
  const [add,setAdd] = useState(userList.list.findIndex((e: { name: string; })=>e.name=== props.movieName)===-1);
  return (
    <div>
      <Link to={'/watch/'+props.movieData.name.replaceAll(' ','')} 
      onClick={()=>props.setVideo(props.movieData.trailer)}>
            <CardButton icon={<i className="bi bi-play-fill" ></i>} 
            backGround="white" color="black"tooltip="הפעל"/>
      </Link>
        {add?<span onClick={()=>{setAdd(!add); userList.setList([...userList.list,props.movieData])}}>
              <CardButton icon={<i className="bi bi-plus-lg"></i>} 
            backGround="black" color="white" tooltip="הוספה לרשימה שלך"/>
            </span>:
            <span onClick={()=>{setAdd(!add); userList.setList(userList.list.filter(
              (m: { name: string; })=>m.name !==props.movieData.name))}}>
            <CardButton icon={<i className="bi bi-dash"></i>} 
            backGround="black" color="white" tooltip="הסרה מהרשימה שלך"/>
            </span>}

            <CardButton icon={<i className="bi bi-hand-thumbs-up"></i>} 
            backGround="black" color="white" tooltip="אהבתי"/>
            <CardButton icon={<i className="bi bi-hand-thumbs-down"></i>} 
            backGround="black" color="white" tooltip="לא בשבילי"/>
            <CardButton icon={<i className="bi bi-chevron-down"></i>} 
            backGround="black" color="white" tooltip="מידע נוסף"/>
    </div>
  )
}

export default GroupButtons