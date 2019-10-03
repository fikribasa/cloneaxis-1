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

export const login = phone => {
  return{
    type : 'LOGIN_USER',
    payload: axios.post('https://mobile-provider-clone.herokuapp.com/user/login', phone)
  }
}

export const sendOtp = phone => {
  return {
    type: 'SEND_OTP',
    payload: axios.post('https://mobile-provider-clone.herokuapp.com/otp/loginOtp', phone)
  }
}

export const sendEmail = user => {
  return{
    type: 'SEND_EMAIL',
    payload: axios.post('https://mobile-provider-clone.herokuapp.com/otp/sentmail', user)
  }
}

// export const patchUser = (id, data) => {
//   return {
//     type: 'PATCH_USER',
//     payload: axios.patch(
//       `https://instrument-shop-backend.herokuapp.com/api/products/${id}`,
//       data,
//       {
//         headers: {
//           'x-auth-token': AsyncStorage.getItem('token'),
//         },
//       },
//     ),
//   };
// };
