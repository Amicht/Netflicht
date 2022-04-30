import { userProfile } from "../../interface/UserProfile"

const UserProfile = (props:userProfile) => {
  return (
    <div className="user-profile col">
        <div>
            <img src={props.img} alt={'profile'}></img>
        </div>
        <div>{props.name}</div>
    </div>
  )
}

export default UserProfile