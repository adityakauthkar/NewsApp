/* eslint-disable prettier/prettier */
import { UPDATE_ONBOARDING_STATUS , UPDATE_USER_ACCESS_TOKEN , UPDATE_USER_LOGIN } from '../constants/constants';

const initialState = {
    onBoardingDone : false,
    isLoggedin : false,
    user: {},
    accessToken:""
};



const authReducer = (state = initialState, action) => {

const {status , type , isLoggedin , user , accessToken } = action;




    switch (type) {

        case UPDATE_ONBOARDING_STATUS:
        return {...state, onBoardingDone : status};


        case UPDATE_USER_LOGIN: 
        return{...state , user , isLoggedin } ;

        case UPDATE_USER_ACCESS_TOKEN: 
        return{...state, accessToken };

        default :
        return state;
    }
};


export default authReducer;
