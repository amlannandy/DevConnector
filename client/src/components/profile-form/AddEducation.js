import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { addEducation } from '../../store/actions/profile';

const AddEducation = (props) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const dispatch = useDispatch();

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addEducation(formData, props.history));
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Add An Education</h1>
      <p className='lead'>
        <i className='fas fa-code-branch'></i> Add any school, bootcamp, etc
        that you have attended
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            value={school}
            onChange={(e) => onChange(e)}
            type='text'
            placeholder='* School'
            name='school'
            required
          />
        </div>
        <div className='form-group'>
          <input
            value={degree}
            onChange={(e) => onChange(e)}
            type='text'
            placeholder='* Degree'
            name='degree'
            required
          />
        </div>
        <div className='form-group'>
          <input
            value={fieldofstudy}
            onChange={(e) => onChange(e)}
            type='text'
            placeholder='Field of Study'
            name='fieldofstudy'
          />
        </div>
        <div className='form-group'>
          <h4>From Date</h4>
          <input
            value={from}
            onChange={(e) => onChange(e)}
            type='date'
            name='from'
          />
        </div>
        <div className='form-group'>
          <h4>To Date</h4>
          <input
            value={to}
            onChange={(e) => onChange(e)}
            type='date'
            name='to'
            disabled={toDateDisabled ? 'disabled' : ''}
          />
        </div>
        <div className='form-group'>
          <p>
            <input
              type='checkbox'
              value={current}
              checked={current}
              onChange={(e) => {
                setFormData({ ...formData, current: !current });
                toggleDisabled(!toDateDisabled);
              }}
              name='current'
            />{' '}
            Currently Studying
          </p>
        </div>
        <div className='form-group'>
          <textarea
            value={description}
            onChange={(e) => onChange(e)}
            name='description'
            cols='30'
            rows='5'
            placeholder='Description'
          ></textarea>
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

export default withRouter(AddEducation);
