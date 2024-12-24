import './ContainerLeft.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import home from '../assets/home.gif'

const ContainerLeft = () => {
    return (
      <div className='container'>
        <img src={home} alt="home-image"/> 
        <h1>Hilarius Jeremy</h1> 

        <div className='text'>
            <p>natural language native.</p>
            <p>root admin of state-of-the-art natural supercomputer. </p>
            <p>i command the machine and it echoes my will.</p>
        </div>

        <div className='links-home'>
            <div className='social'>
                <a href="https://www.linkedin.com/in/hilariusjeremy/" target='blank'>
                    <FontAwesomeIcon icon={faLinkedin} />   LinkedIn
                </a>
            </div>
            <div className='social'>
                <a href="https://github.com/HilariusJeremy" target='blank'>
                    <FontAwesomeIcon icon={faGithub} />  GitHub 
                </a>
            </div>
        </div>
        
      </div>
    )
  }

export default ContainerLeft