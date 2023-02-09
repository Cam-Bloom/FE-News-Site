import { useState } from "react";
import HomeArticleContainer from "../HomeArticleContainer/HomeArticleContainer";
import TopicSelect from "../TopicSelect/TopicSelect.jsx";

const Home = () => {
	const [searchQueries, setSearchQueries] = useState({ limit: undefined });

	return (
    <section>
			<TopicSelect />
			<HomeArticleContainer setSearchQueries={setSearchQueries} searchQueries={searchQueries} />
		</section>
	);
};

export default Home;
