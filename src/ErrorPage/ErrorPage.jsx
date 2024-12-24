import NavBar from "../NavBar/NavBar"
import './ErrorPage.css'
import festinalente from '../assets/festina-lente.jpg'

const ErrorPage = () => {
    return (
        <div className="error">
            <NavBar />
            <div className="error-header">
                <h1>Halt!</h1>
                <h1>You Shall Proceed No Further</h1>
            </div>
            <div className="error-text">
                <p>The page you are seeking is beyond reach, lost in the abyss of cyberspace.</p>
                <p>Perhaps it never existed, or maybe it wandered off on an epic quest. </p>
                <p>Regardless, it is not here, and you must return to the realm from whence you came.</p>
            </div>
            <img src={festinalente} alt="error-image"/>
            
            
        </div>
    )
}

export default ErrorPage