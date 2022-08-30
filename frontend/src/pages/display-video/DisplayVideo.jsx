import { useEffect, useState, useContext } from "react";
import { StoreCtxt } from "../../services/StoreService"
import Header from '../../components/Header/Header'
const DisplayVideo = () => {
    const { loggedGuard } = useContext(StoreCtxt).actions;
    const { currentMovie } = useContext(StoreCtxt).states;
    const [windowSize, setWindowSize] = useState(window);
    
    useEffect(() => {
        window.scrollTo(0,0);
        loggedGuard();
        window.addEventListener('resize',() => setWindowSize(window));
        return () => window.removeEventListener('resize', () => setWindowSize(window));
    },[])
  return (
    <>
    <Header isHomePage={false}/>
    <div className="display-movie mx-auto py-5">
        {currentMovie? <iframe 
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            autoPlay
            width={windowSize.innerWidth / 2 }
            height={windowSize.innerHeight / 2 } 
            allowFullScreen
            src={currentMovie?.trailer || null}>
        </iframe>:null}
    </div>
    </>
  )
}

export default DisplayVideo