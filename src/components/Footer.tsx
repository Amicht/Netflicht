import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <Container>
        <footer className="py-3 mt-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <Link to='/Home' className="nav-link px-2 text-muted">דף הבית</Link>
                <Link className="nav-link px-2 text-muted" to='/TVshows'>סדרות טלוויזיה</Link>
                <Link className="nav-link px-2 text-muted" to='/Movies'>סרטים</Link>
                <Link className="nav-link px-2 text-muted" to='/MyList'>הרשימה שלי</Link>
            </ul>
            <p className="text-center text-muted">
            © 2022 Amit Licht, Inc
            </p>
        </footer>
    </Container>
  )
}

export default Footer