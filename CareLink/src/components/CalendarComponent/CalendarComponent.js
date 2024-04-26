import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../config/colors';
import {fontPixel, heightPixel, widthPixel} from '../../Constants';
import CalendarPicker from 'react-native-calendar-picker';
import {fonts} from '../../Constants/Fonts';

const CalendarComponent = ({onDateChange, minDate, maxDate}) => {
  return (
    <View>
      <Text style={styles.titleText}>Add Availability</Text>
      <CalendarPicker
        headerWrapperStyle={styles.customHeaderWrapper}
        allowBackwardRangeSelect={false}
        startFromMonday={true}
        allowRangeSelection={true}
        minDate={minDate}
        maxDate={maxDate}
        todayBackgroundColor={colors.primary}
        selectedDayColor={colors.primary}
        selectedDayTextColor="#FFFFFF"
        onDateChange={onDateChange}
        previousTitle="<"
        nextTitle=">"
        previousTitleStyle={styles.previousStyle}
        nextTitleStyle={styles.nextStyle}
      />
    </View>
  );
};

export default CalendarComponent;

const styles = StyleSheet.create({
  customHeaderWrapper: {
    backgroundColor: colors.calendarColor,
    width: '95%',
    borderRadius: widthPixel(10),
  },
  titleText: {
    fontSize: fontPixel(17),
    fontFamily: fonts.Poppins_Medium,
    color: colors.smallHeadingBlack,
    marginLeft: widthPixel(20),
    marginVertical: heightPixel(20),
  },
  previousStyle: {
    marginLeft: widthPixel(50),
    width: widthPixel(30),
    fontSize: fontPixel(25),
    color: colors.black,
  },
  nextStyle: {
    marginRight: widthPixel(50),
    width: widthPixel(30),
    fontSize: fontPixel(25),
    color: colors.black,
  },
});
