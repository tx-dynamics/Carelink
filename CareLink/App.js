import 'react-native-gesture-handler';
import React from 'react';
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
import store from './src/redux/store';
import {useSelector} from 'react-redux'


const App = () => {
  return (
   
    <NavigationContainer>
    
      <Provider store={store}>
     
      <Main />
      
      </Provider>
     
    </NavigationContainer>
   
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex:1,
  alignItems:'center',
  justifyContent:'center'
  }
});

export default App;
