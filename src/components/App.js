/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/PeopleReducer';
import PeopleList from './PeopleList';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <PeopleList />
      </View>
    </Provider>
  );
}
