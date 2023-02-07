import ArticleBody from '../ArticleBody/ArticleBody'
import CommentsSection from '../CommentsSection/CommentsSection'
import './ArticleContainer.css'


const ArticleContainer = () => {
  return (
    <section className='articleContainer'>
        <ArticleBody/>
        <CommentsSection/>
    </section>
  )
}

export default ArticleContainer