import Navbar from 'react-bootstrap/Navbar';

const SignInNavbar = ({logo}) => {

  return (
    <Navbar>
        <Navbar.Brand>
        <img
            src={logo}
            width="140"
            height="60"
            className="d-inline-block align-top"
            alt="Netflicht logo"
        />
        </Navbar.Brand>
    </Navbar>
  );
}

export default SignInNavbar;