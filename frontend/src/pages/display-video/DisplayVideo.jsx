import { useEffect, useState } from "react";
import { useContext } from "react"
import { StoreCtxt } from "../../services/StoreService"

const DisplayVideo = () => {
    const { loggedGuard } = useContext(StoreCtxt).actions;
    const { currentMovie} = useContext(StoreCtxt).states;
    const [windowSize, setWindowSize] = useState(window);
    useEffect(() => {
        window.scrollTo(0,0);
        loggedGuard();
        window.addEventListener('resize',() => setWindowSize(window));
        return () => window.removeEventListener('resize', () => setWindowSize(window));
    },[])
  return (
    <div className="display-movie mx-auto py-5">
        <iframe 
            title={currentMovie.name}
            frameborder="0"
            autoplay
            width={windowSize.innerWidth / 2 }
            height={windowSize.innerHeight / 2 } 
            allowFullScreen
            src={currentMovie.trailer}>
        </iframe>
    </div>
  )
}

export default DisplayVideo