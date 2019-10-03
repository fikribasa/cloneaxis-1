import axios from 'axios';

export const postReport = data => {
  return {
    type: 'POST_REPORT',
    payload: axios.post(
      `https://mobile-provider-clone.herokuapp.com/report`,
      data,
    ),
  };
};
