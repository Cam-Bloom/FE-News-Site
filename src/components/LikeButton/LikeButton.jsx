import { useState } from "react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { patchArticleVotes } from "../../utils";
import { useParams } from "react-router-dom";
import "./LikeButton.css";

const LikeButton = ({ votes }) => {
	const { article_id } = useParams();

	const [liked, setLiked] = useState(false);
	const [err, setErr] = useState(null);
	const [displayedVotes, setDisplayedVotes] = useState(votes);

	const handleLike = () => {
		setLiked(true);
		setErr(null);
		setDisplayedVotes((currentDisplayedVotes) => currentDisplayedVotes + 1);

		patchArticleVotes(article_id)
			.then((res) => console.log(res))
			.catch((err) => {
				setLiked(false);
				setDisplayedVotes((currentDisplayedVotes) => currentDisplayedVotes - 1);
				setErr("Something went wrong, please try again.");
			});
	};

	return (
		<div>
			<div className="likeContainer">
				{liked ? <HiHeart className="heart" /> : <HiOutlineHeart className="heart" onClick={handleLike} />}
				<p>{displayedVotes} </p>
			</div>
			{err ? <p>{err}</p> : null}
		</div>
	);
};

export default LikeButton;
