import { Container } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './footer.css'


const Footer = () => {
    const navs = [
        {path:"/browse",title:"דף הבית"},
        {path:"/browse/movies",title:"סרטים"},
        {path:"/browse/searies",title:"סדרות"},
        {path:"/browse/watch-list",title:"הרשימה שלי"}
      ]
  return (
    <Container className='pt-5'>
    <footer className="d-flex flex-wrap bg-black justify-content-between align-items-center  py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted">© 2022 Amit Licht</p>
        <ul className="nav col-md-4 justify-content-end">
            {navs.map((r,i) => 
            <li className="nav-item" key={i}>
                <Link 
                    to={r.path} 
                    className="nav-link px-2 text-muted">{r.title}
                </ Link>
            </li>)}
        </ul>
    </footer>
    </Container>
  )
}

export default Footer