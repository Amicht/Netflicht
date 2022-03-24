import CradCarouselle from "./CradCarouselle/CradCarouselle";
import HeaderNavs from "./Home/Header/HeaderNavs";
import MainVideo from "./Home/MainVideo"

type TVitems={
    tvShows:any[];
    setVideo:any;
    changeUser:any;
}
const TVshows = (props:TVitems) => {
  return (
    <>
        <HeaderNavs changeUser={props.changeUser}/>
        <MainVideo content={props.tvShows[0]} setVideo={props.setVideo}/>
        <CradCarouselle title="קומדיה" arr={props.tvShows.filter(s=>s.genre==='קומדיה')}
        setVideo={props.setVideo}/>
        <CradCarouselle title="דרמה" arr={props.tvShows.filter(s=>s.genre==='דרמה')}
        setVideo={props.setVideo}/>
    </>
  )
}

export default TVshows