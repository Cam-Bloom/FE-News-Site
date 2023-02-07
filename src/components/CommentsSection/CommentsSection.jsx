import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsById } from '../../utils'
import CommentCard from "../CommentCard/CommentCard";
import './CommentsSection.css'



const CommentsSection = () => {
	const { article_id } = useParams();

  const [comments, setComments] = useState([])

  useEffect(() => {
    fetchCommentsById(article_id)
    .then(res => setComments(res.comments))
  }, [])

  return (
    <section className="commentSection">
      <h2>Comments</h2>
      {comments.map(comment => <CommentCard key={comment.comment_id} comment={comment}/>)}
    </section>
  )
}

export default CommentsSection