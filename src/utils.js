import axios from "axios";

export const newsApi = axios.create({
	baseURL: `https://cb-news-api.onrender.com/api`,
});

export const fetchArticles = (searchQueries) => {
console.log(searchQueries)

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
