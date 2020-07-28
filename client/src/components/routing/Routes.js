import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Post from '../../components/post/Post';
import Login from '../../components/auth/Login';
import Posts from '../../components/posts/Posts';
import Alert from '../../components/layout/Alert';
import Register from '../../components/auth/Register';
import Profile from '../../components/profile/Profile';
import NotFound from '../../components/layout/NotFound';
import Profiles from '../../components/profiles/Profiles';
import Dashboard from '../../components/dashboard/Dashboard';
import EditProfile from '../../components/profile-form/EditProfile';
import AddEducation from '../../components/profile-form/AddEducation';
import CreateProfile from '../../components/profile-form/CreateProfile';
import AddExperience from '../../components/profile-form/AddExperience';

export const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <Route exact path='/profiles' component={Profiles} />
        <Route exact path='/profile/:id' component={Profile} />
        <PrivateRoute exact path='/create-profile' component={CreateProfile} />
        <PrivateRoute exact path='/edit-profile' component={EditProfile} />
        <PrivateRoute exact path='/add-experience' component={AddExperience} />
        <PrivateRoute exact path='/add-education' component={AddEducation} />
        <PrivateRoute exact path='/posts' component={Posts} />
        <PrivateRoute exact path='/post/:id' component={Post} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
