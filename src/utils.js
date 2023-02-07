import axios from "axios";

export const newsApi = axios.create({
	baseURL: `https://cb-news-api.onrender.com/api`,
});

export const fetchArticles = (searchQueries) => {

	return newsApi
		.get("/articles", {
			params:{
				limit: searchQueries.limit,
			}
		})
		.then(({ data }) => {
			return data;
		})
		.catch((err) => {
			console.log(err);
		});
};

export const fetchArticlesById = (article_id) => {

	return newsApi
		.get(`/articles/${article_id}`)
		.then(({ data }) => {
			return data;
		})
		.catch((err) => {
			console.log(err);
		});
};
