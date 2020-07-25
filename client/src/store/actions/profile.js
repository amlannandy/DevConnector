import axios from 'axios';

import { setAlert } from './alert';

export const GET_PROFILE = 'GET_PROFILE';
export const CLEAR_PROFILE = 'CLEAR_PROFILE';
export const PROFILE_ERROR = 'PROFILE_ERROR';
export const CREATE_PROFILE = 'CREATE_PROFILE';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const DELETE_ACCOUNT = 'DELETE_aCCOUNT';

// Get current user's profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/profile/me');
    dispatch({ type: GET_PROFILE, payload: res.data });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        mgs: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Create or update profile
export const createProfile = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('/api/profile', formData, config);
    dispatch({ type: CREATE_PROFILE, payload: res.data });
    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));
    if (!edit) {
      history.push('/dashboard');
    }
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        mgs: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Add Experience
export const addExperience = (formData, history) => async (dispatch) => {
  try {
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.put('/api/profile', formData, config);
    dispatch({ type: UPDATE_PROFILE, payload: res.data });
    dispatch(setAlert('Experience Added', 'success'));
    history.push('/dashboard');
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Add Education
export const addEducation = (formData, history) => async (dispatch) => {
  try {
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.put('/api/profile/education', formData, config);
    dispatch({ type: UPDATE_PROFILE, payload: res.data });
    dispatch(setAlert('Education Added', 'success'));
    history.push('/dashboard');
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Delete Experience
export const deleteExperience = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/profile/experience/${id}`);
    dispatch({ type: UPDATE_PROFILE, payload: res.data });
    dispatch(setAlert('Experience Deleted', 'warning'));
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Delete Education
export const deleteEducation = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/profile/education/${id}`);
    dispatch({ type: UPDATE_PROFILE, payload: res.data });
    dispatch(setAlert('Education Deleted', 'warning'));
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Delete account and profile
export const deleteAccount = () => async (dispatch) => {
  if (window.confirm('Are you sure?')) {
    try {
      await axios.delete('/api/profile');
      dispatch({ type: CLEAR_PROFILE });
      dispatch({ type: DELETE_ACCOUNT });
      dispatch(setAlert('Your Account has been deleted'));
    } catch (error) {
      console.log(error);
      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status,
        },
      });
    }
  }
};
