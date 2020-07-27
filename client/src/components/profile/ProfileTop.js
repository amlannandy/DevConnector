import React from 'react';

const ProfileTop = ({ profile }) => {
  return (
    <div className='profile-top bg-dark p-2'>
      <img className='round-img' src={profile.user.avatar} alt='' />
      <h1 className='large my-1'>{profile.user.name}</h1>
      <p className='lead'>{`${profile.status} at ${
        profile.company ?? 'Unspecified'
      }`}</p>
      <p>{profile.location}</p>
      <div className='icons my-1'>
        {profile.website && (
          <a href={profile.website} target='_blank' rel='noopener noreferrer'>
            <i className='fas fa-globe fa-2x'></i>
          </a>
        )}
        {profile.social[0] && profile.social[0].twitter && (
          <a
            href={profile.social[0].twitter}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-twitter fa-2x'></i>
          </a>
        )}
        {profile.social[0] && profile.social[0].linkedin && (
          <a
            href={profile.social[0].linkedin}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-linkedin fa-2x'></i>
          </a>
        )}
        {profile.social[0] && profile.social[0].facebook && (
          <a
            href={profile.social[0].facebook}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-facebook fa-2x'></i>
          </a>
        )}
        {profile.social[0] && profile.social[0].instagram && (
          <a
            href={profile.social[0].instagram}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-instagram fa-2x'></i>
          </a>
        )}
        {profile.youtube && profile.social[0].youtube && (
          <a
            href={profile.social[0].youtube}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-youtube fa-2x'></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileTop;
