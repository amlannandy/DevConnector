import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import Moment from 'react-moment';

import { deleteExperience } from '../../store/actions/profile';

const Experience = ({ experience }) => {
  const dispatch = useDispatch();

  if (experience.length === 0) {
    return null;
  }

  const experiences = experience.map((exp) => (
    <tr key={exp.id}>
      <td>{exp.company}</td>
      <td className='hide-sm'>{exp.title}</td>
      <td className='hide-sm'>
        <Moment format='DD/MM/YYYY'>{exp.from}</Moment> -{' '}
        {exp.to === null ? ' Now' : <Moment format='DD/MM/YYYY'></Moment>}
      </td>
      <td>
        <button
          className='btn btn-danger'
          onClick={() => dispatch(deleteExperience(exp.id))}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Experience Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Company</th>
            <th className='hide-sm'>Title</th>
            <th className='hide-sm'>Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

export default Experience;
