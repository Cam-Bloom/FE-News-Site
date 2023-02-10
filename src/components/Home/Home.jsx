import { useState } from "react";
import HomeArticleContainer from "../HomeArticleContainer/HomeArticleContainer";
import HomeSortSection from "../HomeSortSection/HomeSortSection";
// import TopicSelect from "../TopicSelect/TopicSelect.jsx";
import './Home.css'

const Home = () => {
	const [searchQueries, setSearchQueries] = useState({
		limit: undefined,
		topic: undefined,
		sort_by: undefined,
		order: undefined,
	});


	return (
		<div className="homePage">
			<HomeSortSection setSearchQueries={setSearchQueries} />
			<HomeArticleContainer setSearchQueries={setSearchQueries} searchQueries={searchQueries} />
			{/* <TopicSelect /> */}
		</div>
	);
};

export default Home;
