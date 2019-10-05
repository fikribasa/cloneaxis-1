import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
export const postReport = data => {
  return {
    type: 'POST_REPORT',
    payload: axios.post(
      `https://mobile-provider-clone.herokuapp.com/report`,
      data,
      {
        headers: {
          token: AsyncStorage.getItem('token'),
          header_key: 'PR0V1D3R',
        },
      },
    ),
  };
};
