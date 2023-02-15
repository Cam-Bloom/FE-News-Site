import { Swiper, SwiperSlide, } from "swiper/react";
import "./HomeTopArticleCard.css"

const HomeTopArticleCard = ({article}) => {

	const { title, topic, author, article_img_url, article_id } = article;

  return (
    <div className="TopArticleCard">
        <img src={article_img_url} className='TopArticleImg'></img>
        <h2 className="TopArticleCardTitle">{title}</h2>
    </div>
  )
}

export default HomeTopArticleCard