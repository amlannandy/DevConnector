import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addLike, removeLike, deletePost } from '../../store/actions/posts';

const PostItem = ({ post }) => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  return (
    <div className='post bg-white my-1 p-1'>
      <div>
        <Link to={`/profile/${post.user}`}>
          <img className='round-img' src={post.avatar} alt='' />
          <h4>{post.name}</h4>
        </Link>
      </div>
      <div>
        <p className='my-1'>{post.text}</p>
        <button onClick={() => dispatch(addLike(post._id))} className='btn'>
          <i className='fas fa-thumbs-up'></i>
          {post.likes.length > 0 && <span>{' ' + post.likes.length}</span>}
        </button>
        <button onClick={() => dispatch(removeLike(post._id))} className='btn'>
          <i className='fas fa-thumbs-down'></i>
        </button>
        <Link to={`/post/${post._id}`} className='btn btn-primary'>
          Discussion{' '}
          <span className='comment-count'>{post.comments.length}</span>
        </Link>
        {!auth.loading && post.user === auth.user._id && (
          <button
            onClick={() => dispatch(deletePost(post._id))}
            className='btn btn-danger'
          >
            <i className='fas fa-times'></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default PostItem;
