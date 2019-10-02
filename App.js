import React from 'react';
import Router from './src/routes';
import store from './src/publics/redux/store';
import {Provider} from 'react-redux';

export default App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};
