import Navbar from 'react-bootstrap/Navbar';

const SignInNavbar = ({logo}) => {

  return (
    <Navbar>
        <Navbar.Brand href="#home">
        <img
            src={logo}
            width="200"
            height="100"
            className="d-inline-block align-top"
            alt="Netflicht logo"
        />
        </Navbar.Brand>
    </Navbar>
  );
}

export default SignInNavbar;