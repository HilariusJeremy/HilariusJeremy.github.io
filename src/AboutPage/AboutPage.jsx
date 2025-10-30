import './AboutPage.css'
import NavBar from '../NavBar/NavBar'
import about_photo from '../assets/about_photo.jpg'
import { useEffect } from 'react'

const AboutPage = () => {
    useEffect(() => {
        document.title = 'About'
    })

    return (
        <div className='about'>
            <NavBar />
            
            <img 
                src={about_photo} 
                alt="My Portrait" 
                className='about-photo'
            />
            <div className='about-name'>
                <h1 className='about-name-english'>Hilarius Jeremy Immanuel Litano</h1>
                <h1 className='about-name-chinese'>陈福明</h1>
            </div>

            <div className='about-content'>
                <p>
                    Hi, I'm Jeremy. Lots of people call me Hilarius (that's actually my real name!). 
                    I'm in my final year studying Computer Science at NTU Singapore.
                </p>

                <p>
                    This page is my little digital sanctuary, a place where I document my journey, thoughts, 
                    and experiences. I like to think of it as a time capsule I can always revisit.
                </p>
                <p>
                    I'm interested in MANY things, but currently I'm juggling my interests in AI, 
                    Software Engineering, History, and Christianity. On weekends, you'll probably find me 
                    drinking at a café somewhere in Singapore after church.
                </p>

            </div>
            
        </div>
    )
}

export default AboutPage