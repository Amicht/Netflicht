import { useContext } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import { UserContext } from "../../../interface/UserProfile"
import HeaderIcon from "../../Profiles/HeaderIcon"
import SwitchProfile from "./SwitchProfile"


const HeaderNavs = (props:{changeUser:any}) => {
  const myUser = useContext(UserContext);
  return (
    <Navbar variant="dark" className="sticky-top wide-header">
      <Container className="nav-header">
        <Navbar.Brand href="#"><HeaderIcon /></Navbar.Brand>
            <Link to='/Home' className="link-title">דף הבית</Link>
            <Link to='/TVshows' className="link-title">תוכניות טלוויזיה</Link>
            <Link to='/Movies' className="link-title">סרטים</Link>
          <Nav.Link href="" className="text-white">חדשים ופופולריים</Nav.Link>
          <Link to='/MyList' className="link-title">הרשימה שלי</Link>
          <Nav className="me-auto display-list">
            <img className="nav-icon" src={myUser.img}></img>
            <SwitchProfile changeUser={props.changeUser}/>
          </Nav>
      </Container>
    </Navbar>
  )
}

export default HeaderNavs