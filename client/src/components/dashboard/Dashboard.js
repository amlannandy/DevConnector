import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Education from './Education';
import Experience from './Experience';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import { getCurrentProfile, deleteAccount } from '../../store/actions/profile';

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch]);

  const { user } = useSelector((state) => state.auth);
  const { profile, loading } = useSelector((state) => state.profile);

  return loading && profile == null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome {user && user.name}
      </p>
      {profile != null ? (
        <Fragment>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
          <button
            className='btn btn-danger my-2'
            onClick={() => dispatch(deleteAccount())}
          >
            <i className='fas fa-user-minus'></i> Delete My Account
          </button>
        </Fragment>
      ) : (
        <Fragment>
          <p className='lead text-dark my-1'>
            No Profile found. Create one now.
          </p>
          <Link to='/create-profile' className='btn btn-success my-1'>
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Dashboard;
