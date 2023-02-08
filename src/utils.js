import axios from "axios";

export const newsApi = axios.create({
	baseURL: `https://cb-news-api.onrender.com/api`,
});

export const fetchArticles = (searchQueries) => {

	return newsApi
		.get("/articles", {
			params:{
				limit: searchQueries.limit,
				sort_by: searchQueries.sort_by,
				order: searchQueries.order,
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

export const fetchCommentsById = (article_id) => {

	return newsApi
		.get(`/articles/${article_id}/comments`)
		.then(({ data }) => {
			return data;
		})
		.catch((err) => {
			console.log(err);
		});
};

export const postComment = (article_id, commentBody) => {

	return newsApi
		.post(`/articles/${article_id}/comments`, {
			body: commentBody,
			username: "cooljmessy", //hard coded for now useContext loggein user later
		  })
		.then((data) => {
			return data;
		})
};


export const patchArticleVotes = (article_id) => {

	return newsApi
		.patch(`/articles/${article_id}`, { inc_votes: 1 })
		.then((data) => {
			return data;
		})
};
