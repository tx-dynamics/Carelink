import { t } from "i18next";
import { RedSnackbar } from "../assets/Snakbar";

export const emailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const passwordFormat =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;

export const isSignupValid = (firstName, lastName, email, password, confirmPassowrd) => {
    if (firstName == "" && lastName == "" && email == '' && password == '') {
        RedSnackbar('Details required');
        return false;
    }
    if (email == '') {
        RedSnackbar('Email required');
        return false;
    }
    if (!emailFormat.test(email)) {
        RedSnackbar('Enter valid email address');
        return false;
    }
    if (password == '') {
        RedSnackbar('Password required');
        return false;
    }
    if (!passwordFormat.test(password)) {
        RedSnackbar(
            '8 Characters required, One Uppercase, One Lowercase, One Number and one special case Character!',
        );
        return false;
    }
    if (confirmPassowrd != password) {
        RedSnackbar('Password does not match');
        return false;
    }
    return true;
};
export const isLoginValid = (email, password) => {
    if (email == '' && password == '') {
        RedSnackbar('Details required');
        return false;
    }
    if (email == '') {
        RedSnackbar('Email required');
        return false;
    }
    if (!emailFormat.test(email)) {
        RedSnackbar('Enter valid email address');
        return false;
    }
    if (password == '') {
        RedSnackbar('Password required');
        return false;
    }
    if (!passwordFormat.test(password)) {
        RedSnackbar(
            '8 Characters required, One Uppercase, One Lowercase, One Number and one special case Character!',
        );
        return false;
    }
    return true;
};
export const validEmail = (email) => {
    if (email == '') {
        RedSnackbar('Email required');
        return false;
    }
    if (!emailFormat.test(email)) {
        RedSnackbar('Enter valid email address');
        return false
    }
    return true;
}
export const validPassword = (password, confirmPassword) => {
    if (password == '') {
        RedSnackbar('Password required');
        return false;
    }
    if (!passwordFormat.test(password)) {
        RedSnackbar(
            '8 Characters required, One Uppercase, One Lowercase, One Number and one special case Character!',
        );
        return false;
    }
    if (confirmPassword != password) {
        RedSnackbar(
            'Password does not match',
        );
        return false;
    }
    return true;
}
export const validInfo = (age, status, experience) => {
    if (age == '' || status == '' || experience == '') {
        RedSnackbar('Details required');
        return false;
    }
    return true;
}