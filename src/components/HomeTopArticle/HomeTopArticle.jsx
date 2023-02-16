import { useEffect, useState, useRef } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { fetchArticles } from "../../utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import HomeTopArticleCard from "../HomeTopArticleCard/HomeTopArticleCard";
import "swiper/css/autoplay";
import "./HomeTopArticle.css";

const HomeTopArticle = () => {
	const [topArticlesFromApi, setTopArticlesFromApi] = useState([]);
	const swiperNavPrevRef = useRef(null);
	const swiperNavNextRef = useRef(null);

	useEffect(() => {
		// setLoading(true);
		fetchArticles({ limit: 5, sort_by: "votes" }).then((data) => {
			setTopArticlesFromApi(data.articles);
			// setLoading(false);
		});
	}, []);

	return (
		<div className="TopArticleSection">
			{/* <h2>Top Articles</h2> */}
			<Swiper
				autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
				navigation={{
					prevEl: swiperNavPrevRef.current,
					nextEl: swiperNavNextRef.current,
				}}
                loop
				modules={[Autoplay, Navigation]}
			>
				{topArticlesFromApi.map((article) => {
					return (
						<SwiperSlide key={article.article_id}>
							<HomeTopArticleCard key={article.article_id} article={article} />
						</SwiperSlide>
					);
				})}
				<div className="swiperNavPrev" ref={swiperNavPrevRef}>
					<FaArrowCircleLeft />
				</div>
				<div className="swiperNavNext" ref={swiperNavNextRef}>
					<FaArrowCircleRight />
				</div>
			</Swiper>
		</div>
	);
};

export default HomeTopArticle;
