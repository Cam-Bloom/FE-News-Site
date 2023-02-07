import "./SmallArticleCard.css"
import {  useNavigate } from 'react-router-dom';


const SmallArtCard = ({article}) => {

  const {title, topic, author, body, created_at, votes, article_img_url, article_id} = article
  const navigate = useNavigate();
  
  const readArticle = () => {
    navigate(`/article/${article_id}`);
  }
  
  return (
    <li className="smallCard">
      <img className="smallImg" src={article_img_url} alt={`${title} by ${author}`} />

      <div className="info">
        <h3 className="truncate">{title}</h3>
        <div className="subHeadigns">
          <h5>By: {author}</h5>
          <h5>{topic}</h5>
          <button onClick={readArticle} >Read</button>
        </div>
      </div>
    </li>
  )
}

export default SmallArtCard