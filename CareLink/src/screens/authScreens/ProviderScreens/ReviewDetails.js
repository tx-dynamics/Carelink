import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Apptext from '../../../components/Apptext';
import FormButton from '../../../components/FormButton';
import DefaultStyles from '../../../config/Styles';
import IconHeaderComp from '../../../components/IconHeaderComp';
import {iconPath} from '../../../config/icon';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';

export default function ReviewDetails({navigation}) {
  const [titleValue, setTitleValue] = useState(
    'Looking For A Depenable Caregiver in ABC ',
  );
  const [descValue, setDescValue] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget orci eget turpis ornare. Montes, elementum tincidunt eu malesuada scelerisque eget egestas dictum ut. Aliquam volutpat morbi sed ac ac non duis aliquet. Aliquam sollicitudin magna felis posuere elementum. Vel eget aliquet enim augue ac habitant quam montes. Bibendum du',
  );

  return (
    <AppGLobalView style={styles.container}>
      <IconHeaderComp
        onPress={() => navigation.goBack()}
        imgName={iconPath.leftArrow}
        heading={'Review Details'}
      />
      <Apptext style={styles.innerText}>
        {
          'Here is the summary of your care needs. feel free to edit and once you are finished, a Care advisor will reach out to help you with your search.'
        }
      </Apptext>
      <Apptext style={[styles.innerText, {marginTop: 25}]}>{'Title'}</Apptext>

      <TextInput
        style={{
          borderWidth: 1,
          borderRadius: 10,
          height: 48,
          marginHorizontal: wp(5),
          marginTop: 5,
          paddingHorizontal: 8,
        }}
        value={titleValue}
        onChangeText={txt => setTitleValue(txt)}></TextInput>

      <Apptext style={styles.locText}>{'Location        4hours/week'}</Apptext>

      <Apptext style={[styles.innerText, {marginTop: 0}]}>
        {'Job Description'}
      </Apptext>

      <TextInput
        style={{
          borderWidth: 1,
          borderRadius: 10,
          height: 160,
          paddingTop: '5%',
          marginHorizontal: wp(5),
          marginTop: 5,
          paddingHorizontal: 8,
          textAlign: 'justify',
          textAlignVertical: 'top',
        }}
        value={descValue}
        onChangeText={txt => setDescValue(txt)}
        multiline></TextInput>

      <View style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 30}}>
        <FormButton
          buttonTitle={'Next'}
          width={wp('90%')}
          onPress={() => navigation.navigate('PaymentPlans')}
        />
      </View>
    </AppGLobalView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultStyles.colors.white,
    flex: 1,
  },
  innerText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginHorizontal: wp('5%'),
    marginTop: 10,
  },
  locText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#999999',
    textAlign: 'center',
    marginVertical: wp(6),
  },
});
