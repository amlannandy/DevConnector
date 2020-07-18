import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { email, password } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('Success');
  };

  return (
    <Fragment>
      <h1 class='large text-primary'>Sign in</h1>
      <p class='lead'>
        <i class='fas fa-user'></i> Sign into your Account
      </p>
      <form class='form' onSubmit={onSubmit}>
        <div class='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(event) => onChange(event)}
          />
        </div>
        <div class='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(event) => onChange(event)}
          />
        </div>
        <input type='submit' value='Register' className='btn btn-primary' />
      </form>
      <p class='my-1'>
        New here?
        <Link to='/register'>Register</Link>
      </p>
    </Fragment>
  );
};

export default Login;
