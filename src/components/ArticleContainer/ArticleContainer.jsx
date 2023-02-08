import ArticleBody from '../ArticleBody/ArticleBody'
import CommentsSection from '../CommentsSection/CommentsSection'
import { useState } from 'react'
import './ArticleContainer.css'


const ArticleContainer = () => {

	const [loading, setLoading] = useState(false);

  return (
    <section className='articleContainer'>
        <ArticleBody loading={loading} setLoading={setLoading}/>
        <CommentsSection loading={loading}/>
    </section>
  )
}

export default ArticleContainer