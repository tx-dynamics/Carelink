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


const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>App.js</Text>
      </View>
    </SafeAreaView>
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
