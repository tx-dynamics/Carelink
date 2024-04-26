import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../config/colors';

const AppGLobalView = ({children, style}) => {
  return (
    <>
      {Platform.OS === 'ios' ? (
        <SafeAreaView style={[styles.container, style]}>
          {children}
        </SafeAreaView>
      ) : (
        <View style={[styles.container, style]}>{children}</View>
      )}
    </>
  );
};

export default AppGLobalView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    // zIndex: 999
  },
});
