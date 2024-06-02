import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Main from './src/Main';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import FlashMessage from 'react-native-flash-message';
import {MenuProvider} from 'react-native-popup-menu';
import {StripeProvider} from '@stripe/stripe-react-native';
import {STRIPE_KEY} from './src/network/Environment';
import {checkLocationPermission} from './src/Services/HelpingMethods';

class App extends Component {
  componentDidMount() {
    checkLocationPermission();
  }

  render() {
    let persistor = persistStore(store);
    return (
      <Provider store={store}>
        <NavigationContainer>
          <PersistGate loading={null} persistor={persistor}>
            <MenuProvider>
              <StripeProvider publishableKey={STRIPE_KEY}>
                {Platform.OS === 'ios' ? (
                  <View style={{flex: 1}}>
                    <Main />
                  </View>
                ) : (
                  <View style={{flex: 1}}>
                    <Main />
                  </View>
                )}
              </StripeProvider>
            </MenuProvider>
            <FlashMessage position="top" />
          </PersistGate>
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
