import TopicArticleContainer from "../TopicArticleContainer/TopicArticleContainer";
import TopicSelect from "../TopicSelect/TopicSelect";
import Header from "../Header/Header";
import "./TopicPage.css";

const TopicPage = () => {
	return (
		<div>
			<Header />
			<div className="topicPage">
				<TopicSelect />
				<TopicArticleContainer />
			</div>
		</div>
	);
};

export default TopicPage;
