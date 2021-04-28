import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
// import { NavigationContainer } from '@react-navigation/native';

import {store} from './store';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
