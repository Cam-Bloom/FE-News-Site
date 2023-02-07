import { useState } from 'react'
import HomeArticleContainer from '../HomeArticleContainer/HomeArticleContainer'


const Home = () => {
  const [searchQueries, setSearchQueries] = useState({limit: undefined});


  return (
    <section>
        <HomeArticleContainer setSearchQueries={setSearchQueries} searchQueries={searchQueries}/>
    </section>
  )
}

export default Home