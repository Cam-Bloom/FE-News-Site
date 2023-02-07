import './CommentCard.css'

const CommentCard = ({comment}) => {

  const { body, author, votes, created_at} = comment


  return (
    <div className='commentCard'>
      <h5>{author}</h5>
      <p>{body}</p>
    </div>
  )
}

export default CommentCard