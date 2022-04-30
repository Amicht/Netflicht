import { useContext } from "react"
import { UserContext } from "../../interface/UserProfile"
import MainVideo from "./MainVideo"
import HeaderNavs from "./Header/HeaderNavs"
import CradCarouselle from "../CradCarouselle/CradCarouselle"
import { content } from "../../ts/movies"

type HomeProp={
  setVideo:any;
  changeUser:any;
}
const Home = (props:HomeProp) => {
    const myUser = useContext(UserContext);
  return (
    <>
        <HeaderNavs changeUser={props.changeUser}/>
        <MainVideo content={Object.values(content)[Object.values(content).length-1]} setVideo={props.setVideo}/>
        <CradCarouselle title={`המומלצים עבור ${myUser.name}`} arr={Object.values(content)}setVideo={props.setVideo}/>
        <CradCarouselle title={`סדרות`} arr={Object.values(content).filter(s=>s.type==="series")}setVideo={props.setVideo}/>
        <CradCarouselle title={`סרטים`} arr={Object.values(content).filter(s=>s.type==="movie")}setVideo={props.setVideo}/>
    </>
  )
}

export default Home