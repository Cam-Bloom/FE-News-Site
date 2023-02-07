import {GiFlowerEmblem} from 'react-icons/gi'

import './Header.css'

const Header = () => {
  return (
    <header>
      <GiFlowerEmblem className='icon'/>
      <h1>Bloom News</h1>
    </header>
  )
}

export default Header