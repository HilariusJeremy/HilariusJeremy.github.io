import './HomePage.css';
import ContainerLeft from '../ContainerLeft/ContainerLeft';
import ContainerRight from '../ContainerRight/ContainerRight';
import home from '../assets/home.gif'
import { useEffect } from 'react';

const HomePage = () => {
    useEffect(() => {
      document.title = 'Home'
    })

    return (
      <div className='homepage'>
      <ContainerLeft />
      <ContainerRight />
      </div>
    )
}

export default HomePage