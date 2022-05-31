import CradCarouselle from "./CradCarouselle/CradCarouselle";
import Footer from "./Footer";
import HeaderNavs from "./Home/Header/HeaderNavs"
import MainVideo from "./Home/MainVideo";


type TVitems={
    tvShows:any[];
    setVideo:any;
    changeUser:any;
}
const Movies = (props:TVitems) => {
  return (
    <>
        <HeaderNavs changeUser={props.changeUser}/>
        <MainVideo content={props.tvShows[0]} setVideo={props.setVideo}/>
        <CradCarouselle title="אנימציה" arr={props.tvShows.filter(s=>s.genre==='אנימציה')}
        setVideo={props.setVideo}/>
        <CradCarouselle title="פעולה" arr={props.tvShows.filter(s=>s.genre==='פעולה')}
        setVideo={props.setVideo}/>
        <CradCarouselle title="מתח" arr={props.tvShows.filter(s=>s.genre==='מתח')}
        setVideo={props.setVideo}/>
        <CradCarouselle title="ביוגרפיה" arr={props.tvShows.filter(s=>s.genre==='ביוגרפיה')}
        setVideo={props.setVideo}/>
        <Footer />
    </>
  )
}

export default Movies