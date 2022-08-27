import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getMovies } from '../../services/api.service'
import Header from '../../components/Header/Header'

const Home = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then(res => setMovies(res)).catch(() => navigate('/'))
  })
  return (
    <>
      <Header />
    </>
  )
}

export default Home