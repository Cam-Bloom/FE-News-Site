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

	useEffect(() => {
		setLoading(true);
		fetchArticles({ topic }).then((res) => {
			setTopicArticlesApi(res.articles);
			setLoading(false);
		});
	}, [topic]);

	return loading ? (
		<LoadingSpinner />
	) : (
		<ul className="topicContainer">
			{topicArticlesApi.map((article) => (
				<LargeArticleCard key={article.article_id} article={article} />
			))}
		</ul>
	);
};

export default TopicArticleContainer;
