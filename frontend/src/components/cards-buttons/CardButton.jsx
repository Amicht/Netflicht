import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './card-button.css'
import { tooltipTextHandler } from '../MovieModal/modalLogic';


const CardButton = ({type, action, isActive}) => {

  return (
     <OverlayTrigger
     key={"top"}
     placement={"top"}
     overlay={
       <Tooltip id={`tooltip-${"top"}`}>{
          tooltipTextHandler(type, isActive)
        }</Tooltip>
     }
   >
    <div className=' col-2 py-auto' onClick={action}>
        <div role="button" className={isActive? 'card-button active':'card-button'}>
            {type === "הפעל"?<i className="bi bi-play"></i>:null}
            {type === "הוספה לרשימה"?isActive?
            <i className="bi bi-check-lg"></i>:<i className="bi bi-plus-lg"></i>
            :null}
            {type === "מידע נוסף"?<i className="bi bi-info-lg"></i>:null}
            {type === "סגור"?<i className="bi bi-x-lg"></i>:null}
        </div>
    </div>
   </OverlayTrigger>
  )
}

export default CardButton