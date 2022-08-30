import { Link } from 'react-router-dom'
import SignInNavbar from '../../components/SignInNavbar'
import {getLogoImageSrc } from '../../services/api.service'
const ErrorPage = () => {
    const logo = getLogoImageSrc()
  return (
    <div className='container'>
        <SignInNavbar logo={logo}/>
        <div className='py-5'>
            <h1 className='text-danger mb-5'>שגיאה 404</h1>
            <p className='mt-3 mb-5'>זה לא אתם, זה אנחנו... <br /> <br />
             אבל זה קצת אתם בכל זאת.</p>
             <Link to={'/'}>חזרה לדף  כניסה</Link>
        </div>
    </div>
  )
}

export default ErrorPage