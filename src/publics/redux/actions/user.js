import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const getUser = id => {
  return {
    type: 'GET_USER',
    payload: axios.get(
      `https://mobile-provider-clone.herokuapp.com/user/${id}`,
    ),
  };
};

export const login = phone => {
  return {
    type: 'LOGIN_USER',
    payload: axios.post(
      'https://mobile-provider-clone.herokuapp.com/user/login',
      phone,
    ),
  };
};

export const sendOtp = phone => {
  return {
    type: 'SEND_OTP',
    payload: axios.post(
      'https://mobile-provider-clone.herokuapp.com/otp/loginOtp',
      phone,
    ),
  };
};

export const sendEmail = user => {
  return {
    type: 'SEND_EMAIL',
    payload: axios.post(
      'https://mobile-provider-clone.herokuapp.com/otp/sentmail',
      user,
    ),
  };
};

export const patchUser = (id, data, token) => {
  return {
    type: 'PATCH_USER',
    payload: axios.patch(
      `https://mobile-provider-clone.herokuapp.com/user/${id}`,
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

export const getUserById = (id_user,token) => {
  console.log(id_user,token)
  return {
    type: 'GET_USER_BY_ID',
    payload: axios.get(
      `https://mobile-provider-clone.herokuapp.com/user/${id_user}`,
      {
        headers: {
          header_key: 'PR0V1D3R',
          token: token
        },
      },
    ),
  };
};
