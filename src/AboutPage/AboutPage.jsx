import './AboutPage.css'
import NavBar from '../NavBar/NavBar'

const AboutPage = () => {
    return (
        <div className='about'>
            <NavBar />
            
            <img src="src\assets\headshot.png" alt="Description of the image"/>
            <h1>Hilarius Jeremy Immanuel Litano</h1>
            <p>Computer Science NTU Singapore</p>
        </div>
    )
}

export default AboutPage