/**
 * @flow weak
 * file name  : configureStore.js
 * input      :
 * output     :
 * todo       : store
*/

import { createStore, applyMiddleware, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { todoReducer, initState } from '../reducers/todoReducer';

const store = createStore(
  todoReducer,
  initState,
  compose(applyMiddleware(logger, thunk), autoRehydrate())
);

persistStore(store, { storage: AsyncStorage });

export default store;
