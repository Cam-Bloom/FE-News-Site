import {GiFlowerEmblem} from 'react-icons/gi'
import {  useNavigate } from 'react-router-dom';

import './Header.css'

const Header = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(`/`);
  }

  return (
    <header className='headershadow ' onClick={goHome}>
      <GiFlowerEmblem className='icon'/>
      <h1>Bloom News</h1>
    </header>
  )
}

export default Header