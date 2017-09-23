import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './configs/configureStore';
import MainNavigator from './configs/mainNavigator';

export default class MainApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    )
  };
}
