import { useNavigate } from "react-router-dom";
import "./LargeArticleCard.css";
import { FaArrowCircleRight } from "react-icons/fa";

const LargeArticleCard = ({ article }) => {
	const { title, topic, author, body, created_at, votes, article_img_url, article_id } = article;
	const navigate = useNavigate();

	return (
		<li className="largeCard">
			<img className="largeImg" src={article_img_url} alt={`${title} by ${author}`} />
			<div className="largeCardInfo">
				<h3 className="truncate largeCardTitle">{title}</h3>
				<div className="subHeadigns">
					<h5>{author}</h5>
					<h5 className="clickOn" onClick={() => {navigate(`/topics/${topic}`)}}>{topic}</h5>
				</div>
				<p className="truncateBody largeCardBody">{body}</p>
				<div className="readMore" onClick={() => {navigate(`/article/${article_id}`)}}>
					<p>Read more</p>
					<FaArrowCircleRight className="readArrow" />
				</div>
			</div>
		</li>
	);
};

export default LargeArticleCard;
