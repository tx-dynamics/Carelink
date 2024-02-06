import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fontPixel, heightPixel } from '../../Constants';
import colors from '../../config/colors';
import { fonts } from '../../Constants/Fonts';

const CountDownComponent = ({ onPress }) => {
    const [duration, setDuration] = useState(59);
    const [paused, setPaused] = useState(true);

    useEffect(() => {
        let timerId;
        timerId = setInterval(() => {
            setDuration(prev => prev - 1);
        }, 1000);
        // console.log(timerId);

        if (duration === 0) {
            console.log(`Time's up`);
            clearInterval(timerId);
        }

        return function cleanup() {
            // console.log(`Clearing ${timerId}`);
            clearInterval(timerId);
        };
    }, [paused, duration]);
    return (
        <View style={styles.container}>
            <Text style={styles.counterText}>
                {/* {"00:" + duration > 9 ? duration : "00:" + `0${duration}`} */}
                {duration > 9 ? `00:${duration}` : `00:0${duration}`}
            </Text>
            <Text style={styles.didntText}>Didn’t get code?
                <Text onPress={onPress} disabled={duration != 0 ? true : false} style={{
                    marginTop: heightPixel(10),
                    color: duration != 0 ? colors.gray : colors.primary,
                    textAlign: "center",
                    fontSize: fontPixel(14),
                    fontFamily: fonts.Poppins_Medium,
                }}> Send again</Text>
            </Text>
        </View>
    )
}

export default CountDownComponent

const styles = StyleSheet.create({
    container: {
        marginTop: heightPixel(40)
    },
    counterText: {
        color: colors.black,
        textAlign: "center",
        fontSize: fontPixel(20),
        fontFamily: fonts.Poppins_Medium,
    },
    didntText: {
        marginTop: heightPixel(10),
        color: colors.messageBody,
        textAlign: "center",
        fontSize: fontPixel(14),
        fontFamily: fonts.Poppins_Medium,
    },
})