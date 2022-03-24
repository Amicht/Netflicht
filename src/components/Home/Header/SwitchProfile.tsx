import { useContext } from "react"
import { ListGroup } from "react-bootstrap"
import { UserContext, Users } from "../../../interface/UserProfile"
import { icons } from "../../../ts/icons"
import IconProfile from "./IconProfile"

const SwitchProfile=(props:{changeUser:any})=>{
  const myUser = useContext(UserContext);
  return (
      <div className="switch-profile-window">
        <ListGroup>
            <ListGroup.Item className="bg-List border-bottom">
              {Users.filter(u => u.name !== myUser.name)
              .map((u,i)=><div key={i} onClick={()=>props.changeUser(u)}>
             <IconProfile key={i}img={u.img}title={u.name}/></div>)}
                
            </ListGroup.Item>
            <ListGroup.Item className="bg-List border-bottom">
              <IconProfile img={icons.account} title='חשבון'/>
              <IconProfile img={icons.help} title="מרכז העזרה"/>
            </ListGroup.Item>
            <ListGroup.Item className="bg-List">
              <IconProfile img="" title='יציאה מ-Netflicht'/>
            </ListGroup.Item>
        </ListGroup>
      </div>
  )
}

export default SwitchProfile