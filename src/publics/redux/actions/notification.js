import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';

export const getNotification = UserId => {
  return {
    type: 'GET_NOTIFICATION',
    payload: axios.get(
      `https://mobile-provider-clone.herokuapp.com/notification/?UserId=${UserId}`,
    ),
  };
};
