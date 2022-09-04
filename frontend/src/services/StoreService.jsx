import {createContext, useState} from 'react'
import { useNavigate} from 'react-router-dom'
import { addMovieToWatchList, exitAccount, getMovies, getUserData, getUserFromStorage, getUsers, removeMovieFromWatchList } from './api.service';


export const StoreCtxt = createContext({});

const StoreServise = ({children}) => {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingImg, setloadingImg] = useState("");
  const [currentMovie, setCurrentMovie] = useState({});
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [mainMovie, setMainMovie] = useState({});
  const navigate = useNavigate();

  
  const getAllUsers = () => users.length === 0? getUsers().then(res => setUsers(res)): null;
  
  const get10RandomMovies = movies => {
    const popularMovies = [];
    for(let i = 0; i<10; i++){
        const idx = Math.floor(Math.random() * (movies.length -1));
        popularMovies.push(movies[idx]);
    }
    return popularMovies;
  }
  const loginUser = async (newUser, isHomePage) => {
    if(!newUser) return navigate('/');
    startLoading(newUser.img);
    await getUserData(newUser._id)
      .then(res => setUser(res))
      .then(() => getMovies())
      .then(res => {
        setMovies(res);
        setPopularMovies(get10RandomMovies(res));
        setRecommendedMovies(get10RandomMovies(res));
        setMainMovie(res[Math.floor(Math.random() * (res.length - 1))])
        setTimeout(() => {
          stopLoading();
          if(!isHomePage) navigate('/browse');
        },1000); 
      })
      .catch(() => navigate('/'));
  }
  const logoutUser = () => { setUser({}); setMovies([]); exitAccount(); navigate('/'); }

  const loggedGuard = async (isHomePage) => {
    const userData = getUserFromStorage() || false;
      if(!userData) { return navigate('/') }
      if(!user._id){
        return await loginUser(userData, isHomePage);
      }
  }
  const getMovie = movieId => setCurrentMovie(movies.find(m => m._id === movieId));
  
  // loading component actions
  const startLoading = (img) => {setloadingImg(img); setIsLoading(true);}
  const stopLoading = () => {setloadingImg(""); setIsLoading(false);}

  const handleWatchList = () => {
    if(currentMovie.isInWatchList){
      removeMovieFromWatchList(currentMovie._id)
      .then(() => getMovies())
      .then(res => setMovies(res))
      .then(() => setCurrentMovie({...currentMovie, isInWatchList:false}))
    }
    else{
      addMovieToWatchList(currentMovie._id)
      .then(() => getMovies())
      .then(res => setMovies(res))
      .then(() => setCurrentMovie({...currentMovie, isInWatchList:true}))
    }
  }
  
  const playMovie = (movieId) => {
    getMovie(movieId);
    startLoading(user.img);
    setTimeout(() => {
      stopLoading();
      navigate('/browse/watch/' + movieId);
    }, 1500);
  }

  const actions = {
    loginUser,
    logoutUser,
    getAllUsers,
    loggedGuard,
    getMovie,
    handleWatchList,
    playMovie
  }
  const states = {
    user,
    users,
    movies,
    isLoading,
    loadingImg,
    currentMovie,
    recommendedMovies,
    popularMovies,
    mainMovie
  }

  return (
    <StoreCtxt.Provider value={{actions, states}}>
      {children}
    </StoreCtxt.Provider>
  )
}

export default StoreServise;