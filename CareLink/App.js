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


const App = () => {
  return (
    <NavigationContainer>
      <Main />
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
