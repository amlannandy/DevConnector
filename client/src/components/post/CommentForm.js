import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addComment } from '../../store/actions/posts';

const CommentForm = ({ id }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const addCommentHandler = (e) => {
    e.preventDefault();
    dispatch(addComment(id, { text }));
    setText('');
  };

  return (
    <div className='post-form'>
      <div className='post-form-header bg-primary'>
        <h3>Leave A Comment</h3>
      </div>
      <form className='form my-1' onSubmit={addCommentHandler}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          name='text'
          cols='30'
          rows='5'
          placeholder='Comment on this post'
        ></textarea>
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

export default CommentForm;
