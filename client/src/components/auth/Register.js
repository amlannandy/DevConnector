import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setAlert } from '../../store/actions/alert';
import { register } from '../../store/actions/auth';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
  });
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { name, email, password, confirmpassword } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      dispatch(setAlert("Passwords don't match", 'danger'));
      return;
    }
    dispatch(register({ name, email, password }));
  };

  //Redirect if Logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create your Account
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            value={name}
            name='name'
            onChange={(event) => onChange(event)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(event) => onChange(event)}
            required
          />
          <small className='form-text'>
            This site uses Gravatar, so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(event) => onChange(event)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            value={confirmpassword}
            name='confirmpassword'
            onChange={(event) => onChange(event)}
            required
          />
        </div>
        <input type='submit' value='Register' className='btn btn-primary' />
      </form>
      <p className='my-1'>
        Already have an account?
        <Link to='/login'> Sign in</Link>
      </p>
    </Fragment>
  );
};

export default Register;
