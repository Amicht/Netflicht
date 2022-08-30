import Navbar from 'react-bootstrap/Navbar';

const SignInNavbar = ({logo}) => {

  return (
    <Navbar>
        <Navbar.Brand>
        <img
            src={logo}
            width="180"
            height="70"
            className="d-inline-block align-top"
            alt="Netflicht logo"
        />
        </Navbar.Brand>
    </Navbar>
  );
}

export default SignInNavbar;