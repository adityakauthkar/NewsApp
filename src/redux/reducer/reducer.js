/* eslint-disable prettier/prettier */
import { persistCombineReducers } from 'redux-persist';
import constants from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { act } from 'react-test-renderer';
import authReducer from './authReducer';

const config = {
    key: constants.asyncStorageKey,
    storage: AsyncStorage,
    blacklist: [],
};


const appReducer = persistCombineReducers(config, {
auth:authReducer,
});


const rootReducer = (state, actions) => {
    return appReducer(state, actions);
};


export default rootReducer;

