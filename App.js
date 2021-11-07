/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { Provider } from 'react-redux';

import ThemeManager from './src/components/container/ThemeManager';
import Navigator from './src/navigation';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppearanceProvider>
        <ThemeManager>
          <Navigator />
        </ThemeManager>
      </AppearanceProvider>
    </Provider>
  );
};

export default App;
