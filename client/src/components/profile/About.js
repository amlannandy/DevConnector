import React, { Fragment } from 'react';

const About = ({ profile }) => {
  const skills = profile.skills.map((skill) => (
    <div key={skill} className='p-1'>
      <i className='fas fa-check'></i> {skill}
    </div>
  ));

  return (
    <div className='profile-about bg-light p-2'>
      {profile.bio && (
        <Fragment>
          <h2 className='text-primary py-1'>{`${profile.user.name}'s Bio`}</h2>
          <p>{profile.bio}</p>
          <div className='line'></div>
        </Fragment>
      )}
      <h2 className='text-primary my-1'>Skill Set</h2>
      <div className='skills'>{skills}</div>
    </div>
  );
};

export default About;
