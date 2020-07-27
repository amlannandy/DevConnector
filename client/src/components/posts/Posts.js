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

  return <Fragment></Fragment>;
};

export default Posts;
