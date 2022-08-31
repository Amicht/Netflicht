import { useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link} from 'react-router-dom';
import {  getLogoImageSrc } from '../../services/api.service';
import { StoreCtxt } from '../../services/StoreService';
import ProfileSettings from '../header-profile-settings/ProfileSettings';
import './Header.css';


const Header = ({isHomePage}) => {
    const { user, users } = useContext(StoreCtxt).states;
    const {loginUser, getAllUsers, logoutUser } = useContext(StoreCtxt).actions;
    const logo = getLogoImageSrc();
    const navs = [
      {path:"/browse",title:"דף הבית"},
      {path:"/browse/movies",title:"סרטים"},
      {path:"/browse/searies",title:"סדרות"},
      {path:"/browse/watch-list",title:"הרשימה שלי"}
    ]

    useEffect(() => { getAllUsers(); },[]);
  
  return (
    <>
    <Navbar className='header sticky-top'  variant='dark' expand="lg">
      <Container>
      <Link to={'/browse'}>
        <img 
        className='header-img' 
        src={logo} 
        alt="Netflicht Logo"/>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {navs.map((n,i) => <Link key={i} className='header-nav px-3' to={n.path}>{n.title}</Link>)}
        </Nav>
      </Navbar.Collapse>
      <Nav className="me-auto display-list">
            <img className="nav-icon" alt={user.name + ' img'} src={user.img}></img>
            <ProfileSettings
              isHomePage={isHomePage}
              currentUser={user} 
              users={users}
              exitNetflicht={logoutUser} 
              changeUser={loginUser}/>
      </Nav>
      </Container>
  </Navbar>
  </>
  )
}

export default Header