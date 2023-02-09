import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FiSend } from "react-icons/fi";
import { fetchCommentsById } from "../../utils";
import CommentCard from "../CommentCard/CommentCard";
import { postComment } from "../../utils";
import "./CommentsSection.css";

const CommentsSection = ({ loading }) => {
	const { article_id } = useParams();

	const [comments, setComments] = useState([]);
	const [writeComment, setWriteComment] = useState("");
	const [err, setErr] = useState(null);
	const [commentClassList, setCommentClassList] = useState(["postcomment"]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (writeComment.length === 0) {
			setCommentClassList(["postcomment", "invalid"]);
		} else {
			setCommentClassList(["postcomment"]);
			setErr(null);
			setWriteComment("");
			setComments((currentComments) => [
				{ body: writeComment, author: "cooljmessy" },
				...currentComments,
			]);

			postComment(article_id, writeComment)
				.then(() => fetchCommentsById(article_id).then((res) => setComments(res.comments)))
				.catch((err) => {
					setComments((currentComments) => {
						const newComments = [...currentComments];
						newComments.shift();
						return newComments;
					});

					setErr("Something went wrong, please try again.");
				});
		}
	};

	useEffect(() => {
		fetchCommentsById(article_id).then((res) => setComments(res.comments));
	}, [article_id]);

	return loading ? (
		<></>
	) : (
		<section className="commentSection">
			<h2>Comments</h2>

			<form className={commentClassList.join(" ")} onSubmit={handleSubmit}>
				<label htmlFor="comment">Write Comment</label>
				<input
					type="text"
					id="comment"
					value={writeComment}
					onChange={(e) => {
						setWriteComment(e.target.value);
						e.target.value.length === 0
							? setCommentClassList(["postcomment"])
							: setCommentClassList(["activeInput", "postcomment"]);
					}}
				/>
				<button className="commentButton">
					<FiSend />
				</button>
			</form>

			{err ? <p>{err}</p> : null}

			{comments.map((comment) => (
				<CommentCard key={comment.comment_id} setComments={setComments} comment={comment} />
			))}
		</section>
	);
};

export default CommentsSection;
