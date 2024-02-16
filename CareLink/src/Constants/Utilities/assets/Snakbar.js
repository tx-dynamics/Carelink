import Snackbar from 'react-native-snackbar';
import colors from '../../../config/colors';
import { showMessage, hideMessage } from "react-native-flash-message";
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
    })
}
export const SuccessFlashMessage = (message) => {
    showMessage({
        message: message,
        type: "success",
        backgroundColor: colors.primary
    })
}