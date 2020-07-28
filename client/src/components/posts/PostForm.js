import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../store/actions/posts';

const PostForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const submitPostHandler = (e) => {
    e.preventDefault();
    dispatch(addPost({ text }));
    setText('');
  };

  return (
    <Fragment>
      <div className='post-form-header bg-primary p-1'>
        <h3>Say Something</h3>
      </div>
      <form className='form my-1' onSubmit={submitPostHandler}>
        <textarea
          onChange={(e) => setText(e.target.value)}
          value={text}
          cols='30'
          rows='5'
          placeholder='Create a Post'
        ></textarea>
        <input type='submit' value='Submit' className='btn btn-dark my-1' />
      </form>
    </Fragment>
  );
};

export default PostForm;
