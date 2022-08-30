import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Movies from './pages/Movies/Movies'
import Searies from './pages/Searies/Searies'
import SignIn from './pages/Sign-in/SignIn'
import MyWatchList from './pages/my-watch-list/MyWatchList'
import './App.css';
import StoreServise from './services/StoreService'
import DisplayVideo from './pages/display-video/DisplayVideo'
import Footer from './components/footer/Footer'
import ErrorPage from './pages/error/ErrorPage'

function App() {

  return (
    <StoreServise children={ 
      <div className='bg-black my-0 mx-0 app'>
      <Routes>
          <Route path='/' element={< SignIn/>}/>
          <Route path='/browse' element={< Home />}/>
          <Route path='/browse/movies' element={< Movies />}/>
          <Route path='/browse/searies' element={< Searies/>}/>
          <Route path='/browse/watch-list' element={< MyWatchList/>}/>
          <Route path='/browse/watch/:movieId' element={< DisplayVideo />}/>
          <Route path='/*' element={< ErrorPage />}/>
      </Routes>
      <Footer />
      </div>
    } />
  );
}

export default App;
