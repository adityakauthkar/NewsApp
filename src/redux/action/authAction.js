/* eslint-disable prettier/prettier */
import { UPDATE_ONBOARDING_STATUS , UPDATE_USER_LOGIN , UPDATE_USER_ACCESS_TOKEN } from '../constants/constants';

export const updateOnboarding  = (status) =>{
    return {
        type : UPDATE_ONBOARDING_STATUS,
         data : status,
    };
};


export const updateUserlogin  = (user , isLoggedin) => {
    return {
        type: UPDATE_USER_LOGIN , 
        user , 
        isLoggedin 
    };
};

export const updateUserAccessToken  = (accessToken) => {
    return {
        type: UPDATE_USER_ACCESS_TOKEN,
        accessToken,
    };
};


