import {getUserData, getUsers, getLogoImageSrc}  from '../../services/api.service'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import UserProfile from '../../components/UserProfile.jsx/UserProfile'
import Loading  from '../../components/Loading/Loading';
import SignInNavbar from '../../components/SignInNavbar';


const SignIn = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const logo = getLogoImageSrc();
  const navigate = useNavigate()
  const changeUser = (userId) => {
    setIsLoading(true);
    getUserData(userId).then(() => {
      setTimeout(() => navigate('/browse'), 1000)
    })
  }
  useEffect(() => { getUsers().then(res =>setUsers(res)); }, [])

  return (
    <>
      {isLoading?<Loading />:<><SignInNavbar logo={logo} />
      <h3>מי צופה ב-Netflicht?</h3>
      <div className='row text-center py-5'>
        {users.map((u, i) => <UserProfile key={i} {...u} changeUser={changeUser}/>)}
      </div></>}
    </>
  )
}

export default SignIn