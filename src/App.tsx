import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Profiles from './components/Profiles/Profiles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { UserContext, Users } from './interface/UserProfile';
import { createContext, useEffect, useState } from 'react';
import TVshows from './components/TVshows';
import { content } from './ts/movies';
import Movies from './components/Movies';
import PlayVideo from './components/PlayVideo';
import MyList from './components/MyList';
import { KeyObject } from 'crypto';


export const listContext = createContext({});

function App() {
  const [currentUser,changeUser]= useState(Users[0]);
  const [myTrailer,setVideo] = useState<string>(Object.values(content)[0].trailer);
  const [list, setList] = useState([]);
  const [isInList, addToList]= useState({})
  useEffect(()=>{
    const listObj:any={};
    Object.keys(content).forEach(m=>listObj[m]=false);
    addToList(listObj);
  },[]);
  return (
    <UserContext.Provider value={currentUser}>
    <listContext.Provider value={{list,setList}}>
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Profiles changeUser={changeUser}/>}/>
          <Route path='/Home' element={<Home changeUser={changeUser} setVideo={setVideo}/>}/>
          <Route path='/TVshows' element={<TVshows changeUser={changeUser} setVideo={setVideo} tvShows={Object.values(content).filter(s=>s.type==='series')}/>}/>
          <Route path='/Movies' element={<Movies changeUser={changeUser} setVideo={setVideo} tvShows={Object.values(content).filter(s=>s.type==='movie')}/>}/>
          <Route path='/MyList' element={<MyList changeUser={changeUser} setVideo={setVideo}/>}/> 
          <Route path="/watch/:myVideo" element={<PlayVideo trailer={myTrailer}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </listContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
