import { NavLink } from 'react-router-dom';
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {
    return(
    <div className='navbar'>

        <p>[<NavLink to="/" className={({ isActive }) => isActive ? 'active' : '' }>home</NavLink>]</p>
        <p>[<NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : '' }>blog</NavLink>]</p>
        <p>[<NavLink to="/project" className={({ isActive }) => isActive ? 'active' : '' }>project</NavLink>]</p>
        <p>[<NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : '' }>experience</NavLink>]</p>
        <p>[<NavLink to="/about" className={({ isActive }) => isActive ? 'active' : '' }>about</NavLink>]</p>

        <div className='links'>
            <a href="https://www.linkedin.com/in/hilariusjeremy/" target='blank'>
                                    <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '35px' }} />
            </a>
            <a href="https://github.com/HilariusJeremy" target='blank'>
                                    <FontAwesomeIcon icon={faGithub} style={{ fontSize: '35px' }}/>
            </a>
        </div>
    </div>
            )
}

export default NavBar