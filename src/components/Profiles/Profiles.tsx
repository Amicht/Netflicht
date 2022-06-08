import { Link } from "react-router-dom"
import { Users } from "../../interface/UserProfile"
import HedaerIcon from "./HeaderIcon"
import UserProfile from "./UserProfile"

type userFn={
  changeUser:any
}

const Profiles = (props:userFn) => {
  return (
    <div>
      <HedaerIcon />
      <div className="col-8 mx-auto">
        <h2 className="fs-1">מי צופה ב-Netflicht?</h2>
        <section className="row mt-5 text-center">
            {Users.map((u,i)=><Link key={i} to='/Home' className="col-sm Link"
             onClick={()=>props.changeUser(u)}>
            <UserProfile name={u.name} img={u.img}/></Link>)}
        </section>
      </div>
    </div>
  )
}

export default Profiles