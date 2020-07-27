import axios from 'axios';
import { setAlert } from './alert';

export const GET_POSTS = 'GET_POSTS';
export const POST_ERROR = 'POST_ERROR';

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/posts');
    dispatch({ type: GET_POSTS, payload: res.data });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
