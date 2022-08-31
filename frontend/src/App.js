import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Movies from './pages/Movies/Movies'
import Searies from './pages/Searies/Searies'
import SignIn from './pages/Sign-in/SignIn'
import MyWatchList from './pages/my-watch-list/MyWatchList'
import './App.css';
import StoreServise from './services/StoreService'
import DisplayVideo from './pages/display-video/DisplayVideo'
import ErrorPage from './pages/error/ErrorPage'
import PageContainer from './components/pageContainer/PageContainer'

function App() {

  return (
    <StoreServise children={ 
      <div className='bg-black my-0 mx-0 app'>
        <Routes>
            <Route path='/' element={< SignIn/>}/>
            <Route path='/browse' element={<PageContainer children={<Home />}/>}/>
            <Route path='/browse/movies' element={<PageContainer children={<Movies />}/>}/>
            <Route path='/browse/searies' element={<PageContainer children={<Searies />}/>}/>
            <Route path='/browse/watch-list' element={<PageContainer children={<MyWatchList />}/>}/>
            <Route path='/browse/watch/:movieId' element={<PageContainer children={<DisplayVideo />}/>}/>
            <Route path='/*' element={<PageContainer children={<ErrorPage />}/>} />
        </Routes>
      </div>
    } />
  );
}

export default App;
