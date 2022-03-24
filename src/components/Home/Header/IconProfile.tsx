type profile={
    img:string;
    title:string;
  }
const IconProfile = (props:profile) => {
  return (
    <div className="d-flex mb-2 bg-profile">
        <img className="nav-icon" src={props.img}/>
        <span className="profile-choice">{props.title}</span>
    </div>
  )
}

export default IconProfile