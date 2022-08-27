import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link} from 'react-router-dom';
import { getLogoImageSrc } from '../../services/api.service';
import './Header.css';


const Header = () => {
  const logo = getLogoImageSrc();
  const navs = [
    {path:"/browse",title:"דף הבית"},
    {path:"/browse/movies",title:"סרטים"},
    {path:"/browse/searies",title:"סדרות"},
    {path:"/browse/watch-list",title:"הרשימה שלי"}
  ]
  
  return (
    <Navbar  variant='dark' expand="lg">
      <Container>
      <Link to={'/browse'}><img className='header-img' src={logo} alt="Netflicht Logo"/></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {navs.map((n,i) => <Link key={i} className='header-nav px-3' to={n.path}>{n.title}</Link>)}
        </Nav>
      </Navbar.Collapse>
      </Container>
  </Navbar>
  )
}

export default Header