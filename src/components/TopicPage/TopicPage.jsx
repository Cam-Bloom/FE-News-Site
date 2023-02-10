import TopicArticleContainer from '../TopicArticleContainer/TopicArticleContainer'
import TopicSelect from '../TopicSelect/TopicSelect'
import './TopicPage.css'

const TopicPage = () => {
  return (
    <div className='topicPage'>
      <TopicSelect/>
      <TopicArticleContainer/>
    </div>
  )
}

export default TopicPage