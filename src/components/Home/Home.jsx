import { useState } from "react";
import HomeArticleContainer from "../HomeArticleContainer/HomeArticleContainer";
import HomeSortSection from "../HomeSortSection/HomeSortSection";
import TopicSelect from "../TopicSelect/TopicSelect.jsx";

const Home = () => {
	const [searchQueries, setSearchQueries] = useState({
		limit: undefined,
		topic: undefined,
		sort_by: undefined,
		order: undefined,
	});


	return (
		<section>
			<TopicSelect />
			<HomeSortSection setSearchQueries={setSearchQueries} />
			<HomeArticleContainer setSearchQueries={setSearchQueries} searchQueries={searchQueries} />
		</section>
	);
};

export default Home;
