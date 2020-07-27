import React from 'react';
import Moment from 'react-moment';

const Education = ({ profile }) => {
  const educations = profile.education.map((edu) => (
    <div key={edu._id}>
      <h3>{edu.school}</h3>
      <p>
        <Moment format='DD/MM/YYYY'>{edu.from}</Moment> -{' '}
        {edu.to === null ? ' Now' : <Moment format='DD/MM/YYYY'></Moment>}
      </p>
      <p>
        <strong>Field</strong> - {edu.fieldofstudy}
      </p>
      <p>
        <strong>Description</strong> - {edu.description}
      </p>
    </div>
  ));

  return (
    <div className='profile-edu bg-light p-2'>
      <h2 className='text-primary'>Education</h2>
      {educations}
    </div>
  );
};

export default Education;
