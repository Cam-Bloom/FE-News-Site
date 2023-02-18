import axios from "axios";

export const newsApi = axios.create({
	baseURL: `https://cb-news-api.onrender.com/api`,
});

export const fetchArticles = (searchQueries) => {
	return newsApi
		.get("/articles", {
			params: {
				limit: searchQueries.limit,
				sort_by: searchQueries.sort_by,
				order: searchQueries.order,
				topic: searchQueries.topic,
			},
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
		});
};

export const patchArticleVotes = (article_id) => {
	return newsApi.patch(`/articles/${article_id}`, { inc_votes: 1 }).then((data) => {
		return data;
	});
};

export const fetchTopics = () => {
	return newsApi
		.get(`/topics`)
		.then(({ data }) => {
			return data;
		})
		.catch((err) => {
			console.log(err);
		});
};

// /api/comments/:comment_id

export const deleteComment = (comment_id) => {
	return newsApi
		.delete(`/comments/${comment_id}`)
		.catch((err) => {
			console.log(err);
		});
};

export const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

export const formatTopicArr = (arr, topic) => {
	const arrCopy = [...arr]

	const index = arr.findIndex((topicObj) => topic === topicObj.slug)
	const selectedTopic = arrCopy.splice(index, 1)

	const newArr = [...selectedTopic, ...arrCopy]

	return newArr;
  }

  export const fetchUserByUserId = (username) => {
	return newsApi
		.get(`/users/${username}`)
		.then( data  => {
			return data;
		})
};