import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Movies from './pages/Movies/Movies'
import Searies from './pages/Searies/Searies'
import SignIn from './pages/Sign-in/SignIn'
import MyWatchList from './pages/my-watch-list/MyWatchList'
import './App.css';

function App() {
  return (
      <Routes>
          <Route path='/' element={< SignIn/>}/>
          <Route path='/browse' element={< Home />}/>
          <Route path='/browse/movies' element={< Movies />}/>
          <Route path='/browse/searies' element={< Searies/>}/>
          <Route path='/browse/watch-list' element={< MyWatchList/>}/>
      </Routes>
  );
}

export default App;
