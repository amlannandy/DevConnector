import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import Moment from 'react-moment';

import { deleteEducation } from '../../store/actions/profile';

const Education = ({ education }) => {
  const dispatch = useDispatch();

  if (education.length === 0) {
    return null;
  }

  const educations = education.map((edu) => (
    <tr key={edu.id}>
      <td>{edu.school}</td>
      <td className='hide-sm'>{edu.degree}</td>
      <td className='hide-sm'>
        <Moment format='DD/MM/YYYY'>{edu.from}</Moment> -{' '}
        {edu.to === null ? ' Now' : <Moment format='DD/MM/YYYY'></Moment>}
      </td>
      <td>
        <button
          className='btn btn-danger'
          onClick={() => dispatch(deleteEducation(edu.id))}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Education Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>School</th>
            <th className='hide-sm'>Degree</th>
            <th className='hide-sm'>Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

export default Education;
