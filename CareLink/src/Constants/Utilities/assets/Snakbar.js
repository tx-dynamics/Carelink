import Snackbar from 'react-native-snackbar';
import colors from '../../../config/colors';
import { showMessage, hideMessage } from "react-native-flash-message";
import { StatusBar } from 'react-native';
export function SuccessSnackbar(text) {
    Snackbar.show({
        text: text,
        duration: Snackbar.LENGTH_SHORT,
        textColor: '#fff',
        backgroundColor: colors.green,
    });
}

export function RedSnackbar(text) {
    Snackbar.show({
        text: text,
        duration: Snackbar.LENGTH_SHORT,
        textColor: '#fff',
        backgroundColor: 'red',
    });
}


export const RedFlashMessage = (message) => {
    showMessage({
        message: message,
        type: "danger",
        backgroundColor: "red",
        floating: true,
        statusBarHeight: StatusBar.currentHeight
    })
}
export const SuccessFlashMessage = (message) => {
    showMessage({
        message: message,
        type: "success",
        backgroundColor: colors.primary,
        floating: true,
        statusBarHeight: StatusBar.currentHeight
    })
}