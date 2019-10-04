import axios from 'axios';

export const postReport = (data, token) => {
  return {
    type: 'POST_REPORT',
    payload: axios.post(
      `https://mobile-provider-clone.herokuapp.com/report`,
      data,
      {
        headers: {
          header_key: 'PR0V1D3R',
          token: token
        },
      },
    ),
  };
};
