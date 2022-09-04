import { Container } from 'react-bootstrap';
import './footer.css'


const Footer = () => {
  
  return (
    <Container className='pt-5 align-self-bottom' >
    <footer className="d-flex flex-wrap bg-black justify-content-between align-items-center  py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted">© 2022 Amit Licht</p>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a href="https://www.linkedin.com/in/amit-licht-212a86239">
              <i className="bi bi-linkedin text-muted"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="https://github.com/Amicht">
              <i className="bi bi-github text-muted"></i>
            </a>
          </li>
          
        </ul>
    </footer>
    </Container>
  )
}

export default Footer