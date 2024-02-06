import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/Main';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux'
// import { store } from './android/app/src/redux/store';
import { store } from './src/redux/store';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

class App extends Component {
  render() {
    let persistor = persistStore(store)
    return (
      <Provider store={store}>
        <NavigationContainer>
          <PersistGate loading={null} persistor={persistor}>
            <Main />
          </PersistGate>
        </NavigationContainer>
      </Provider>
    )
  }
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
