import { useContext } from "react"
import { listContext } from "../App"
import CradCarouselle from "./CradCarouselle/CradCarouselle"
import HeaderNavs from "./Home/Header/HeaderNavs"

const MyList = (props:{changeUser:any; setVideo:any}) => {
    const userList:any = useContext(listContext);
  return (
    <div>
        <HeaderNavs changeUser={props.changeUser}/>
        <h1>הרשימה שלי</h1><br/>
        {userList.list.filter((m: { type: string} ) => m.type === 'movie')[0]?
        <CradCarouselle title="הסרטים שלי" 
          arr={userList.list.filter((m: { type: string} ) => m.type === 'movie')} 
          setVideo={props.setVideo} />:null}<br />
        {userList.list.filter((m: { type: string} ) => m.type === 'series')[0]?
        <CradCarouselle title="הסדרות שלי" 
          arr={userList.list.filter((m: { type: string} ) => m.type === 'series')} 
          setVideo={props.setVideo} />
        :<h4>No movies on list</h4>}
    </div>
  )
}

export default MyList