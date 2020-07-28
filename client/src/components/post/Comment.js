import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteComment } from '../../store/actions/posts';

const Comment = ({ comment, postId }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const deleteCommentHandler = () => {
    dispatch(deleteComment(postId, comment._id));
  };

  return (
    <div className='post bg-white p-1 my-1'>
      <div>
        <Link to={`/profile/${comment.user}`}>
          <img className='round-img' src={comment.avatar} alt='' />
          <h4>{comment.name}</h4>
        </Link>
      </div>
      <div>
        <p className='my-1'>{comment.text}</p>
        {!auth.loading && auth.user.id === comment.user._id && (
          <button onClick={deleteCommentHandler} className='btn btn-danger'>
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default Comment;
