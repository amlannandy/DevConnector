import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import About from './About';
import Education from './Education';
import ProfileTop from './ProfileTop';
import Experience from './Experience';
import Spinner from '../layout/Spinner';
import Repositories from './Repositories';
import { getProfileById } from '../../store/actions/profile';

const Profile = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileById(match.params.id));
  }, [dispatch, match.params.id]);

  const { profile, loading } = useSelector((state) => state.profile);
  const auth = useSelector((state) => state.auth);

  if (loading || profile === null) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <Link to='/profiles' className='btn btn-danger my-1'>
        Back to Profiles
      </Link>
      {auth.isAuthenticated &&
        !auth.loading &&
        auth.user._id === profile.user._id && (
          <Link to='/edit-profile' className='btn btn-warning my-1'>
            Edit Profile
          </Link>
        )}
      <div className='profile-grid my-1'>
        <ProfileTop profile={profile} />
        <About profile={profile} />
        <Experience profile={profile} />
        <Education profile={profile} />
        {profile.githubusername && (
          <Repositories githubusername={profile.githubusername} />
        )}
      </div>
    </Fragment>
  );
};

export default Profile;
