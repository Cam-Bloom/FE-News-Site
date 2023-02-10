import { useEffect, useState } from "react";
import LargeArticleCard from "../LargeArticleCard/LargeArticleCard";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../../utils";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

import "./TopicArticleContainer.css";

const TopicArticleContainer = () => {
	const { topic } = useParams();

	const [topicArticlesApi, setTopicArticlesApi] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null)


	useEffect(() => {
		setLoading(true);
		((topic === "allTopics") ? fetchArticles({}) :fetchArticles({ topic }))
		.then(res => {
			setTopicArticlesApi(res.articles);
			setError(null)
			setLoading(false);
		})
		.catch(err => {
			console.log(err)
			setError({err})
			setLoading(false);
		})
	}, [topic]);

	if (loading) return <LoadingSpinner/>

	if (error) return <p className="topicError">Error: Topic Not Found</p>

	return (
		<ul className="topicContainer">
			{topicArticlesApi.map((article) => (
				<LargeArticleCard key={article.article_id} article={article} />
			))}
		</ul>
	);
};

export default TopicArticleContainer;
