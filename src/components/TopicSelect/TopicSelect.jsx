import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { fetchTopics, capitalizeFirstLetter, formatTopicArr } from "../../utils";
import { useNavigate, useParams } from "react-router-dom";
import "swiper/css";
import "./TopicSelect.css";

const TopicSelect = () => {
	const [topicListApi, setTopicListApi] = useState([]);
	const { topic } = useParams();
	const navigate = useNavigate();

	const handleNavigate = (topic) => {
		navigate(`/topics/${topic}`);
	};

	useEffect(() => {

		fetchTopics().then((res) => {
			const topicsArr = res.topics;
			setTopicListApi(() => formatTopicArr(topicsArr, topic));
		});
	}, []);

	return (
		<Swiper
			className="topicSwiper"
			spaceBetween={50}
			slidesPerView={2}
			onSlideChange={() => console.log("slide change")}
			onSwiper={(swiper) => console.log(swiper)}
		>
			{topicListApi.map((mapTopic) => {
				return (
					<SwiperSlide key={mapTopic.slug}>
						<h2
							className={`topicSlide noselect ${mapTopic.slug === topic ? "activeTopic" : ""}`}
							onClick={() => {
								handleNavigate(mapTopic.slug);
							}}
						>
							{capitalizeFirstLetter(mapTopic.slug)}
						</h2>
					</SwiperSlide>
				);
			})}
			<SwiperSlide className="topicSlide noselect" onClick={() => {navigate('/')}}>View All</SwiperSlide>
		</Swiper>
	);
};

export default TopicSelect;
