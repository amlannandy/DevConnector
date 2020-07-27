import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from '../layout/Spinner';
import { getPosts } from '../../store/actions/posts';

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const { posts, loading } = useSelector((state) => state.posts);

  if (loading) {
    return <Spinner />;
  }

  return <Fragment>
    <h1 class="large text-primary">Posts</h1>
    <p class="lead"><i class="fas fa-user"></i> Welcome to the community!</p>
  </Fragment>;
};

export default Posts;
