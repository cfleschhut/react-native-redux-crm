/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/reducers/PeopleReducer';
import App from './src/components/App';
import { name as appName } from './app.json';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default function Main() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </StoreProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
