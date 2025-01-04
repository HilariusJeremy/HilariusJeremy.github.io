import './ContainerRight.css';
import { NavLink } from 'react-router-dom';

const ContainerRight = () => {
    return (
        <div className="buttons">
            <p>[<NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>home</NavLink>]</p>
            <p>[<NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>blog</NavLink>]</p>
            <p>[<NavLink to="/project" className={({ isActive }) => isActive ? 'active' : ''}>project</NavLink>]</p>
            <p>[<NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''}>experience</NavLink>]</p>
            <p>[<NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>about</NavLink>]</p>
        </div>
    );
};

export default ContainerRight;