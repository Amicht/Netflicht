import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom";
import IconProfile from "./IconProfile";
import './header-settings.css';

const ProfileSettings = ({exitNetflicht, changeUser, users, currentUser, isHomePage}) => {
    
    return (
    <div className="switch-profile-window">
        <ListGroup>
            <ListGroup.Item className="bg-List border-bottom pt-3">
                {users.filter(u => u.name !== currentUser?.name)
                .map((u,i)=>
                    <div key={i} onClick={()=> changeUser(u, isHomePage)}>
                        <IconProfile key={i}img={u.img}title={u.name}/>
                    </div>)
                }
            </ListGroup.Item>

            <ListGroup.Item className="bg-List">
              <Link to={'/'} onClick={exitNetflicht} >יציאה מ-Netflicht</Link>
            </ListGroup.Item>
            
        </ListGroup>
      </div>
    )
}

export default ProfileSettings