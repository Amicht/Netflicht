import { OverlayTrigger, Tooltip } from "react-bootstrap"

type cardItem={
    icon:any,
    color:string,
    backGround:string,
    tooltip:string
}
const CardButton = (props:cardItem) => {
  return (
    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{props.tooltip}</Tooltip>}>
        <span className="d-inline-block">
        <button style={{pointerEvents: 'none',borderRadius:"50%",border:"1px solid "+ props.color ,
        color:props.color, backgroundColor:props.backGround}}>{props.icon}</button>
        </span>
  </OverlayTrigger>
  )
}

export default CardButton