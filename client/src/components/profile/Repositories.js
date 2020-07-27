import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getGithubRepos } from '../../store/actions/profile';

const Repositories = ({ githubusername }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGithubRepos(githubusername));
  }, [dispatch, githubusername]);

  const repos = useSelector((state) => state.profile.repos);

  if (repos.length === 0) {
    return null;
  }

  const myRepos = repos.map((rep) => (
    <div key={rep.id} className='repo my-1 p-1'>
      <div>
        <h3>
          <a href={rep.html_url} target='_blank' rel='noopener noreferrer'>
            {rep.name}
          </a>
        </h3>
        <p>{rep.description}</p>
      </div>
      <div>
        <ul>
          <li className='badge badge-danger p-1'>
            Stars: {rep.stargazers_count}
          </li>
          <li className='badge badge-primary p-1'>
            Watchers: {rep.watchers_count}
          </li>
          <li className='badge badge-success p-1'>Forks: {rep.forks_count}</li>
        </ul>
      </div>
    </div>
  ));

  return (
    <div className='profile-github bg-dark p-2'>
      <h2 className='text-primary my-1'>
        <i className='fab fa-github'></i>
        {'  '}Github Repositories
      </h2>
      {myRepos}
    </div>
  );
};

export default Repositories;
