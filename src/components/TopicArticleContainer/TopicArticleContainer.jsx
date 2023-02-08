import { useEffect, useState } from "react";
import LargeArticleCard from "../LargeArticleCard/LargeArticleCard";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../../utils";
import "./TopicArticleContainer.css";

const TopicArticleContainer = () => {
	const { topic } = useParams();

	const [topicArticlesApi, setTopicArticlesApi] = useState([]);

	useEffect(() => {
		fetchArticles({ topic }).then((res) => setTopicArticlesApi(res.articles));
	}, [topic]);

	return (
		<section>
			<ul className="topicContainer">
				{topicArticlesApi.map((article) => (
					<LargeArticleCard key={article.article_id} article={article} />
				))}
			</ul>
		</section>
	);
};

export default TopicArticleContainer;
