import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchArticlesById } from "../../utils";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import LikeButton from "../LikeButton/LikeButton";
import "./ArticleBody.css";

const ArticleBody = () => {
	const { article_id } = useParams();
	const navigate = useNavigate();

	const [article, setArticle] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetchArticlesById(article_id).then((res) => {
			setArticle(res.article);
			setLoading(false);
		});
	}, []);

	const { title, topic, author, body, created_at, votes, article_img_url } = article;

	const date = created_at?.slice(0, 10).split("-").reverse().join("-");

	return loading ? (
		<LoadingSpinner/>
	) : (
		<section>
			<img className="coverImg" src={article_img_url} alt={`${title} by ${author}`} />
			<h5 className="topicTag" onClick={() => {navigate(`/topics/${topic}`)}} >{topic}</h5>
			<h2 className="articleHeader">{title}</h2>
			<div className="subArticleHeader">
				<h5>{author}</h5>
				<h5>{date}</h5>
				<LikeButton votes={votes}/>
			</div>
			<p className="articleBody">{body}</p>
		</section>
	);
};

export default ArticleBody;
