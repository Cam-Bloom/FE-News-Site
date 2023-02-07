import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesById } from "../../utils";
import "./ArticleBody.css";

const ArticleBody = () => {
	const { article_id } = useParams();

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
		<div className="lds-facebook">
			<div></div>
			<div></div>
			<div></div>
		</div>
	) : (
		<section>
			<img className="coverImg" src={article_img_url} alt={`${title} by ${author}`} />
			<h5 className="topicTag">{topic}</h5>
			<h2 className="articleHeader">{title}</h2>
			<div className="subArticleHeader">
				<h5>{author}</h5>
				<h5>{date}</h5>
				<div>like placeholder</div>
			</div>
			<p className="articleBody">{body}</p>
		</section>
	);
};

export default ArticleBody;
