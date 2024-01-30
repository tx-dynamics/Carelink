import Snackbar from 'react-native-snackbar';
import colors from '../../../config/colors';

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
