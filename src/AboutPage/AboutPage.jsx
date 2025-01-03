import './AboutPage.css'
import NavBar from '../NavBar/NavBar'
import headshot from '../assets/headshot.png'
import { useEffect } from 'react'

const AboutPage = () => {
    useEffect(() => {
        document.title = 'About'
    })

    return (
        <div className='about'>
            <NavBar />
            
            <img src={headshot} alt="Description of the image"/>
            <h1>Hilarius Jeremy Immanuel Litano</h1>
            <p>Computer Science NTU Singapore</p>
        </div>
    )
}

export default AboutPage