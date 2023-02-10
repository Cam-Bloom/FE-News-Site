import { useEffect, useState } from "react";
import { fetchArticles } from "../../utils";
import SmallArticleCard from "../SmallArticleCard/SmallArticleCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

import "./HomeArticleContainer.css";

const HomeArtCont = ({ searchQueries, setSearchQueries }) => {
	const [articlesFromApi, setArticlesFromApi] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetchArticles(searchQueries).then((data) => {
			setArticlesFromApi(data.articles);
			setLoading(false);
		});
	}, [searchQueries]);

	const showAllArticles = () => {
		setSearchQueries((currentSearchQueries) => {
			const newSearchQueries = { ...currentSearchQueries };
			delete newSearchQueries.limit;
			newSearchQueries.limit = 1000;
			return newSearchQueries;
		});
	};

	return loading ? (
		<LoadingSpinner />
	) : (
		<section className="homeContainer">
			<ul className="homeArticleList">
				{articlesFromApi.map((article) => (
					<SmallArticleCard key={article.article_id} article={article} />
				))}
			</ul>
			<button onClick={showAllArticles}>Show More</button>
		</section>
	);
};

export default HomeArtCont;
