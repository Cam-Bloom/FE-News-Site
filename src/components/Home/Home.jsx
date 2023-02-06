import { useState } from 'react'
import HomeArtCont from '../HomeArtCont/HomeArtCont'


const Home = () => {
  const [searchQueries, setSearchQueries] = useState({limit: undefined});


  return (
    <section>
        <HomeArtCont setSearchQueries={setSearchQueries} searchQueries={searchQueries}/>
    </section>
  )
}

export default Home