import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiSend } from "react-icons/fi";
import { fetchCommentsById } from "../../utils";
import CommentCard from "../CommentCard/CommentCard";
import { postComment } from "../../utils";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import "./CommentsSection.css";

const CommentsSection = ({ loading, error }) => {
	const { article_id } = useParams();
	const { userDetails } = useContext(UserContext);
	const { username } = userDetails;
	const navigate = useNavigate()
	const [comments, setComments] = useState([]);
	const [writeComment, setWriteComment] = useState("");
	const [err, setErr] = useState(null);
	const [commentClassList, setCommentClassList] = useState(["postcomment"]);
	const [logInAttempted, setLogInAttempted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLogInAttempted(true);

		if (!username) {
			setCommentClassList(["postcomment", "invalid"]);
		} else if (writeComment.length === 0) {
			setCommentClassList(["postcomment", "invalid"]);
		} else {
			setCommentClassList(["postcomment"]);
			setErr(null);
			setWriteComment("");
			setComments((currentComments) => [
				{ body: writeComment, author: username },
				...currentComments,
			]);

			postComment(article_id, writeComment, username)
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
		fetchCommentsById(article_id)
			.then((res) => setComments(res.comments))
			.catch((err) => console.log(err));
	}, [article_id]);

	return loading || error ? (
		""
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
			{!username && logInAttempted && (
				<div className="LoginAttempt">
					<p className="LoginAttemptText">Please login to post comments</p>
					<div
						className="ToLoginButton"
						onClick={() => {
							navigate("/login");
						}}
					>
						<h2>Login</h2>
						<FaArrowCircleRight />
					</div>
				</div>
			)}

			{comments.map((comment) => (
				<CommentCard key={comment.comment_id} setComments={setComments} comment={comment} />
			))}
		</section>
	);
};

export default CommentsSection;
