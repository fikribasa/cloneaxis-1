import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';

export const getTransaction = id => {
  return {
    type: 'GET_TRANSACTION',
    payload: axios.get(
      `https://mobile-provider-clone.herokuapp.com/transaction/?UserId=${id}`,
    ),
  };
};
