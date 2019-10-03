import axios from 'axios';

export const postReport = (complain, UserId) => {
  return {
    type: 'POST_REPORT',
    payload: axios.post(
      `https://mobile-provider-clone.herokuapp.com/report`,
      complain,
    ),
  };
};
