import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import Comment from './Comment';
import Spinner from '../layout/Spinner';
import CommentForm from './CommentForm';
import { getPostById } from '../../store/actions/posts';

const Post = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostById(match.params.id));
  }, [dispatch, match.params.id]);

  const { post, loading } = useSelector((state) => state.posts);

  if (post == null || loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <Link to='/posts' className='btn'>
        Back To Posts
      </Link>
      <div className='post bg-white p-1 my-1'>
        <div>
          <Link to={`profile/${post.user}`}>
            <img className='round-img' src={post.avatar} alt='' />
            <h4>{post.name}</h4>
          </Link>
        </div>
        <div>
          <p className='my-1'>{post.text}</p>
          <small>
            Posted on {<Moment format='DD/MM/YYYY'>{post.date}</Moment>}
          </small>
        </div>
      </div>
      <CommentForm id={post._id} />
      <div className='comments'>
        {post.comments.map((comment) => (
          <Comment key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
    </Fragment>
  );
};

export default Post;
