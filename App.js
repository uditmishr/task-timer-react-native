import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import MainScreen from './screens/MainScreen';

const App = () => (
  <Provider store={store}>
    <MainScreen />
  </Provider>
);

export default App;
