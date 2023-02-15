import { useEffect, useState } from "react";
import { fetchArticles } from "../../utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import HomeTopArticleCard from "../HomeTopArticleCard/HomeTopArticleCard";
import 'swiper/css/autoplay';



const HomeTopArticle = () => {
    const [topArticlesFromApi, setTopArticlesFromApi] = useState([]);
  
    useEffect(() => {
		// setLoading(true);
		fetchArticles({limit:5, sort_by:'votes'}).then((data) => {
			setTopArticlesFromApi(data.articles);
			// setLoading(false);
		});
	}, []);
  
    
  
    return (
    <div>
        {/* <h2>Top Articles</h2> */}
        <Swiper
          autoplay={{delay:4000,pauseOnMouseEnter:true}}
          modules={[Autoplay]}>
            {topArticlesFromApi.map((article) => {
                return (
                    <SwiperSlide key={article.article_id}>
                        <HomeTopArticleCard key={article.article_id} article={article}/>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default HomeTopArticle