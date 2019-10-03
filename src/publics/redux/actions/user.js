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

export const patchUser = (id, data) => {
  return {
    type: 'PATCH_USER',
    payload: axios.patch(
      `https://mobile-provider-clone.herokuapp.com/user/${id}`,
      data,
      {
        headers: {
          // header_key: 'PR0V1D3R',
          // token:
          //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IkFkbWluMSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU2OTgwNDc0NiwiZXhwIjoxNTY5ODkxMTQ2fQ.kvZhtqiIqXXHJI2pGcjr0baoAyuXsGmPmsGR8aSLZJE',
          // Content-Type: 'application/x-www-form-urlencoded',
          // 'x-auth-token': AsyncStorage.getItem('token'),
        },
      },
    ),
  };
};
