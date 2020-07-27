import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProfileItem from './ProfileItem';
import Spinner from '../layout/Spinner';
import { getProfiles } from '../../store/actions/profile';

const Profiles = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfiles());
  }, [dispatch]);

  const { profiles, loading } = useSelector((state) => state.profile);

  if (loading) {
    return <Spinner />;
  }

  const profileItems = profiles.map((prof, index) => (
    <ProfileItem key={index} profile={prof} />
  ));

  return (
    <Fragment>
      <h1 className='large text-primary'>Developers</h1>
      <p className='lead'>
        <i className='fab fa-connectdevelop'></i> Browse and Connect with other
        developers
      </p>
      {profiles.length === 0 ? <h1>No Profiles Found</h1> : profileItems}
    </Fragment>
  );
};

export default Profiles;
