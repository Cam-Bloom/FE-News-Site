import { logDOM } from "@testing-library/react"
import { useEffect, useState } from "react"
import { fetchArticles } from "../../utils"
import SmallArtCard from "../SmallArticleCard/SmallArticleCard"
import "./HomeArtCont.css"


const HomeArtCont = ({searchQueries, setSearchQueries}) => {
  
  const [articlesFromApi, setArticlesFromApi] = useState([])

  useEffect(() => {
    fetchArticles(searchQueries)
    .then(data => {
      setArticlesFromApi(data.articles)
    })
  }, [searchQueries])

  const showAllArticles = () => {
    setSearchQueries(currentSearchQueries => {
      const newSearchQueries = {...currentSearchQueries}
      delete newSearchQueries.limit
      newSearchQueries.limit = 1000;
      return newSearchQueries
    })
  }
  

  return (
    <section className="container">
      <ul>
        {articlesFromApi.map(article => <SmallArtCard key={article.article_id} article={article} />)}
      </ul>
      <button onClick={showAllArticles}>Show More</button>
    </section>
  )
}

export default HomeArtCont