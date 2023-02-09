import { RiDeleteBinLine } from "react-icons/ri";
import { deleteComment } from "../../utils";
import "./CommentCard.css";

const CommentCard = ({ comment, setComments }) => {
	const { body, author, comment_id } = comment;


  const handleDelete = () => {
    setComments(currentComments => {
      const newComments = currentComments.filter(currentComment => (currentComment.comment_id !== comment.comment_id))
      
      return newComments
    })
  
    deleteComment(comment_id)
  }

	return (
		<div className="commentCard flex" >
			<div className="commentContent">
				<h5>{author}</h5>
				<p>{body}</p>
			</div>
			<RiDeleteBinLine onClick={handleDelete} className="deleteIcon"/>
    </div>
	);
};

export default CommentCard;
