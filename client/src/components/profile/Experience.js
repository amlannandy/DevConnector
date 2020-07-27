import React from 'react';
import Moment from 'react-moment';

const Experience = ({ profile }) => {
  const experiences = profile.experience.map((exp) => (
    <div key={exp._id}>
      <h3>{exp.company}</h3>
      <p>
        <Moment format='DD/MM/YYYY'>{exp.from}</Moment> -{' '}
        {exp.to === null ? ' Now' : <Moment format='DD/MM/YYYY'></Moment>}
      </p>
      <p>
        <strong>Position</strong> - {exp.title}
      </p>
      <p>
        <strong>Description</strong> - {exp.description}
      </p>
    </div>
  ));

  return (
    <div className='profile-exp bg-light p-2'>
      <h2 className='text-primary'>Experiences</h2>
      {experiences}
    </div>
  );
};

export default Experience;
