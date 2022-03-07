import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Image, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Apptext from '../../../../components/Apptext';
import RoomsComp from '../../../../components/RoomsComp';
import DefaultStyles from '../../../../config/Styles';
import FormButton from '../../../../components/FormButton';
import { Calendar } from 'react-native-calendars';
import AntDesign from 'react-native-vector-icons/AntDesign'


const RoomsCalender = ({ navigation }) => {


    const renderArrow = (direction) => {
        if (direction === 'left') {
          return <Image source={require('../../../../../assets/CalleftArrow.png')} />
        } else {
          return <Image source={require('../../../../../assets/CalrightArrow.png')} />
        }
      }

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Image style={{ marginHorizontal: wp('5%'), marginTop: 18 }}
                    source={require('../../../../../assets/leftArrow.png')} />
            </TouchableOpacity>
            <View>
                <Apptext style={styles.createTxt}>Select your rooms availibilty time and date </Apptext>
            </View>
            <Apptext style={styles.bkTxt} >Book now</Apptext>
            <View style={{ alignSelf: 'center' }}>
                <Calendar
                    markingType='multi-dot'
                    marking={true}
                    // markedDates={markedDays}
                    // markedDates={{
                    //     '2022-03-16': {selected: true, marked: true, selectedColor: 'blue'},
                    //     '2022-03-17': {marked: true},
                    //     '2022-03-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                    //     '2022-03-19': {disabled: true, disableTouchEvent: true}
                    //   }}
                    renderArrow={renderArrow}
                    theme={{
                        textMonthFontSize: 20,
                        textMonthFontFamily: 'Poppins-Regular',
                        textDayHeaderFontWeight: "bold",
                        calendarBackground: "transparent",
                        selectedDayTextColor: "red",
                        todayTextColor: DefaultStyles.colors.primary,
                        dayTextColor: "#2d4150",
                        selectedDayBackgroundColor:DefaultStyles.colors.primary,
                        // selectedDayTextColor:"white",
                        
                        monthTextColor: "#383838",
                        textMonthFontFamily: 'Poppins-Regular',
                        textMonthFontWeight: '400',
                        "stylesheet.calendar.header": {
                            week: {
                              flexDirection: "row",
                              justifyContent: "space-between",
                              left: 2,
                              backgroundColor:"#f0f0f0",
                              width:wp('85%')
                            },
                            // header: {
                            //   alignSelf: "flex-start",
                            //   right: 2,
                            //   marginBottom: 20,
                            // },
                          },
                          "stylesheet.day.basic": {
                            base: {
                              width: 20,
                              height: 20,
                              alignItems: "center",
                              margin: -5,
                            },
                            text: {
                              marginTop: -5,
                              color: "black",
                              // fontWeight: 'bold',
                              fontSize: 12,
                              fontFamily: 'Poppins',
                            },
                          },
                    }}
                    style={[{height: 330, width:wp('90%') }]}
                    dayComponent={({ date, state, marking }) => {
                        return (
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity>
                                    <Text style={{
                                        textAlign: 'center', color: state === 'disabled' ? 'transparent' : marking ? 'green' : '#383838',
                                        fontFamily: 'Poppins-Medium', fontSize: 18, 
                                        marginRight: 10,
                                    }}>
                                        {date.day}
                                    </Text>
                                </TouchableOpacity>

                            </View>
                        );
                    }}
                />
            </View>
            <FormButton
                buttonTitle={"Next"}
                width={"90%"}
                onPress={() => navigation.navigate("HourlyPricing")}
            />
        </ScrollView>
    )
}

export default RoomsCalender;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    createTxt: {
        marginTop: wp('8%'),
        color: DefaultStyles.colors.black,
        fontFamily: 'Poppins-Regular',
        fontSize: wp('6%'),
        marginHorizontal: wp('5%')
    },
    bkTxt: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        marginHorizontal: wp('5%'),
        marginTop: wp('7%')
    }

});