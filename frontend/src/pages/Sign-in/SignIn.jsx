import { getLogoImageSrc, getUserFromStorage}  from '../../services/api.service';
import { useEffect, useContext } from 'react';
import UserProfile from '../../components/UserProfile.jsx/UserProfile'
import Loading  from '../../components/Loading/Loading';
import SignInNavbar from '../../components/SignInNavbar';
import { StoreCtxt } from '../../services/StoreService';
import './sign-in.css'

const SignIn = () => {
  const { loadingImg, users, isLoading} = useContext(StoreCtxt).states;
  const {loginUser, getAllUsers, loggedGuard } = useContext(StoreCtxt).actions;
  const logo = getLogoImageSrc();
  
  useEffect(() => { 
    if(getUserFromStorage()){
      loggedGuard(false);
    }
    getAllUsers(); 
    window.scrollTo(0,0)});

  return (
    <>
      {isLoading?<Loading />:
      <div className='sign-in'>
        {users.length >0? <SignInNavbar logo={logo} img={loadingImg}/>:null }
        <h1>מי צופה ב-Netflicht?</h1>
        <div className='col-sm-8 py-5 mx-auto'>

        <div className='row'>
          {users.map((u, i) => <UserProfile key={i} {...u} changeUser={loginUser}/>)}
        </div></div>
      </div>}
    </>
  )
}

export default SignIn