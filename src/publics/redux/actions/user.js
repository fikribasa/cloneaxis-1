import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const getUser = id => {
  return {
    type: 'GET_USER',
    payload: axios.get(
      `https://mobile-provider-clone.herokuapp.com/user/admin/${id}`,
    ),
  };
};

export const patchUser = (id, data) => {
  return {
    type: 'PATCH_USER',
    payload: axios.patch(
      `https://instrument-shop-backend.herokuapp.com/api/products/${id}`,
      data,
      {
        headers: {
          'x-auth-token': AsyncStorage.getItem('token'),
        },
      },
    ),
  };
};
